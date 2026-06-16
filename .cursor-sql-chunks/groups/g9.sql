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