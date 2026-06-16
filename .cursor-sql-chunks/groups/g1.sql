INSERT INTO public.members (
  id, name, company, position, title, industry, category,
  "shortIntro", "fullIntro", photo, "photoPosition",
  services, hashtags, links, "createdAt", "updatedAt", status
)
SELECT
  850004,
  '陳展良',
  '長翔名人堂白金分會',
  '醫療健檢',
  '醫療健檢',
  '醫療健檢',
  '身心健康與醫療',
  '健康檢查找展良 健康美麗壽命長',
  '【五大產業】健康醫療產業鍊
【專業】醫療健檢
【合作／引薦對象】抗衰老診所/外商企業人資
【SLOGAN】健康檢查找展良 健康美麗壽命長

資料來源：《長翔五大產業類別及Slogan》PDF（20260224）。',
  'https://changsiang.tw/BNI.Chang.Siang.Chapter/images/assets/logo/白色正方形logo.png',
  'center',
  '["醫療健檢"]'::jsonb,
  '["健康醫療"]'::jsonb,
  '{}'::jsonb,
  NOW(), NOW(),
  'active'
WHERE NOT EXISTS (
  SELECT 1 FROM public.members m WHERE m.name = '陳展良'
);
INSERT INTO public.members (
  id, name, company, position, title, industry, category,
  "shortIntro", "fullIntro", photo, "photoPosition",
  services, hashtags, links, "createdAt", "updatedAt", status
)
SELECT
  850005,
  '蔡馨葳',
  '長翔名人堂白金分會',
  '負離子衣物寢具',
  '負離子衣物寢具',
  '負離子衣物寢具',
  '身心健康與醫療',
  '優質睡眠超感動 穿蓋保健找馨葳',
  '【五大產業】健康醫療產業鍊
【專業】負離子衣物寢具
【合作／引薦對象】月子中心/美業/推拿業主/睡眠舒壓朋友
【SLOGAN】優質睡眠超感動 穿蓋保健找馨葳

資料來源：《長翔五大產業類別及Slogan》PDF（20260224）。',
  'https://changsiang.tw/BNI.Chang.Siang.Chapter/images/assets/logo/白色正方形logo.png',
  'center',
  '["負離子衣物寢具"]'::jsonb,
  '["健康醫療"]'::jsonb,
  '{}'::jsonb,
  NOW(), NOW(),
  'active'
WHERE NOT EXISTS (
  SELECT 1 FROM public.members m WHERE m.name = '蔡馨葳'
);
INSERT INTO public.members (
  id, name, company, position, title, industry, category,
  "shortIntro", "fullIntro", photo, "photoPosition",
  services, hashtags, links, "createdAt", "updatedAt", status
)
SELECT
  850006,
  '古珈穎',
  '長翔名人堂白金分會',
  '運動養身儀器',
  '運動養身儀器',
  '運動養身儀器',
  '身心健康與醫療',
  '健康美麗找珈穎 身體事業皆雙贏',
  '【五大產業】健康醫療產業鍊
【專業】運動養身儀器
【合作／引薦對象】健康年輕美麗的企業主/專業人士
【SLOGAN】健康美麗找珈穎 身體事業皆雙贏

資料來源：《長翔五大產業類別及Slogan》PDF（20260224）。',
  'https://changsiang.tw/BNI.Chang.Siang.Chapter/images/assets/logo/白色正方形logo.png',
  'center',
  '["運動養身儀器"]'::jsonb,
  '["健康醫療"]'::jsonb,
  '{}'::jsonb,
  NOW(), NOW(),
  'active'
WHERE NOT EXISTS (
  SELECT 1 FROM public.members m WHERE m.name = '古珈穎'
);