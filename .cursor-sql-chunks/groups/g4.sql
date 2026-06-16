INSERT INTO public.members (
  id, name, company, position, title, industry, category,
  "shortIntro", "fullIntro", photo, "photoPosition",
  services, hashtags, links, "createdAt", "updatedAt", status
)
SELECT
  850013,
  '黃建善',
  '長翔名人堂白金分會',
  '水電工程',
  '水電工程',
  '水電工程',
  '居住與空間工程',
  '水電工程找元星 元星施工最放心',
  '【五大產業】工程裝修產業鍊
【專業】水電工程
【合作／引薦對象】建設公司/室內裝修統包
【SLOGAN】水電工程找元星 元星施工最放心

資料來源：《長翔五大產業類別及Slogan》PDF（20260224）。',
  'https://changsiang.tw/BNI.Chang.Siang.Chapter/images/assets/logo/白色正方形logo.png',
  'center',
  '["水電工程"]'::jsonb,
  '["工程裝修"]'::jsonb,
  '{}'::jsonb,
  NOW(), NOW(),
  'active'
WHERE NOT EXISTS (
  SELECT 1 FROM public.members m WHERE m.name = '黃建善'
);
INSERT INTO public.members (
  id, name, company, position, title, industry, category,
  "shortIntro", "fullIntro", photo, "photoPosition",
  services, hashtags, links, "createdAt", "updatedAt", status
)
SELECT
  850014,
  '劉宣慧',
  '長翔名人堂白金分會',
  '地板工程',
  '地板工程',
  '地板工程',
  '居住與空間工程',
  '商用地板找新元 產品豐富最多元',
  '【五大產業】工程裝修產業鍊
【專業】地板工程
【合作／引薦對象】室內設計師/民宿 SPA會館/公司行號
【SLOGAN】商用地板找新元 產品豐富最多元

資料來源：《長翔五大產業類別及Slogan》PDF（20260224）。',
  'https://changsiang.tw/BNI.Chang.Siang.Chapter/images/assets/logo/白色正方形logo.png',
  'center',
  '["地板工程"]'::jsonb,
  '["工程裝修"]'::jsonb,
  '{}'::jsonb,
  NOW(), NOW(),
  'active'
WHERE NOT EXISTS (
  SELECT 1 FROM public.members m WHERE m.name = '劉宣慧'
);
INSERT INTO public.members (
  id, name, company, position, title, industry, category,
  "shortIntro", "fullIntro", photo, "photoPosition",
  services, hashtags, links, "createdAt", "updatedAt", status
)
SELECT
  850015,
  '李沂臻',
  '長翔名人堂白金分會',
  '系統櫃',
  '系統櫃',
  '系統櫃',
  '居住與空間工程',
  '收納美學找沂臻 空間規劃一百分',
  '【五大產業】工程裝修產業鍊
【專業】系統櫃
【合作／引薦對象】有系統櫃需求的店面/住家或商辦
【SLOGAN】收納美學找沂臻 空間規劃一百分

資料來源：《長翔五大產業類別及Slogan》PDF（20260224）。',
  'https://changsiang.tw/BNI.Chang.Siang.Chapter/images/assets/logo/白色正方形logo.png',
  'center',
  '["系統櫃"]'::jsonb,
  '["工程裝修"]'::jsonb,
  '{}'::jsonb,
  NOW(), NOW(),
  'active'
WHERE NOT EXISTS (
  SELECT 1 FROM public.members m WHERE m.name = '李沂臻'
);