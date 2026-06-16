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
INSERT INTO public.members (
  id, name, company, position, title, industry, category,
  "shortIntro", "fullIntro", photo, "photoPosition",
  services, hashtags, links, "createdAt", "updatedAt", status
)
SELECT
  850007,
  '陳啓人',
  '長翔名人堂白金分會',
  '智慧廚具',
  '智慧廚具',
  '智慧廚具',
  '居住與空間工程',
  '智能淨化用唯廚 居家生活最幸福',
  '【五大產業】工程裝修產業鍊
【專業】智慧廚具
【合作／引薦對象】建設公司/室內設計師/裝修工程
【SLOGAN】智能淨化用唯廚 居家生活最幸福

資料來源：《長翔五大產業類別及Slogan》PDF（20260224）。',
  'https://changsiang.tw/BNI.Chang.Siang.Chapter/images/assets/logo/白色正方形logo.png',
  'center',
  '["智慧廚具"]'::jsonb,
  '["工程裝修"]'::jsonb,
  '{}'::jsonb,
  NOW(), NOW(),
  'active'
WHERE NOT EXISTS (
  SELECT 1 FROM public.members m WHERE m.name = '陳啓人'
);
INSERT INTO public.members (
  id, name, company, position, title, industry, category,
  "shortIntro", "fullIntro", photo, "photoPosition",
  services, hashtags, links, "createdAt", "updatedAt", status
)
SELECT
  850008,
  '徐翠蓮',
  '長翔名人堂白金分會',
  '室內裝修統包',
  '室內裝修統包',
  '室內裝修統包',
  '居住與空間工程',
  '裝修大小無難事 大堂讓您好舒適',
  '【五大產業】工程裝修產業鍊
【專業】室內裝修統包
【合作／引薦對象】有全室內裝修需求的個人或公司
【SLOGAN】裝修大小無難事 大堂讓您好舒適

資料來源：《長翔五大產業類別及Slogan》PDF（20260224）。',
  'https://changsiang.tw/BNI.Chang.Siang.Chapter/images/assets/logo/白色正方形logo.png',
  'center',
  '["室內裝修統包"]'::jsonb,
  '["工程裝修"]'::jsonb,
  '{}'::jsonb,
  NOW(), NOW(),
  'active'
WHERE NOT EXISTS (
  SELECT 1 FROM public.members m WHERE m.name = '徐翠蓮'
);
INSERT INTO public.members (
  id, name, company, position, title, industry, category,
  "shortIntro", "fullIntro", photo, "photoPosition",
  services, hashtags, links, "createdAt", "updatedAt", status
)
SELECT
  850009,
  '簡健翔',
  '長翔名人堂白金分會',
  '商空木作',
  '商空木作',
  '商空木作',
  '居住與空間工程',
  '商空木作找健翔 事業健康都飛揚',
  '【五大產業】工程裝修產業鍊
【專業】商空木作
【合作／引薦對象】想學木工的有志青年/欠缺工班的設計師
【SLOGAN】商空木作找健翔 事業健康都飛揚

資料來源：《長翔五大產業類別及Slogan》PDF（20260224）。',
  'https://changsiang.tw/BNI.Chang.Siang.Chapter/images/assets/logo/白色正方形logo.png',
  'center',
  '["商空木作"]'::jsonb,
  '["工程裝修"]'::jsonb,
  '{}'::jsonb,
  NOW(), NOW(),
  'active'
WHERE NOT EXISTS (
  SELECT 1 FROM public.members m WHERE m.name = '簡健翔'
);
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