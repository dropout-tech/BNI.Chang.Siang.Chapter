-- ============================================================
-- 會員姓名 + 行業別重複認領（含認領次數統計）
-- ============================================================
-- 在既有 InsForge / Postgres 執行一次即可（可安全重複執行）。
-- 認領規則：
-- 1. 會員登入後輸入中文全名與行業別。
-- 2. 系統忽略文字中的空白後比對 members.name / members.industry。
-- 3. 成功時把該會員 user_id 更新為目前登入帳號，並累加 claim_count。
-- 4. 允許重複認領；後一次成功認領會改綁到目前登入帳號。
-- ============================================================

ALTER TABLE public.members ADD COLUMN IF NOT EXISTS claim_count INTEGER NOT NULL DEFAULT 0;
ALTER TABLE public.members ADD COLUMN IF NOT EXISTS claim_last_at TIMESTAMPTZ;

COMMENT ON COLUMN public.members.claim_count IS '會員姓名 + 行業別認領成功次數';
COMMENT ON COLUMN public.members.claim_last_at IS '最近一次認領成功時間';

CREATE OR REPLACE FUNCTION public.claim_member_by_profile(p_name text, p_industry text)
RETURNS jsonb
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  v_member public.members%ROWTYPE;
  v_match_count integer;
  v_name text := lower(regexp_replace(btrim(coalesce(p_name, '')), '[[:space:]]+', '', 'g'));
  v_industry text := lower(regexp_replace(btrim(coalesce(p_industry, '')), '[[:space:]]+', '', 'g'));
BEGIN
  IF auth.uid() IS NULL THEN
    RETURN jsonb_build_object('success', false, 'message', '請先登入後再認領會員資料。');
  END IF;

  IF v_name = '' OR v_industry = '' THEN
    RETURN jsonb_build_object('success', false, 'message', '請輸入中文全名與行業別。');
  END IF;

  SELECT count(*)
  INTO v_match_count
  FROM public.members m
  WHERE lower(regexp_replace(btrim(coalesce(m.name, '')), '[[:space:]]+', '', 'g')) = v_name
    AND lower(regexp_replace(btrim(coalesce(m.industry, '')), '[[:space:]]+', '', 'g')) = v_industry;

  IF v_match_count = 0 THEN
    RETURN jsonb_build_object('success', false, 'message', '找不到符合的會員資料，請確認中文全名與行業別。');
  END IF;

  IF v_match_count > 1 THEN
    RETURN jsonb_build_object('success', false, 'message', '找到多筆相同姓名與行業別，請聯絡管理員處理。');
  END IF;

  SELECT *
  INTO v_member
  FROM public.members m
  WHERE lower(regexp_replace(btrim(coalesce(m.name, '')), '[[:space:]]+', '', 'g')) = v_name
    AND lower(regexp_replace(btrim(coalesce(m.industry, '')), '[[:space:]]+', '', 'g')) = v_industry
  LIMIT 1;

  UPDATE public.members
  SET
    user_id = CAST(auth.uid() AS text),
    claim_count = coalesce(claim_count, 0) + 1,
    claim_last_at = now(),
    "updatedAt" = now()
  WHERE idx = v_member.idx
  RETURNING *
  INTO v_member;

  RETURN jsonb_build_object(
    'success', true,
    'member_id', v_member.id,
    'member_name', v_member.name,
    'claim_count', v_member.claim_count
  );
END;
$$;

REVOKE ALL ON FUNCTION public.claim_member_by_profile(text, text) FROM PUBLIC;
GRANT EXECUTE ON FUNCTION public.claim_member_by_profile(text, text) TO authenticated;
