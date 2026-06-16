INSERT INTO public.members (
  id, name, company, position, title, industry, category,
  "shortIntro", "fullIntro", photo, "photoPosition",
  services, hashtags, links, "createdAt", "updatedAt", status
)
SELECT
  850016,
  '黃懷昇',
  '長翔名人堂白金分會',
  '搬家清運',
  '搬家清運',
  '搬家清運',
  '居住與空間工程',
  '搬家清運找特勤 安全效率快又勤',
  '【五大產業】工程裝修產業鍊
【專業】搬家清運
【合作／引薦對象】房屋仲介/搬家清運需求的人
【SLOGAN】搬家清運找特勤 安全效率快又勤

資料來源：《長翔五大產業類別及Slogan》PDF（20260224）。',
  'https://changsiang.tw/BNI.Chang.Siang.Chapter/images/assets/logo/白色正方形logo.png',
  'center',
  '["搬家清運"]'::jsonb,
  '["工程裝修"]'::jsonb,
  '{}'::jsonb,
  NOW(), NOW(),
  'active'
WHERE NOT EXISTS (
  SELECT 1 FROM public.members m WHERE m.name = '黃懷昇'
);
INSERT INTO public.members (
  id, name, company, position, title, industry, category,
  "shortIntro", "fullIntro", photo, "photoPosition",
  services, hashtags, links, "createdAt", "updatedAt", status
)
SELECT
  850017,
  '鄭秉中',
  '長翔名人堂白金分會',
  '住宅設計',
  '住宅設計',
  '住宅設計',
  '居住與空間工程',
  '預見未來好 Design 空間設計宏鼎泰',
  '【五大產業】工程裝修產業鍊
【專業】住宅設計
【合作／引薦對象】住宅裝修/樂齡裝修/醫美/公共工程裝修
【SLOGAN】預見未來好 Design 空間設計宏鼎泰

資料來源：《長翔五大產業類別及Slogan》PDF（20260224）。',
  'https://changsiang.tw/BNI.Chang.Siang.Chapter/images/assets/logo/白色正方形logo.png',
  'center',
  '["住宅設計"]'::jsonb,
  '["工程裝修"]'::jsonb,
  '{}'::jsonb,
  NOW(), NOW(),
  'active'
WHERE NOT EXISTS (
  SELECT 1 FROM public.members m WHERE m.name = '鄭秉中'
);
INSERT INTO public.members (
  id, name, company, position, title, industry, category,
  "shortIntro", "fullIntro", photo, "photoPosition",
  services, hashtags, links, "createdAt", "updatedAt", status
)
SELECT
  850018,
  '朱瑩珊',
  '長翔名人堂白金分會',
  '保險長照產險',
  '保險長照產險',
  '保險長照產險',
  '企業營運與法稅',
  '全面保險找瑩珊 愛人愛己最心安',
  '【五大產業】企業服務產業鍊
【專業】保險長照產險
【合作／引薦對象】雇主責任/地政士/房仲/會計師/長照機構
【SLOGAN】全面保險找瑩珊 愛人愛己最心安

資料來源：《長翔五大產業類別及Slogan》PDF（20260224）。',
  'https://changsiang.tw/BNI.Chang.Siang.Chapter/images/assets/logo/白色正方形logo.png',
  'center',
  '["保險長照產險"]'::jsonb,
  '["企業服務"]'::jsonb,
  '{}'::jsonb,
  NOW(), NOW(),
  'active'
WHERE NOT EXISTS (
  SELECT 1 FROM public.members m WHERE m.name = '朱瑩珊'
);