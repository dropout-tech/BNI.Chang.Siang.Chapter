-- ============================================================
-- InsForge / Postgres — BNI 長翔名人堂後台資料表與 RLS
-- ============================================================
-- 於 InsForge 專案的 Database → SQL Editor（或 Postgres）貼上執行。
-- 可比對現有結構調整；已存在的物件會以 DROP POLICY IF EXISTS 後重建策略。
-- ============================================================

-- ----- Tables -----
CREATE TABLE IF NOT EXISTS public.homepage_stats (
    idx SERIAL PRIMARY KEY,
    month VARCHAR(7) NOT NULL UNIQUE,
    referral_count BIGINT NOT NULL DEFAULT 0,
    referral_value NUMERIC(20, 2) NOT NULL DEFAULT 0,
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS public.referrals (
    idx SERIAL PRIMARY KEY,
    id TEXT NOT NULL UNIQUE,
    title TEXT NOT NULL,
    description TEXT,
    metrics JSONB,
    referrer_name TEXT,
    referee_name TEXT,
    referrer_story TEXT,
    referrer_testimonial TEXT,
    referee_story TEXT,
    referee_value TEXT,
    referrer_is_external BOOLEAN DEFAULT false,
    referee_is_external BOOLEAN DEFAULT false,
    "createdAt" TIMESTAMPTZ DEFAULT NOW(),
    created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS public.members (
    idx SERIAL PRIMARY KEY,
    id INTEGER UNIQUE,
    name TEXT NOT NULL,
    company TEXT,
    "Company" TEXT,
    position TEXT,
    title TEXT,
    industry TEXT,
    category TEXT,
    "shortIntro" TEXT,
    "fullIntro" TEXT,
    photo TEXT,
    "photoPosition" TEXT DEFAULT 'center',
    services JSONB DEFAULT '[]'::jsonb,
    hashtags JSONB DEFAULT '[]'::jsonb,
    links JSONB DEFAULT '{}'::jsonb,
    "pinHash" TEXT,
    "editCount" INTEGER DEFAULT 0,
    "createdAt" TIMESTAMPTZ DEFAULT NOW(),
    "updatedAt" TIMESTAMPTZ DEFAULT NOW(),
    user_id TEXT,
    is_admin BOOLEAN DEFAULT false,
    phone TEXT,
    email TEXT,
    status TEXT DEFAULT 'active',
    membership_type TEXT,
    frozen_at TIMESTAMPTZ,
    frozen_by TEXT,
    frozen_reason TEXT,
    slug TEXT,
    is_gold_badge BOOLEAN DEFAULT false
);

ALTER TABLE public.referrals ADD COLUMN IF NOT EXISTS referrer_is_external BOOLEAN DEFAULT false;
ALTER TABLE public.referrals ADD COLUMN IF NOT EXISTS referee_is_external BOOLEAN DEFAULT false;
ALTER TABLE public.members ADD COLUMN IF NOT EXISTS frozen_at TIMESTAMPTZ;
ALTER TABLE public.members ADD COLUMN IF NOT EXISTS frozen_by TEXT;
ALTER TABLE public.members ADD COLUMN IF NOT EXISTS frozen_reason TEXT;
ALTER TABLE public.members ADD COLUMN IF NOT EXISTS slug TEXT;
ALTER TABLE public.members ADD COLUMN IF NOT EXISTS is_gold_badge BOOLEAN DEFAULT false;

CREATE UNIQUE INDEX IF NOT EXISTS members_name_unique_idx
    ON public.members (name);

CREATE UNIQUE INDEX IF NOT EXISTS members_slug_unique_idx
    ON public.members (slug)
    WHERE slug IS NOT NULL;

CREATE TABLE IF NOT EXISTS public.member_traffic_scores (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    member_id INTEGER NOT NULL,
    month VARCHAR(7) NOT NULL,
    score INTEGER NOT NULL DEFAULT 0 CHECK (score >= 0),
    level TEXT NOT NULL DEFAULT 'green' CHECK (level IN ('green', 'yellow', 'red')),
    notes TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW(),
    UNIQUE (member_id, month)
);

CREATE TABLE IF NOT EXISTS public.faqs (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    question TEXT NOT NULL,
    answer TEXT NOT NULL,
    sort_order INTEGER NOT NULL DEFAULT 0,
    is_active BOOLEAN NOT NULL DEFAULT true,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS public.audit_logs (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    table_name TEXT NOT NULL,
    record_id TEXT,
    action TEXT NOT NULL CHECK (action IN ('INSERT', 'UPDATE', 'DELETE')),
    old_row JSONB,
    new_row JSONB,
    actor_user_id TEXT,
    actor_email TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS public.page_views (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    path VARCHAR(512),
    user_agent TEXT,
    ip_address VARCHAR(45),
    created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS public.analytics_events (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    event_name TEXT NOT NULL,
    payload JSONB,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- ----- Helper（ policies 會引用） -----
CREATE OR REPLACE FUNCTION public.is_admin()
RETURNS boolean
LANGUAGE sql
SECURITY DEFINER
SET search_path = public
STABLE
AS $$
  SELECT
    lower(coalesce(auth.email(), '')) = ANY (ARRAY[
      'b1993614@gmail.com',
      'info@dropout.tw',
      'gg.gg2858@gmail.com',
      'lauraliuanny@gmail.com',
      'qoo77313@gmail.com'
    ])
    OR EXISTS (
      SELECT 1 FROM public.members
      WHERE CAST(user_id AS text) = CAST(auth.uid() AS text)
        AND is_admin = true
    );
$$;

-- ----- Helpers：slug / audit / protected fields -----
CREATE OR REPLACE FUNCTION public.member_slug(raw_name TEXT, raw_id INTEGER DEFAULT NULL)
RETURNS TEXT
LANGUAGE plpgsql
VOLATILE
AS $$
DECLARE
  base TEXT;
BEGIN
  base := trim(regexp_replace(coalesce(raw_name, ''), '\s+', '-', 'g'));
  base := regexp_replace(base, '[/?#%]+', '-', 'g');
  base := trim(both '-' from base);
  IF base = '' THEN
    base := 'member';
  END IF;
  IF raw_id IS NOT NULL THEN
    RETURN base;
  END IF;
  RETURN base || '-' || substring(md5(gen_random_uuid()::text), 1, 6);
END;
$$;

CREATE OR REPLACE FUNCTION public.ensure_member_slug()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  candidate TEXT;
BEGIN
  IF NEW.slug IS NULL OR trim(NEW.slug) = '' OR (TG_OP = 'UPDATE' AND NEW.name IS DISTINCT FROM OLD.name) THEN
    candidate := public.member_slug(NEW.name, NEW.id);
    IF EXISTS (
      SELECT 1 FROM public.members
      WHERE slug = candidate
        AND idx IS DISTINCT FROM NEW.idx
    ) THEN
      candidate := candidate || '-' || substring(md5(coalesce(NEW.id::text, gen_random_uuid()::text)), 1, 6);
    END IF;
    NEW.slug := candidate;
  END IF;
  RETURN NEW;
END;
$$;

CREATE OR REPLACE FUNCTION public.prevent_member_protected_field_update()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  IF public.is_admin() THEN
    RETURN NEW;
  END IF;

  IF NEW.is_admin IS DISTINCT FROM OLD.is_admin
    OR NEW.is_gold_badge IS DISTINCT FROM OLD.is_gold_badge
    OR NEW.frozen_at IS DISTINCT FROM OLD.frozen_at
    OR NEW.frozen_by IS DISTINCT FROM OLD.frozen_by
    OR NEW.frozen_reason IS DISTINCT FROM OLD.frozen_reason
    OR NEW.slug IS DISTINCT FROM OLD.slug THEN
    RAISE EXCEPTION 'Only administrators can update protected member fields';
  END IF;

  RETURN NEW;
END;
$$;

CREATE OR REPLACE FUNCTION public.audit_row_change()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  payload JSONB;
  row_id TEXT;
BEGIN
  payload := CASE WHEN TG_OP = 'DELETE' THEN to_jsonb(OLD) ELSE to_jsonb(NEW) END;
  row_id := COALESCE(payload->>'id', payload->>'idx', payload->>'month', payload->>'member_id');

  INSERT INTO public.audit_logs (
    table_name,
    record_id,
    action,
    old_row,
    new_row,
    actor_user_id,
    actor_email
  ) VALUES (
    TG_TABLE_NAME,
    row_id,
    TG_OP,
    CASE WHEN TG_OP IN ('UPDATE', 'DELETE') THEN to_jsonb(OLD) ELSE NULL END,
    CASE WHEN TG_OP IN ('INSERT', 'UPDATE') THEN to_jsonb(NEW) ELSE NULL END,
    auth.uid()::text,
    auth.email()
  );

  RETURN COALESCE(NEW, OLD);
END;
$$;

DROP TRIGGER IF EXISTS members_ensure_slug ON public.members;
CREATE TRIGGER members_ensure_slug
  BEFORE INSERT OR UPDATE
  ON public.members
  FOR EACH ROW
  EXECUTE FUNCTION public.ensure_member_slug();

UPDATE public.members
SET slug = public.member_slug(name, id)
WHERE slug IS NULL OR trim(slug) = '';

DROP TRIGGER IF EXISTS members_protected_fields ON public.members;
CREATE TRIGGER members_protected_fields
  BEFORE UPDATE
  ON public.members
  FOR EACH ROW
  EXECUTE FUNCTION public.prevent_member_protected_field_update();

DROP TRIGGER IF EXISTS audit_members_changes ON public.members;
CREATE TRIGGER audit_members_changes
  AFTER INSERT OR UPDATE OR DELETE ON public.members
  FOR EACH ROW EXECUTE FUNCTION public.audit_row_change();

DROP TRIGGER IF EXISTS audit_referrals_changes ON public.referrals;
CREATE TRIGGER audit_referrals_changes
  AFTER INSERT OR UPDATE OR DELETE ON public.referrals
  FOR EACH ROW EXECUTE FUNCTION public.audit_row_change();

DROP TRIGGER IF EXISTS audit_homepage_stats_changes ON public.homepage_stats;
CREATE TRIGGER audit_homepage_stats_changes
  AFTER INSERT OR UPDATE OR DELETE ON public.homepage_stats
  FOR EACH ROW EXECUTE FUNCTION public.audit_row_change();

DROP TRIGGER IF EXISTS audit_faqs_changes ON public.faqs;
CREATE TRIGGER audit_faqs_changes
  AFTER INSERT OR UPDATE OR DELETE ON public.faqs
  FOR EACH ROW EXECUTE FUNCTION public.audit_row_change();

DROP TRIGGER IF EXISTS audit_member_traffic_scores_changes ON public.member_traffic_scores;
CREATE TRIGGER audit_member_traffic_scores_changes
  AFTER INSERT OR UPDATE OR DELETE ON public.member_traffic_scores
  FOR EACH ROW EXECUTE FUNCTION public.audit_row_change();

-- ----- RLS：homepage_stats -----
ALTER TABLE public.homepage_stats ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "homepage_stats_public_read" ON public.homepage_stats;
DROP POLICY IF EXISTS "homepage_stats_admin_all" ON public.homepage_stats;

CREATE POLICY "homepage_stats_public_read"
  ON public.homepage_stats FOR SELECT
  USING (true);

CREATE POLICY "homepage_stats_admin_all"
  ON public.homepage_stats FOR ALL
  USING (public.is_admin())
  WITH CHECK (public.is_admin());

-- ----- RLS：faqs -----
ALTER TABLE public.faqs ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "faqs_public_read_active" ON public.faqs;
DROP POLICY IF EXISTS "faqs_admin_all" ON public.faqs;

CREATE POLICY "faqs_public_read_active"
  ON public.faqs FOR SELECT
  USING (is_active = true OR public.is_admin());

CREATE POLICY "faqs_admin_all"
  ON public.faqs FOR ALL
  USING (public.is_admin())
  WITH CHECK (public.is_admin());

-- ----- RLS：member_traffic_scores -----
ALTER TABLE public.member_traffic_scores ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "member_traffic_scores_public_read" ON public.member_traffic_scores;
DROP POLICY IF EXISTS "member_traffic_scores_admin_all" ON public.member_traffic_scores;

CREATE POLICY "member_traffic_scores_public_read"
  ON public.member_traffic_scores FOR SELECT
  USING (true);

CREATE POLICY "member_traffic_scores_admin_all"
  ON public.member_traffic_scores FOR ALL
  USING (public.is_admin())
  WITH CHECK (public.is_admin());

-- ----- RLS：audit_logs -----
ALTER TABLE public.audit_logs ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "audit_logs_admin_read" ON public.audit_logs;
DROP POLICY IF EXISTS "audit_logs_trigger_insert" ON public.audit_logs;

CREATE POLICY "audit_logs_admin_read"
  ON public.audit_logs FOR SELECT
  USING (public.is_admin());

CREATE POLICY "audit_logs_trigger_insert"
  ON public.audit_logs FOR INSERT
  WITH CHECK (true);

-- ----- RLS：referrals -----
ALTER TABLE public.referrals ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "referrals_public_read" ON public.referrals;
DROP POLICY IF EXISTS "referrals_admin_insert" ON public.referrals;
DROP POLICY IF EXISTS "referrals_admin_update" ON public.referrals;
DROP POLICY IF EXISTS "referrals_admin_delete" ON public.referrals;

CREATE POLICY "referrals_public_read"
  ON public.referrals FOR SELECT
  USING (true);

CREATE POLICY "referrals_admin_insert"
  ON public.referrals FOR INSERT
  WITH CHECK (public.is_admin());

CREATE POLICY "referrals_admin_update"
  ON public.referrals FOR UPDATE
  USING (public.is_admin());

CREATE POLICY "referrals_admin_delete"
  ON public.referrals FOR DELETE
  USING (public.is_admin());

-- ----- RLS：members -----
ALTER TABLE public.members ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "members_public_read" ON public.members;
DROP POLICY IF EXISTS "members_self_update" ON public.members;
DROP POLICY IF EXISTS "members_admin_update" ON public.members;
DROP POLICY IF EXISTS "members_admin_insert" ON public.members;
DROP POLICY IF EXISTS "members_admin_delete" ON public.members;
DROP POLICY IF EXISTS "members_claim_unclaimed" ON public.members;

CREATE POLICY "members_public_read"
  ON public.members FOR SELECT
  USING (true);

CREATE POLICY "members_self_update"
  ON public.members FOR UPDATE
  USING ( CAST(user_id AS text) = CAST(auth.uid() AS text) )
  WITH CHECK ( CAST(user_id AS text) = CAST(auth.uid() AS text) );

CREATE POLICY "members_admin_update"
  ON public.members FOR UPDATE
  USING ( public.is_admin() );

CREATE POLICY "members_admin_insert"
  ON public.members FOR INSERT
  WITH CHECK ( public.is_admin() );

CREATE POLICY "members_admin_delete"
  ON public.members FOR DELETE
  USING ( public.is_admin() );

CREATE POLICY "members_claim_unclaimed"
  ON public.members FOR UPDATE
  USING ( user_id IS NULL AND auth.uid() IS NOT NULL )
  WITH CHECK (
    CAST(user_id AS text) = CAST(auth.uid() AS text)
  );

-- ----- RLS：page_views -----
ALTER TABLE public.page_views ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "page_views_anyone_insert" ON public.page_views;
DROP POLICY IF EXISTS "page_views_admin_read" ON public.page_views;

CREATE POLICY "page_views_anyone_insert"
  ON public.page_views FOR INSERT
  WITH CHECK (true);

CREATE POLICY "page_views_admin_read"
  ON public.page_views FOR SELECT
  USING ( public.is_admin() );

-- ----- RLS：analytics_events -----
ALTER TABLE public.analytics_events ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "analytics_events_anyone_insert" ON public.analytics_events;
DROP POLICY IF EXISTS "analytics_events_admin_read" ON public.analytics_events;

CREATE POLICY "analytics_events_anyone_insert"
  ON public.analytics_events FOR INSERT
  WITH CHECK (true);

CREATE POLICY "analytics_events_admin_read"
  ON public.analytics_events FOR SELECT
  USING ( public.is_admin() );
