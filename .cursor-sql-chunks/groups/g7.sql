INSERT INTO public.members (
  id, name, company, position, title, industry, category,
  "shortIntro", "fullIntro", photo, "photoPosition",
  services, hashtags, links, "createdAt", "updatedAt", status
)
SELECT
  850022,
  '李元棻',
  '長翔名人堂白金分會',
  '法律服務',
  '法律服務',
  '法律服務',
  '企業營運與法稅',
  '法律服務找元棻 風險控管一百分',
  '【五大產業】企業服務產業鍊
【專業】法律服務
【合作／引薦對象】10-20人有工廠的中小企業/徵信社
【SLOGAN】法律服務找元棻 風險控管一百分

資料來源：《長翔五大產業類別及Slogan》PDF（20260224）。',
  'https://changsiang.tw/BNI.Chang.Siang.Chapter/images/assets/logo/白色正方形logo.png',
  'center',
  '["法律服務"]'::jsonb,
  '["企業服務"]'::jsonb,
  '{}'::jsonb,
  NOW(), NOW(),
  'active'
WHERE NOT EXISTS (
  SELECT 1 FROM public.members m WHERE m.name = '李元棻'
);
INSERT INTO public.members (
  id, name, company, position, title, industry, category,
  "shortIntro", "fullIntro", photo, "photoPosition",
  services, hashtags, links, "createdAt", "updatedAt", status
)
SELECT
  850023,
  '于樂誠',
  '長翔名人堂白金分會',
  '短影音運營',
  '短影音運營',
  '短影音運營',
  '企業營運與法稅',
  '網路曝光找樂誠 名利雙收一定成',
  '【五大產業】企業服務產業鍊
【專業】短影音運營
【合作／引薦對象】打造公司產品網路知名度的職人和老闆
【SLOGAN】網路曝光找樂誠 名利雙收一定成

資料來源：《長翔五大產業類別及Slogan》PDF（20260224）。',
  'https://changsiang.tw/BNI.Chang.Siang.Chapter/images/assets/logo/白色正方形logo.png',
  'center',
  '["短影音運營"]'::jsonb,
  '["企業服務"]'::jsonb,
  '{}'::jsonb,
  NOW(), NOW(),
  'active'
WHERE NOT EXISTS (
  SELECT 1 FROM public.members m WHERE m.name = '于樂誠'
);
INSERT INTO public.members (
  id, name, company, position, title, industry, category,
  "shortIntro", "fullIntro", photo, "photoPosition",
  services, hashtags, links, "createdAt", "updatedAt", status
)
SELECT
  850024,
  '方榮久',
  '長翔名人堂白金分會',
  '勞資顧問',
  '勞資顧問',
  '勞資顧問',
  '企業營運與法稅',
  '勞資雙贏找榮久 永續經營更長久',
  '【五大產業】企業服務產業鍊
【專業】勞資顧問
【合作／引薦對象】會計師/資訊業/記帳士/人力仲介
【SLOGAN】勞資雙贏找榮久 永續經營更長久

資料來源：《長翔五大產業類別及Slogan》PDF（20260224）。',
  'https://changsiang.tw/BNI.Chang.Siang.Chapter/images/assets/logo/白色正方形logo.png',
  'center',
  '["勞資顧問"]'::jsonb,
  '["企業服務"]'::jsonb,
  '{}'::jsonb,
  NOW(), NOW(),
  'active'
WHERE NOT EXISTS (
  SELECT 1 FROM public.members m WHERE m.name = '方榮久'
);