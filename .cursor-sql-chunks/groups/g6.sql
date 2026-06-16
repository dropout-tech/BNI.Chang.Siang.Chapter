INSERT INTO public.members (
  id, name, company, position, title, industry, category,
  "shortIntro", "fullIntro", photo, "photoPosition",
  services, hashtags, links, "createdAt", "updatedAt", status
)
SELECT
  850019,
  '李鳳珠',
  '長翔名人堂白金分會',
  '系統ERP',
  '系統ERP',
  '系統ERP',
  '企業營運與法稅',
  '企業升級找鳳珠 績效業績更突出',
  '【五大產業】企業服務產業鍊
【專業】系統ERP
【合作／引薦對象】企業顧問/網站設計/電腦硬體/商標專利
【SLOGAN】企業升級找鳳珠 績效業績更突出

資料來源：《長翔五大產業類別及Slogan》PDF（20260224）。',
  'https://changsiang.tw/BNI.Chang.Siang.Chapter/images/assets/logo/白色正方形logo.png',
  'center',
  '["系統ERP"]'::jsonb,
  '["企業服務"]'::jsonb,
  '{}'::jsonb,
  NOW(), NOW(),
  'active'
WHERE NOT EXISTS (
  SELECT 1 FROM public.members m WHERE m.name = '李鳳珠'
);
INSERT INTO public.members (
  id, name, company, position, title, industry, category,
  "shortIntro", "fullIntro", photo, "photoPosition",
  services, hashtags, links, "createdAt", "updatedAt", status
)
SELECT
  850020,
  '郭愛珠',
  '長翔名人堂白金分會',
  '數位課程與平台',
  '數位課程與平台',
  '數位課程與平台',
  '企業營運與法稅',
  '數位課程最豐富 知識培訓找愛珠',
  '【五大產業】企業服務產業鍊
【專業】數位課程與平台
【合作／引薦對象】專業人士/想成為講師/中小企業主
【SLOGAN】數位課程最豐富 知識培訓找愛珠

資料來源：《長翔五大產業類別及Slogan》PDF（20260224）。',
  'https://changsiang.tw/BNI.Chang.Siang.Chapter/images/assets/logo/白色正方形logo.png',
  'center',
  '["數位課程與平台"]'::jsonb,
  '["企業服務"]'::jsonb,
  '{}'::jsonb,
  NOW(), NOW(),
  'active'
WHERE NOT EXISTS (
  SELECT 1 FROM public.members m WHERE m.name = '郭愛珠'
);
INSERT INTO public.members (
  id, name, company, position, title, industry, category,
  "shortIntro", "fullIntro", photo, "photoPosition",
  services, hashtags, links, "createdAt", "updatedAt", status
)
SELECT
  850021,
  '詹家和',
  '長翔名人堂白金分會',
  '企業管理顧問',
  '企業管理顧問',
  '企業管理顧問',
  '企業營運與法稅',
  '企業永續找家和 人財事業萬事得',
  '【五大產業】企業服務產業鍊
【專業】企業管理顧問
【合作／引薦對象】中小企業人資/政府計劃提案需求
【SLOGAN】企業永續找家和 人財事業萬事得

資料來源：《長翔五大產業類別及Slogan》PDF（20260224）。',
  'https://changsiang.tw/BNI.Chang.Siang.Chapter/images/assets/logo/白色正方形logo.png',
  'center',
  '["企業管理顧問"]'::jsonb,
  '["企業服務"]'::jsonb,
  '{}'::jsonb,
  NOW(), NOW(),
  'active'
WHERE NOT EXISTS (
  SELECT 1 FROM public.members m WHERE m.name = '詹家和'
);