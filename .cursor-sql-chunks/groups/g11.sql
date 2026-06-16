INSERT INTO public.members (
  id, name, company, position, title, industry, category,
  "shortIntro", "fullIntro", photo, "photoPosition",
  services, hashtags, links, "createdAt", "updatedAt", status
)
SELECT
  850034,
  '王震芳',
  '長翔名人堂白金分會',
  '生命產業',
  '生命產業',
  '生命產業',
  '金融財富與資產',
  '人生大事找震芳 四道習題有解方',
  '【五大產業】資產管理產業鍊
【專業】生命產業
【合作／引薦對象】保險/房仲/教師會
【SLOGAN】人生大事找震芳 四道習題有解方

資料來源：《長翔五大產業類別及Slogan》PDF（20260224）。',
  'https://changsiang.tw/BNI.Chang.Siang.Chapter/images/assets/logo/白色正方形logo.png',
  'center',
  '["生命產業"]'::jsonb,
  '["資產管理"]'::jsonb,
  '{}'::jsonb,
  NOW(), NOW(),
  'active'
WHERE NOT EXISTS (
  SELECT 1 FROM public.members m WHERE m.name = '王震芳'
);
INSERT INTO public.members (
  id, name, company, position, title, industry, category,
  "shortIntro", "fullIntro", photo, "photoPosition",
  services, hashtags, links, "createdAt", "updatedAt", status
)
SELECT
  850035,
  '林韋志',
  '長翔名人堂白金分會',
  '中古車買賣',
  '中古車買賣',
  '中古車買賣',
  '金融財富與資產',
  '買車賣車找小胖 服務保證一級棒',
  '【五大產業】資產管理產業鍊
【專業】中古車買賣
【合作／引薦對象】有買車賣車需求的人
【SLOGAN】買車賣車找小胖 服務保證一級棒

資料來源：《長翔五大產業類別及Slogan》PDF（20260224）。',
  'https://changsiang.tw/BNI.Chang.Siang.Chapter/images/assets/logo/白色正方形logo.png',
  'center',
  '["中古車買賣"]'::jsonb,
  '["資產管理"]'::jsonb,
  '{}'::jsonb,
  NOW(), NOW(),
  'active'
WHERE NOT EXISTS (
  SELECT 1 FROM public.members m WHERE m.name = '林韋志'
);
INSERT INTO public.members (
  id, name, company, position, title, industry, category,
  "shortIntro", "fullIntro", photo, "photoPosition",
  services, hashtags, links, "createdAt", "updatedAt", status
)
SELECT
  850036,
  '林宗平',
  '長翔名人堂白金分會',
  '不動產代銷',
  '不動產代銷',
  '不動產代銷',
  '金融財富與資產',
  '房屋代銷找宗平 專業安心沒問題',
  '【五大產業】資產管理產業鍊
【專業】不動產代銷
【合作／引薦對象】建築相關產業/尋找理想房屋的人
【SLOGAN】房屋代銷找宗平 專業安心沒問題

資料來源：《長翔五大產業類別及Slogan》PDF（20260224）。',
  'https://changsiang.tw/BNI.Chang.Siang.Chapter/images/assets/logo/白色正方形logo.png',
  'center',
  '["不動產代銷"]'::jsonb,
  '["資產管理"]'::jsonb,
  '{}'::jsonb,
  NOW(), NOW(),
  'active'
WHERE NOT EXISTS (
  SELECT 1 FROM public.members m WHERE m.name = '林宗平'
);