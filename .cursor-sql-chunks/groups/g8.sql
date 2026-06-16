INSERT INTO public.members (
  id, name, company, position, title, industry, category,
  "shortIntro", "fullIntro", photo, "photoPosition",
  services, hashtags, links, "createdAt", "updatedAt", status
)
SELECT
  850025,
  '方唯任',
  '長翔名人堂白金分會',
  '靜態攝影',
  '靜態攝影',
  '靜態攝影',
  '企業營運與法稅',
  '攝影找 Vincent 品牌形象再提升',
  '【五大產業】企業服務產業鍊
【專業】靜態攝影
【合作／引薦對象】活動公關/品牌行銷/展場規劃
【SLOGAN】攝影找 Vincent 品牌形象再提升

資料來源：《長翔五大產業類別及Slogan》PDF（20260224）。',
  'https://changsiang.tw/BNI.Chang.Siang.Chapter/images/assets/logo/白色正方形logo.png',
  'center',
  '["靜態攝影"]'::jsonb,
  '["企業服務"]'::jsonb,
  '{}'::jsonb,
  NOW(), NOW(),
  'active'
WHERE NOT EXISTS (
  SELECT 1 FROM public.members m WHERE m.name = '方唯任'
);
INSERT INTO public.members (
  id, name, company, position, title, industry, category,
  "shortIntro", "fullIntro", photo, "photoPosition",
  services, hashtags, links, "createdAt", "updatedAt", status
)
SELECT
  850026,
  '謝宜芳',
  '長翔名人堂白金分會',
  '生鮮食品',
  '生鮮食品',
  '生鮮食品',
  '品牌整合與行銷',
  '安心生鮮找宜芳 美味佳餚最大方',
  '【五大產業】消費生活產業鍊
【專業】生鮮食品
【合作／引薦對象】愛吃美食的個人/公司福委會
【SLOGAN】安心生鮮找宜芳 美味佳餚最大方

資料來源：《長翔五大產業類別及Slogan》PDF（20260224）。',
  'https://changsiang.tw/BNI.Chang.Siang.Chapter/images/assets/logo/白色正方形logo.png',
  'center',
  '["生鮮食品"]'::jsonb,
  '["消費生活"]'::jsonb,
  '{}'::jsonb,
  NOW(), NOW(),
  'active'
WHERE NOT EXISTS (
  SELECT 1 FROM public.members m WHERE m.name = '謝宜芳'
);
INSERT INTO public.members (
  id, name, company, position, title, industry, category,
  "shortIntro", "fullIntro", photo, "photoPosition",
  services, hashtags, links, "createdAt", "updatedAt", status
)
SELECT
  850027,
  '葉莉菁',
  '長翔名人堂白金分會',
  '手工皂製作行銷教學',
  '手工皂製作行銷教學',
  '手工皂製作行銷教學',
  '品牌整合與行銷',
  '健康無毒找莉菁 清潔保養樣樣行',
  '【五大產業】消費生活產業鍊
【專業】手工皂製作行銷教學
【合作／引薦對象】重視天然健康的社區媽媽/上班族
【SLOGAN】健康無毒找莉菁 清潔保養樣樣行

資料來源：《長翔五大產業類別及Slogan》PDF（20260224）。',
  'https://changsiang.tw/BNI.Chang.Siang.Chapter/images/assets/logo/白色正方形logo.png',
  'center',
  '["手工皂製作行銷教學"]'::jsonb,
  '["消費生活"]'::jsonb,
  '{}'::jsonb,
  NOW(), NOW(),
  'active'
WHERE NOT EXISTS (
  SELECT 1 FROM public.members m WHERE m.name = '葉莉菁'
);