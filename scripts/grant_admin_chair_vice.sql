-- ============================================================
-- 授予管理員：主席「吳庭彰」、副主席「汪哲宇」
-- ============================================================
-- 在 InsForge Database → SQL Editor（或 Postgres）執行。
--
-- 應用程式邏輯（src/lib/memberAccount.ts）：
--   後台／管理員入口需「該筆會員 is_admin = true」且
--   members.user_id 已與對方登入帳號（InsForge Auth）綁定。
-- 若僅設 is_admin 但未綁 user_id，請兩位先以 Google 等方式登入
-- 並完成會員帳號連結後再執行本腳本，或於後台將 user_id 補上。
-- ============================================================

UPDATE public.members
SET
    is_admin = true,
    "updatedAt" = NOW()
WHERE trim(name) IN ('汪哲宇', '吳庭彰');

-- 預期影響 2 筆；請確認下列結果 is_admin 為 true、user_id 不為空（登入後）
SELECT id, name, is_admin, user_id
FROM public.members
WHERE trim(name) IN ('汪哲宇', '吳庭彰')
ORDER BY name;
