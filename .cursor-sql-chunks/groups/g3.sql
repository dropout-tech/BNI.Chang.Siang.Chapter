INSERT INTO public.members (
  id, name, company, position, title, industry, category,
  "shortIntro", "fullIntro", photo, "photoPosition",
  services, hashtags, links, "createdAt", "updatedAt", status
)
SELECT
  850010,
  '陳翊誌',
  '長翔名人堂白金分會',
  '冷氣空調',
  '冷氣空調',
  '冷氣空調',
  '居住與空間工程',
  '冷氣空調找木星 空間舒適又安心',
  '【五大產業】工程裝修產業鍊
【專業】冷氣空調
【合作／引薦對象】室內設計師/想學冷氣安裝的年輕人
【SLOGAN】冷氣空調找木星 空間舒適又安心

資料來源：《長翔五大產業類別及Slogan》PDF（20260224）。',
  'https://changsiang.tw/BNI.Chang.Siang.Chapter/images/assets/logo/白色正方形logo.png',
  'center',
  '["冷氣空調"]'::jsonb,
  '["工程裝修"]'::jsonb,
  '{}'::jsonb,
  NOW(), NOW(),
  'active'
WHERE NOT EXISTS (
  SELECT 1 FROM public.members m WHERE m.name = '陳翊誌'
);
INSERT INTO public.members (
  id, name, company, position, title, industry, category,
  "shortIntro", "fullIntro", photo, "photoPosition",
  services, hashtags, links, "createdAt", "updatedAt", status
)
SELECT
  850011,
  '蔡東良',
  '長翔名人堂白金分會',
  '油漆工程',
  '油漆工程',
  '油漆工程',
  '居住與空間工程',
  '油漆工程找東裕 品質保證最給力',
  '【五大產業】工程裝修產業鍊
【專業】油漆工程
【合作／引薦對象】室內設計師/工程統包
【SLOGAN】油漆工程找東裕 品質保證最給力

資料來源：《長翔五大產業類別及Slogan》PDF（20260224）。',
  'https://changsiang.tw/BNI.Chang.Siang.Chapter/images/assets/logo/白色正方形logo.png',
  'center',
  '["油漆工程"]'::jsonb,
  '["工程裝修"]'::jsonb,
  '{}'::jsonb,
  NOW(), NOW(),
  'active'
WHERE NOT EXISTS (
  SELECT 1 FROM public.members m WHERE m.name = '蔡東良'
);
INSERT INTO public.members (
  id, name, company, position, title, industry, category,
  "shortIntro", "fullIntro", photo, "photoPosition",
  services, hashtags, links, "createdAt", "updatedAt", status
)
SELECT
  850012,
  '王彤心',
  '長翔名人堂白金分會',
  '窗簾家飾',
  '窗簾家飾',
  '窗簾家飾',
  '居住與空間工程',
  '窗前好簾找彤心 質感美型又安心',
  '【五大產業】工程裝修產業鍊
【專業】窗簾家飾
【合作／引薦對象】房仲租賃業/裝潢公司/房屋代銷
【SLOGAN】窗前好簾找彤心 質感美型又安心

資料來源：《長翔五大產業類別及Slogan》PDF（20260224）。',
  'https://changsiang.tw/BNI.Chang.Siang.Chapter/images/assets/logo/白色正方形logo.png',
  'center',
  '["窗簾家飾"]'::jsonb,
  '["工程裝修"]'::jsonb,
  '{}'::jsonb,
  NOW(), NOW(),
  'active'
WHERE NOT EXISTS (
  SELECT 1 FROM public.members m WHERE m.name = '王彤心'
);