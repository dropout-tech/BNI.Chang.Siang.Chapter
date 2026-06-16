INSERT INTO public.members (
  id, name, company, position, title, industry, category,
  "shortIntro", "fullIntro", photo, "photoPosition",
  services, hashtags, links, "createdAt", "updatedAt", status
)
SELECT
  850001,
  '陳惠燕',
  '長翔名人堂白金分會',
  '營養保健',
  '營養保健',
  '營養保健',
  '身心健康與醫療',
  '全面保健找惠燕 雕塑曲線好驚艷',
  '【五大產業】健康醫療產業鍊
【專業】營養保健
【合作／引薦對象】三高/脂肪肝者/健身中心/月子中心
【SLOGAN】全面保健找惠燕 雕塑曲線好驚艷

資料來源：《長翔五大產業類別及Slogan》PDF（20260224）。',
  'https://changsiang.tw/BNI.Chang.Siang.Chapter/images/assets/logo/白色正方形logo.png',
  'center',
  '["營養保健"]'::jsonb,
  '["健康醫療"]'::jsonb,
  '{}'::jsonb,
  NOW(), NOW(),
  'active'
WHERE NOT EXISTS (
  SELECT 1 FROM public.members m WHERE m.name = '陳惠燕'
);
INSERT INTO public.members (
  id, name, company, position, title, industry, category,
  "shortIntro", "fullIntro", photo, "photoPosition",
  services, hashtags, links, "createdAt", "updatedAt", status
)
SELECT
  850002,
  '杜芃萱',
  '長翔名人堂白金分會',
  '物理治療',
  '物理治療',
  '物理治療',
  '身心健康與醫療',
  '物理治療找芃萱 通體舒暢似神仙',
  '【五大產業】健康醫療產業鍊
【專業】物理治療
【合作／引薦對象】福委會/企業內訓/月子中心
【SLOGAN】物理治療找芃萱 通體舒暢似神仙

資料來源：《長翔五大產業類別及Slogan》PDF（20260224）。',
  'https://changsiang.tw/BNI.Chang.Siang.Chapter/images/assets/logo/白色正方形logo.png',
  'center',
  '["物理治療"]'::jsonb,
  '["健康醫療"]'::jsonb,
  '{}'::jsonb,
  NOW(), NOW(),
  'active'
WHERE NOT EXISTS (
  SELECT 1 FROM public.members m WHERE m.name = '杜芃萱'
);
INSERT INTO public.members (
  id, name, company, position, title, industry, category,
  "shortIntro", "fullIntro", photo, "photoPosition",
  services, hashtags, links, "createdAt", "updatedAt", status
)
SELECT
  850003,
  '許玉慧',
  '長翔名人堂白金分會',
  '醫療保險',
  '醫療保險',
  '醫療保險',
  '身心健康與醫療',
  '醫療保險找玉慧 平安喜樂更加倍',
  '【五大產業】健康醫療產業鍊
【專業】醫療保險
【合作／引薦對象】地方媽媽/自費健檢中心/月子中心
【SLOGAN】醫療保險找玉慧 平安喜樂更加倍

資料來源：《長翔五大產業類別及Slogan》PDF（20260224）。',
  'https://changsiang.tw/BNI.Chang.Siang.Chapter/images/assets/logo/白色正方形logo.png',
  'center',
  '["醫療保險"]'::jsonb,
  '["健康醫療"]'::jsonb,
  '{}'::jsonb,
  NOW(), NOW(),
  'active'
WHERE NOT EXISTS (
  SELECT 1 FROM public.members m WHERE m.name = '許玉慧'
);