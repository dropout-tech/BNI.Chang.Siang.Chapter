-- ============================================================
-- 會員個別認領密碼（members.claim_password_hash + verify RPC）
-- ============================================================
-- 在既有 InsForge / Postgres 執行一次即可（可安全重複執行）。
-- 管理員於後台設定密碼時，前端以 bcryptjs 產生雜湊寫入；
-- 會員認領時呼叫 RPC，以 pgcrypto 比對，不暴露雜湊給客戶端。
-- ============================================================

CREATE EXTENSION IF NOT EXISTS pgcrypto;

ALTER TABLE public.members ADD COLUMN IF NOT EXISTS claim_password_hash TEXT;

COMMENT ON COLUMN public.members.claim_password_hash IS 'bcrypt 雜湊；會員登入後認領檔案時驗證用';

CREATE OR REPLACE FUNCTION public.verify_member_claim(p_member_id integer, p_password text)
RETURNS boolean
LANGUAGE sql
SECURITY DEFINER
SET search_path = public
STABLE
AS $$
  SELECT EXISTS (
    SELECT 1
    FROM public.members m
    WHERE m.id = p_member_id
      AND m.user_id IS NULL
      AND m.claim_password_hash IS NOT NULL
      AND length(btrim(p_password)) >= 4
      AND m.claim_password_hash = crypt(p_password, m.claim_password_hash)
  );
$$;

REVOKE ALL ON FUNCTION public.verify_member_claim(integer, text) FROM PUBLIC;
GRANT EXECUTE ON FUNCTION public.verify_member_claim(integer, text) TO anon;
GRANT EXECUTE ON FUNCTION public.verify_member_claim(integer, text) TO authenticated;
