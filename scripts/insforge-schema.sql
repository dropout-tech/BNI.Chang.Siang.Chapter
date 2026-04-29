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
    frozen_by TEXT
);

CREATE UNIQUE INDEX IF NOT EXISTS members_name_unique_idx
    ON public.members (name);

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
DROP FUNCTION IF EXISTS public.is_admin();

CREATE FUNCTION public.is_admin()
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
