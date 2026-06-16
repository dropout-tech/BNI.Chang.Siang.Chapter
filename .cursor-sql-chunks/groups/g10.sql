INSERT INTO public.members (
  id, name, company, position, title, industry, category,
  "shortIntro", "fullIntro", photo, "photoPosition",
  services, hashtags, links, "createdAt", "updatedAt", status
)
SELECT
  850031,
  '陳天勤',
  '長翔名人堂白金分會',
  '環保居家生活館',
  '環保居家生活館',
  '環保居家生活館',
  '品牌整合與行銷',
  '環保生活找天勤 省錢省心一定行',
  '【五大產業】消費生活產業鍊
【專業】環保居家生活館
【合作／引薦對象】整理師/月嫂保姆/地方爸爸媽媽
【SLOGAN】環保生活找天勤 省錢省心一定行

資料來源：《長翔五大產業類別及Slogan》PDF（20260224）。',
  'https://changsiang.tw/BNI.Chang.Siang.Chapter/images/assets/logo/白色正方形logo.png',
  'center',
  '["環保居家生活館"]'::jsonb,
  '["消費生活"]'::jsonb,
  '{}'::jsonb,
  NOW(), NOW(),
  'active'
WHERE NOT EXISTS (
  SELECT 1 FROM public.members m WHERE m.name = '陳天勤'
);
INSERT INTO public.members (
  id, name, company, position, title, industry, category,
  "shortIntro", "fullIntro", photo, "photoPosition",
  services, hashtags, links, "createdAt", "updatedAt", status
)
SELECT
  850032,
  '胡妍禾',
  '長翔名人堂白金分會',
  '美容行銷',
  '美容行銷',
  '美容行銷',
  '品牌整合與行銷',
  '逆齡回春找妍禾 白皙透亮有光澤',
  '【五大產業】消費生活產業鍊
【專業】美容行銷
【合作／引薦對象】美髮沙龍/新娘秘書/成功的女性企業家
【SLOGAN】逆齡回春找妍禾 白皙透亮有光澤

資料來源：《長翔五大產業類別及Slogan》PDF（20260224）。',
  'https://changsiang.tw/BNI.Chang.Siang.Chapter/images/assets/logo/白色正方形logo.png',
  'center',
  '["美容行銷"]'::jsonb,
  '["消費生活"]'::jsonb,
  '{}'::jsonb,
  NOW(), NOW(),
  'active'
WHERE NOT EXISTS (
  SELECT 1 FROM public.members m WHERE m.name = '胡妍禾'
);
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