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