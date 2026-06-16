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