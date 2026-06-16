INSERT INTO public.members (
  id, name, company, position, title, industry, category,
  "shortIntro", "fullIntro", photo, "photoPosition",
  services, hashtags, links, "createdAt", "updatedAt", status
)
SELECT
  850037,
  '陳士懿',
  '長翔名人堂白金分會',
  '海外房地產',
  '海外房地產',
  '海外房地產',
  '金融財富與資產',
  '海外地產找士懿 身家又多好幾億',
  '【五大產業】資產管理產業鍊
【專業】海外房地產
【合作／引薦對象】海外置產需求高資產客戶需要解決方案
【SLOGAN】海外地產找士懿 身家又多好幾億

資料來源：《長翔五大產業類別及Slogan》PDF（20260224）。',
  'https://changsiang.tw/BNI.Chang.Siang.Chapter/images/assets/logo/白色正方形logo.png',
  'center',
  '["海外房地產"]'::jsonb,
  '["資產管理"]'::jsonb,
  '{}'::jsonb,
  NOW(), NOW(),
  'active'
WHERE NOT EXISTS (
  SELECT 1 FROM public.members m WHERE m.name = '陳士懿'
);
INSERT INTO public.members (
  id, name, company, position, title, industry, category,
  "shortIntro", "fullIntro", photo, "photoPosition",
  services, hashtags, links, "createdAt", "updatedAt", status
)
SELECT
  850038,
  '劉書華',
  '長翔名人堂白金分會',
  '移民顧問',
  '移民顧問',
  '移民顧問',
  '金融財富與資產',
  '投資移民找書華 共築未來創輝煌',
  '【五大產業】資產管理產業鍊
【專業】移民顧問
【合作／引薦對象】預算2000~3000萬台幣/擔心政治風險
【SLOGAN】投資移民找書華 共築未來創輝煌

資料來源：《長翔五大產業類別及Slogan》PDF（20260224）。',
  'https://changsiang.tw/BNI.Chang.Siang.Chapter/images/assets/logo/白色正方形logo.png',
  'center',
  '["移民顧問"]'::jsonb,
  '["資產管理"]'::jsonb,
  '{}'::jsonb,
  NOW(), NOW(),
  'active'
WHERE NOT EXISTS (
  SELECT 1 FROM public.members m WHERE m.name = '劉書華'
);
INSERT INTO public.members (
  id, name, company, position, title, industry, category,
  "shortIntro", "fullIntro", photo, "photoPosition",
  services, hashtags, links, "createdAt", "updatedAt", status
)
SELECT
  850039,
  '高辰羽',
  '長翔名人堂白金分會',
  '汽車保修',
  '汽車保修',
  '汽車保修',
  '金融財富與資產',
  '保養升級都準到 辰羽出馬最可靠',
  '【五大產業】資產管理產業鍊
【專業】汽車保修
【合作／引薦對象】二手車商/車主/運輸交通公司
【SLOGAN】保養升級都準到 辰羽出馬最可靠

資料來源：《長翔五大產業類別及Slogan》PDF（20260224）。',
  'https://changsiang.tw/BNI.Chang.Siang.Chapter/images/assets/logo/白色正方形logo.png',
  'center',
  '["汽車保修"]'::jsonb,
  '["資產管理"]'::jsonb,
  '{}'::jsonb,
  NOW(), NOW(),
  'active'
WHERE NOT EXISTS (
  SELECT 1 FROM public.members m WHERE m.name = '高辰羽'
);