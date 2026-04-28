-- 由 scripts/generate-pdf-chain-members-sql.mjs 產生
-- 2026-04-28T17:52:46.671Z
-- 《長翔五大產業類別及Slogan》PDF → members（依姓名略過已存在者）
-- 請在 InsForge Database → SQL Editor 貼上執行（通常具 postgres 權限會繞過 RLS）。
BEGIN;

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

INSERT INTO public.members (
  id, name, company, position, title, industry, category,
  "shortIntro", "fullIntro", photo, "photoPosition",
  services, hashtags, links, "createdAt", "updatedAt", status
)
SELECT
  850025,
  '方唯任',
  '長翔名人堂白金分會',
  '靜態攝影',
  '靜態攝影',
  '靜態攝影',
  '企業營運與法稅',
  '攝影找 Vincent 品牌形象再提升',
  '【五大產業】企業服務產業鍊
【專業】靜態攝影
【合作／引薦對象】活動公關/品牌行銷/展場規劃
【SLOGAN】攝影找 Vincent 品牌形象再提升

資料來源：《長翔五大產業類別及Slogan》PDF（20260224）。',
  'https://changsiang.tw/BNI.Chang.Siang.Chapter/images/assets/logo/白色正方形logo.png',
  'center',
  '["靜態攝影"]'::jsonb,
  '["企業服務"]'::jsonb,
  '{}'::jsonb,
  NOW(), NOW(),
  'active'
WHERE NOT EXISTS (
  SELECT 1 FROM public.members m WHERE m.name = '方唯任'
);

INSERT INTO public.members (
  id, name, company, position, title, industry, category,
  "shortIntro", "fullIntro", photo, "photoPosition",
  services, hashtags, links, "createdAt", "updatedAt", status
)
SELECT
  850026,
  '謝宜芳',
  '長翔名人堂白金分會',
  '生鮮食品',
  '生鮮食品',
  '生鮮食品',
  '品牌整合與行銷',
  '安心生鮮找宜芳 美味佳餚最大方',
  '【五大產業】消費生活產業鍊
【專業】生鮮食品
【合作／引薦對象】愛吃美食的個人/公司福委會
【SLOGAN】安心生鮮找宜芳 美味佳餚最大方

資料來源：《長翔五大產業類別及Slogan》PDF（20260224）。',
  'https://changsiang.tw/BNI.Chang.Siang.Chapter/images/assets/logo/白色正方形logo.png',
  'center',
  '["生鮮食品"]'::jsonb,
  '["消費生活"]'::jsonb,
  '{}'::jsonb,
  NOW(), NOW(),
  'active'
WHERE NOT EXISTS (
  SELECT 1 FROM public.members m WHERE m.name = '謝宜芳'
);

INSERT INTO public.members (
  id, name, company, position, title, industry, category,
  "shortIntro", "fullIntro", photo, "photoPosition",
  services, hashtags, links, "createdAt", "updatedAt", status
)
SELECT
  850027,
  '葉莉菁',
  '長翔名人堂白金分會',
  '手工皂製作行銷教學',
  '手工皂製作行銷教學',
  '手工皂製作行銷教學',
  '品牌整合與行銷',
  '健康無毒找莉菁 清潔保養樣樣行',
  '【五大產業】消費生活產業鍊
【專業】手工皂製作行銷教學
【合作／引薦對象】重視天然健康的社區媽媽/上班族
【SLOGAN】健康無毒找莉菁 清潔保養樣樣行

資料來源：《長翔五大產業類別及Slogan》PDF（20260224）。',
  'https://changsiang.tw/BNI.Chang.Siang.Chapter/images/assets/logo/白色正方形logo.png',
  'center',
  '["手工皂製作行銷教學"]'::jsonb,
  '["消費生活"]'::jsonb,
  '{}'::jsonb,
  NOW(), NOW(),
  'active'
WHERE NOT EXISTS (
  SELECT 1 FROM public.members m WHERE m.name = '葉莉菁'
);

INSERT INTO public.members (
  id, name, company, position, title, industry, category,
  "shortIntro", "fullIntro", photo, "photoPosition",
  services, hashtags, links, "createdAt", "updatedAt", status
)
SELECT
  850028,
  '周玉茹',
  '長翔名人堂白金分會',
  '髮品製造批發',
  '髮品製造批發',
  '髮品製造批發',
  '品牌整合與行銷',
  '美髮能量找玉茹 變帥變美最幸福',
  '【五大產業】消費生活產業鍊
【專業】髮品製造批發
【合作／引薦對象】美髮沙龍/電商平台/科大造型系主任
【SLOGAN】美髮能量找玉茹 變帥變美最幸福

資料來源：《長翔五大產業類別及Slogan》PDF（20260224）。',
  'https://changsiang.tw/BNI.Chang.Siang.Chapter/images/assets/logo/白色正方形logo.png',
  'center',
  '["髮品製造批發"]'::jsonb,
  '["消費生活"]'::jsonb,
  '{}'::jsonb,
  NOW(), NOW(),
  'active'
WHERE NOT EXISTS (
  SELECT 1 FROM public.members m WHERE m.name = '周玉茹'
);

INSERT INTO public.members (
  id, name, company, position, title, industry, category,
  "shortIntro", "fullIntro", photo, "photoPosition",
  services, hashtags, links, "createdAt", "updatedAt", status
)
SELECT
  850029,
  '汪哲宇',
  '長翔名人堂白金分會',
  '氣球佈置',
  '氣球佈置',
  '氣球佈置',
  '品牌整合與行銷',
  '氣球佈置找哲宇 歡樂繽紛So Easy',
  '【五大產業】消費生活產業鍊
【專業】氣球佈置
【合作／引薦對象】活動公關公司/連鎖飯店/婚顧公司
【SLOGAN】氣球佈置找哲宇 歡樂繽紛So Easy

資料來源：《長翔五大產業類別及Slogan》PDF（20260224）。',
  'https://changsiang.tw/BNI.Chang.Siang.Chapter/images/assets/logo/白色正方形logo.png',
  'center',
  '["氣球佈置"]'::jsonb,
  '["消費生活"]'::jsonb,
  '{}'::jsonb,
  NOW(), NOW(),
  'active'
WHERE NOT EXISTS (
  SELECT 1 FROM public.members m WHERE m.name = '汪哲宇'
);

INSERT INTO public.members (
  id, name, company, position, title, industry, category,
  "shortIntro", "fullIntro", photo, "photoPosition",
  services, hashtags, links, "createdAt", "updatedAt", status
)
SELECT
  850030,
  '吳庭彰',
  '長翔名人堂白金分會',
  '活動體驗企劃',
  '活動體驗企劃',
  '活動體驗企劃',
  '品牌整合與行銷',
  '團隊凝聚找Wudy 工作團隊變無敵',
  '【五大產業】消費生活產業鍊
【專業】活動體驗企劃
【合作／引薦對象】人力培訓/凝聚共識需求的老闆
【SLOGAN】團隊凝聚找Wudy 工作團隊變無敵

資料來源：《長翔五大產業類別及Slogan》PDF（20260224）。',
  'https://changsiang.tw/BNI.Chang.Siang.Chapter/images/assets/logo/白色正方形logo.png',
  'center',
  '["活動體驗企劃"]'::jsonb,
  '["消費生活"]'::jsonb,
  '{}'::jsonb,
  NOW(), NOW(),
  'active'
WHERE NOT EXISTS (
  SELECT 1 FROM public.members m WHERE m.name = '吳庭彰'
);

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

COMMIT;
