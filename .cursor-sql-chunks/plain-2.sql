INSERT INTO public.members (
  id, name, company, position, title, industry, category,
  "shortIntro", "fullIntro", photo, "photoPosition",
  services, hashtags, links, "createdAt", "updatedAt", status
)
SELECT
  850033,
  '黃吉安',
  '長翔名人堂白金分會',
  '尊榮移動整合服務',
  '尊榮移動整合服務',
  '尊榮移動整合服務',
  '金融財富與資產',
  '尊榮移動找極安 極致享受好心安',
  '【五大產業】資產管理產業鍊
【專業】尊榮移動整合服務
【合作／引薦對象】旅行社/住宿業/旅外華僑/行政差旅部門
【SLOGAN】尊榮移動找極安 極致享受好心安

資料來源：《長翔五大產業類別及Slogan》PDF（20260224）。',
  'https://changsiang.tw/BNI.Chang.Siang.Chapter/images/assets/logo/白色正方形logo.png',
  'center',
  '["尊榮移動整合服務"]'::jsonb,
  '["資產管理"]'::jsonb,
  '{}'::jsonb,
  NOW(), NOW(),
  'active'
WHERE NOT EXISTS (
  SELECT 1 FROM public.members m WHERE m.name = '黃吉安'
);
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