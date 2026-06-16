BEGIN;

UPDATE public.members
SET
  company = '益立福生物科技有限公司',
  position = '董事長',
  title = '董事長 - 益立福生物科技有限公司',
  industry = '醫療輔具',
  category = '健康美麗',
  "shortIntro" = '醫療輔具 找修賢 從頭到腳 最專業',
  "fullIntro" = '我是林修賢，專注於醫療輔具。
醫療輔具 找修賢 從頭到腳 最專業

【理想引薦對象】
骨科、復健科醫師，醫院及診所

【聯絡方式】
0905-510-604 eeniusjk@gmail.com',
  photo = 'images/members/林修賢.jpg',
  "photoPosition" = 'center',
  services = '["客製化矯正鞋墊","各類醫療輔具"]'::jsonb,
  hashtags = '["#醫療輔具業","#林修賢","#BNI長輝白金分會"]'::jsonb,
  links = '[{"type":"facebook","url":"#","icon":"facebook"},{"type":"line","url":"#","icon":"line"},{"type":"website","url":"#","icon":"website"}]'::jsonb,
  "editCount" = COALESCE("editCount", 0),
  "updatedAt" = NOW(),
  phone = NULL,
  email = NULL,
  status = 'active'
WHERE name = '林修賢';

INSERT INTO public.members (
  id, name, company, position, title, industry, category,
  "shortIntro", "fullIntro", photo, "photoPosition",
  services, hashtags, links, "editCount", "createdAt", "updatedAt", phone, email, status
)
SELECT
  100001,
  '林修賢',
  '益立福生物科技有限公司',
  '董事長',
  '董事長 - 益立福生物科技有限公司',
  '醫療輔具',
  '健康美麗',
  '醫療輔具 找修賢 從頭到腳 最專業',
  '我是林修賢，專注於醫療輔具。
醫療輔具 找修賢 從頭到腳 最專業

【理想引薦對象】
骨科、復健科醫師，醫院及診所

【聯絡方式】
0905-510-604 eeniusjk@gmail.com',
  'images/members/林修賢.jpg',
  'center',
  '["客製化矯正鞋墊","各類醫療輔具"]'::jsonb,
  '["#醫療輔具業","#林修賢","#BNI長輝白金分會"]'::jsonb,
  '[{"type":"facebook","url":"#","icon":"facebook"},{"type":"line","url":"#","icon":"line"},{"type":"website","url":"#","icon":"website"}]'::jsonb,
  0,
  NOW(),
  NOW(),
  NULL,
  NULL,
  'active'
WHERE NOT EXISTS (
  SELECT 1 FROM public.members m WHERE m.name = '林修賢'
);

UPDATE public.members
SET
  company = '南山人壽 重盛通訊處',
  position = '董事長',
  title = '董事長 - 南山人壽 重盛通訊處',
  industry = '人壽保險',
  category = '健康美麗',
  "shortIntro" = '長照理財 找介輝 讓你生命 更光輝',
  "fullIntro" = '我是吳介輝，專注於人壽保險。
長照理財 找介輝 讓你生命 更光輝

【理想引薦對象】
骨/復健科醫師、中醫師 牙醫師、長照機構

【聯絡方式】
0911-602-709 michaelwu7676@gmail.com',
  photo = 'images/members/吳介輝.jpg',
  "photoPosition" = 'center',
  services = '["醫療","意外","儲蓄","長照規劃"]'::jsonb,
  hashtags = '["#人壽保險業","#吳介輝","#BNI長輝白金分會"]'::jsonb,
  links = '[{"type":"facebook","url":"#","icon":"facebook"},{"type":"line","url":"#","icon":"line"},{"type":"website","url":"#","icon":"website"}]'::jsonb,
  "editCount" = COALESCE("editCount", 0),
  "updatedAt" = NOW(),
  phone = NULL,
  email = NULL,
  status = 'active'
WHERE name = '吳介輝';

INSERT INTO public.members (
  id, name, company, position, title, industry, category,
  "shortIntro", "fullIntro", photo, "photoPosition",
  services, hashtags, links, "editCount", "createdAt", "updatedAt", phone, email, status
)
SELECT
  100002,
  '吳介輝',
  '南山人壽 重盛通訊處',
  '董事長',
  '董事長 - 南山人壽 重盛通訊處',
  '人壽保險',
  '健康美麗',
  '長照理財 找介輝 讓你生命 更光輝',
  '我是吳介輝，專注於人壽保險。
長照理財 找介輝 讓你生命 更光輝

【理想引薦對象】
骨/復健科醫師、中醫師 牙醫師、長照機構

【聯絡方式】
0911-602-709 michaelwu7676@gmail.com',
  'images/members/吳介輝.jpg',
  'center',
  '["醫療","意外","儲蓄","長照規劃"]'::jsonb,
  '["#人壽保險業","#吳介輝","#BNI長輝白金分會"]'::jsonb,
  '[{"type":"facebook","url":"#","icon":"facebook"},{"type":"line","url":"#","icon":"line"},{"type":"website","url":"#","icon":"website"}]'::jsonb,
  0,
  NOW(),
  NOW(),
  NULL,
  NULL,
  'active'
WHERE NOT EXISTS (
  SELECT 1 FROM public.members m WHERE m.name = '吳介輝'
);

UPDATE public.members
SET
  company = '一百分股份有限公司',
  position = '董事長',
  title = '董事長 - 一百分股份有限公司',
  industry = '甜品外燴',
  category = '美食餐飲',
  "shortIntro" = '活動餐點 甜饗派 一站服務 不用煩',
  "fullIntro" = '我是郭家宏，專注於甜品外燴。
活動餐點 甜饗派 一站服務 不用煩

【理想引薦對象】
活動企劃公司/行銷公司/公關公司/婚禮企劃公司

【聯絡方式】
0912-618-501 egg100daan@gmail.com',
  photo = 'images/members/郭家宏.jpg',
  "photoPosition" = 'center',
  services = '["春酒尾牙Candy Bar/活動下午茶/會議餐盒點心"]'::jsonb,
  hashtags = '["#無麩質雞蛋糕","#郭家宏","#BNI長輝白金分會"]'::jsonb,
  links = '[{"type":"facebook","url":"#","icon":"facebook"},{"type":"line","url":"#","icon":"line"},{"type":"website","url":"#","icon":"website"}]'::jsonb,
  "editCount" = COALESCE("editCount", 0),
  "updatedAt" = NOW(),
  phone = NULL,
  email = NULL,
  status = 'active'
WHERE name = '郭家宏';

INSERT INTO public.members (
  id, name, company, position, title, industry, category,
  "shortIntro", "fullIntro", photo, "photoPosition",
  services, hashtags, links, "editCount", "createdAt", "updatedAt", phone, email, status
)
SELECT
  100003,
  '郭家宏',
  '一百分股份有限公司',
  '董事長',
  '董事長 - 一百分股份有限公司',
  '甜品外燴',
  '美食餐飲',
  '活動餐點 甜饗派 一站服務 不用煩',
  '我是郭家宏，專注於甜品外燴。
活動餐點 甜饗派 一站服務 不用煩

【理想引薦對象】
活動企劃公司/行銷公司/公關公司/婚禮企劃公司

【聯絡方式】
0912-618-501 egg100daan@gmail.com',
  'images/members/郭家宏.jpg',
  'center',
  '["春酒尾牙Candy Bar/活動下午茶/會議餐盒點心"]'::jsonb,
  '["#無麩質雞蛋糕","#郭家宏","#BNI長輝白金分會"]'::jsonb,
  '[{"type":"facebook","url":"#","icon":"facebook"},{"type":"line","url":"#","icon":"line"},{"type":"website","url":"#","icon":"website"}]'::jsonb,
  0,
  NOW(),
  NOW(),
  NULL,
  NULL,
  'active'
WHERE NOT EXISTS (
  SELECT 1 FROM public.members m WHERE m.name = '郭家宏'
);

UPDATE public.members
SET
  company = 'Amway安麗',
  position = '董事長',
  title = '董事長 - Amway安麗',
  industry = '營養保健',
  category = '健康美麗',
  "shortIntro" = '草本養生 找沛璇 美好生活 逐笑顏',
  "fullIntro" = '我是江沛璇，專注於營養保健。
草本養生 找沛璇 美好生活 逐笑顏

【理想引薦對象】
心理諮商、中醫師、家醫科醫師

【聯絡方式】
0939-664-562 ilchiang@yahoo.com',
  photo = 'images/members/江沛璇.jpg',
  "photoPosition" = 'center',
  services = '["營養保健品","營養早餐","健管計劃"]'::jsonb,
  hashtags = '["#營養保健業","#江沛璇","#BNI長輝白金分會"]'::jsonb,
  links = '[{"type":"facebook","url":"#","icon":"facebook"},{"type":"line","url":"#","icon":"line"},{"type":"website","url":"#","icon":"website"}]'::jsonb,
  "editCount" = COALESCE("editCount", 0),
  "updatedAt" = NOW(),
  phone = NULL,
  email = NULL,
  status = 'active'
WHERE name = '江沛璇';

INSERT INTO public.members (
  id, name, company, position, title, industry, category,
  "shortIntro", "fullIntro", photo, "photoPosition",
  services, hashtags, links, "editCount", "createdAt", "updatedAt", phone, email, status
)
SELECT
  100004,
  '江沛璇',
  'Amway安麗',
  '董事長',
  '董事長 - Amway安麗',
  '營養保健',
  '健康美麗',
  '草本養生 找沛璇 美好生活 逐笑顏',
  '我是江沛璇，專注於營養保健。
草本養生 找沛璇 美好生活 逐笑顏

【理想引薦對象】
心理諮商、中醫師、家醫科醫師

【聯絡方式】
0939-664-562 ilchiang@yahoo.com',
  'images/members/江沛璇.jpg',
  'center',
  '["營養保健品","營養早餐","健管計劃"]'::jsonb,
  '["#營養保健業","#江沛璇","#BNI長輝白金分會"]'::jsonb,
  '[{"type":"facebook","url":"#","icon":"facebook"},{"type":"line","url":"#","icon":"line"},{"type":"website","url":"#","icon":"website"}]'::jsonb,
  0,
  NOW(),
  NOW(),
  NULL,
  NULL,
  'active'
WHERE NOT EXISTS (
  SELECT 1 FROM public.members m WHERE m.name = '江沛璇'
);

UPDATE public.members
SET
  company = '問大師家族辦公室',
  position = '董事長',
  title = '董事長 - 問大師家族辦公室',
  industry = '信託規劃顧問',
  category = '企業顧問',
  "shortIntro" = '信託規劃 找執定 無憂無慮 心安定',
  "fullIntro" = '我是王執定，專注於信託規劃顧問。
信託規劃 找執定 無憂無慮 心安定

【理想引薦對象】
長照、銀髮機構業者

【聯絡方式】
0927-860-882 garfiwang@gmail.com',
  photo = 'images/members/王執定.jpg',
  "photoPosition" = 'center',
  services = '["信託規劃","財產規劃"]'::jsonb,
  hashtags = '["#信託規劃顧問","#王執定","#BNI長輝白金分會"]'::jsonb,
  links = '[{"type":"facebook","url":"#","icon":"facebook"},{"type":"line","url":"#","icon":"line"},{"type":"website","url":"#","icon":"website"}]'::jsonb,
  "editCount" = COALESCE("editCount", 0),
  "updatedAt" = NOW(),
  phone = NULL,
  email = NULL,
  status = 'active'
WHERE name = '王執定';

INSERT INTO public.members (
  id, name, company, position, title, industry, category,
  "shortIntro", "fullIntro", photo, "photoPosition",
  services, hashtags, links, "editCount", "createdAt", "updatedAt", phone, email, status
)
SELECT
  100005,
  '王執定',
  '問大師家族辦公室',
  '董事長',
  '董事長 - 問大師家族辦公室',
  '信託規劃顧問',
  '企業顧問',
  '信託規劃 找執定 無憂無慮 心安定',
  '我是王執定，專注於信託規劃顧問。
信託規劃 找執定 無憂無慮 心安定

【理想引薦對象】
長照、銀髮機構業者

【聯絡方式】
0927-860-882 garfiwang@gmail.com',
  'images/members/王執定.jpg',
  'center',
  '["信託規劃","財產規劃"]'::jsonb,
  '["#信託規劃顧問","#王執定","#BNI長輝白金分會"]'::jsonb,
  '[{"type":"facebook","url":"#","icon":"facebook"},{"type":"line","url":"#","icon":"line"},{"type":"website","url":"#","icon":"website"}]'::jsonb,
  0,
  NOW(),
  NOW(),
  NULL,
  NULL,
  'active'
WHERE NOT EXISTS (
  SELECT 1 FROM public.members m WHERE m.name = '王執定'
);

UPDATE public.members
SET
  company = '長輝照明科技有限公司',
  position = '董事長',
  title = '董事長 - 長輝照明科技有限公司',
  industry = '燈具照明',
  category = '工程裝修',
  "shortIntro" = '生活照明 找冠勛 人生光明 得冠軍',
  "fullIntro" = '我是王冠勛，專注於燈具照明。
生活照明 找冠勛 人生光明 得冠軍

【理想引薦對象】
室內設計師、營造廠主任、水電工程包商

【聯絡方式】
0911-205-224 line ID:ederwang',
  photo = 'images/members/王冠勛.jpg',
  "photoPosition" = 'center',
  services = '["照明燈具批發","規劃","客製化訂做"]'::jsonb,
  hashtags = '["#燈具照明","#王冠勛","#BNI長輝白金分會"]'::jsonb,
  links = '[{"type":"facebook","url":"#","icon":"facebook"},{"type":"line","url":"#","icon":"line"},{"type":"website","url":"#","icon":"website"}]'::jsonb,
  "editCount" = COALESCE("editCount", 0),
  "updatedAt" = NOW(),
  phone = NULL,
  email = NULL,
  status = 'active'
WHERE name = '王冠勛';

INSERT INTO public.members (
  id, name, company, position, title, industry, category,
  "shortIntro", "fullIntro", photo, "photoPosition",
  services, hashtags, links, "editCount", "createdAt", "updatedAt", phone, email, status
)
SELECT
  100006,
  '王冠勛',
  '長輝照明科技有限公司',
  '董事長',
  '董事長 - 長輝照明科技有限公司',
  '燈具照明',
  '工程裝修',
  '生活照明 找冠勛 人生光明 得冠軍',
  '我是王冠勛，專注於燈具照明。
生活照明 找冠勛 人生光明 得冠軍

【理想引薦對象】
室內設計師、營造廠主任、水電工程包商

【聯絡方式】
0911-205-224 line ID:ederwang',
  'images/members/王冠勛.jpg',
  'center',
  '["照明燈具批發","規劃","客製化訂做"]'::jsonb,
  '["#燈具照明","#王冠勛","#BNI長輝白金分會"]'::jsonb,
  '[{"type":"facebook","url":"#","icon":"facebook"},{"type":"line","url":"#","icon":"line"},{"type":"website","url":"#","icon":"website"}]'::jsonb,
  0,
  NOW(),
  NOW(),
  NULL,
  NULL,
  'active'
WHERE NOT EXISTS (
  SELECT 1 FROM public.members m WHERE m.name = '王冠勛'
);

UPDATE public.members
SET
  company = '德恭法律事務所',
  position = '董事長',
  title = '董事長 - 德恭法律事務所',
  industry = '律師',
  category = '企業顧問',
  "shortIntro" = '訴訟經驗 最齊全 法律諮詢 何昇軒',
  "fullIntro" = '我是何昇軒，專注於律師。
訴訟經驗 最齊全 法律諮詢 何昇軒

【理想引薦對象】
命理師、銀行理專

【聯絡方式】
0985-697-791 ntpuho@gmail.com',
  photo = 'images/members/何昇軒.jpg',
  "photoPosition" = 'center',
  services = '["訴訟","法律諮詢服務"]'::jsonb,
  hashtags = '["#律師","#何昇軒","#BNI長輝白金分會"]'::jsonb,
  links = '[{"type":"facebook","url":"#","icon":"facebook"},{"type":"line","url":"#","icon":"line"},{"type":"website","url":"#","icon":"website"}]'::jsonb,
  "editCount" = COALESCE("editCount", 0),
  "updatedAt" = NOW(),
  phone = NULL,
  email = NULL,
  status = 'active'
WHERE name = '何昇軒';

INSERT INTO public.members (
  id, name, company, position, title, industry, category,
  "shortIntro", "fullIntro", photo, "photoPosition",
  services, hashtags, links, "editCount", "createdAt", "updatedAt", phone, email, status
)
SELECT
  100007,
  '何昇軒',
  '德恭法律事務所',
  '董事長',
  '董事長 - 德恭法律事務所',
  '律師',
  '企業顧問',
  '訴訟經驗 最齊全 法律諮詢 何昇軒',
  '我是何昇軒，專注於律師。
訴訟經驗 最齊全 法律諮詢 何昇軒

【理想引薦對象】
命理師、銀行理專

【聯絡方式】
0985-697-791 ntpuho@gmail.com',
  'images/members/何昇軒.jpg',
  'center',
  '["訴訟","法律諮詢服務"]'::jsonb,
  '["#律師","#何昇軒","#BNI長輝白金分會"]'::jsonb,
  '[{"type":"facebook","url":"#","icon":"facebook"},{"type":"line","url":"#","icon":"line"},{"type":"website","url":"#","icon":"website"}]'::jsonb,
  0,
  NOW(),
  NOW(),
  NULL,
  NULL,
  'active'
WHERE NOT EXISTS (
  SELECT 1 FROM public.members m WHERE m.name = '何昇軒'
);

UPDATE public.members
SET
  company = '提芙設計工程有限公司',
  position = '董事長',
  title = '董事長 - 提芙設計工程有限公司',
  industry = '商空設計',
  category = '工程裝修',
  "shortIntro" = '風格國際 又獨特 商空設計 找杜哥',
  "fullIntro" = '我是杜宗樺，專注於商空設計。
風格國際 又獨特 商空設計 找杜哥

【理想引薦對象】
星巴克、星巴克、星巴克

【聯絡方式】
0937-666-877 design@e-deva.com.tw',
  photo = 'images/members/杜宗樺.jpg',
  "photoPosition" = 'center',
  services = '["連鎖餐飲","汽車展覽"]'::jsonb,
  hashtags = '["#商空設計","#杜宗樺","#BNI長輝白金分會"]'::jsonb,
  links = '[{"type":"facebook","url":"#","icon":"facebook"},{"type":"line","url":"#","icon":"line"},{"type":"website","url":"#","icon":"website"}]'::jsonb,
  "editCount" = COALESCE("editCount", 0),
  "updatedAt" = NOW(),
  phone = NULL,
  email = NULL,
  status = 'active'
WHERE name = '杜宗樺';

INSERT INTO public.members (
  id, name, company, position, title, industry, category,
  "shortIntro", "fullIntro", photo, "photoPosition",
  services, hashtags, links, "editCount", "createdAt", "updatedAt", phone, email, status
)
SELECT
  100008,
  '杜宗樺',
  '提芙設計工程有限公司',
  '董事長',
  '董事長 - 提芙設計工程有限公司',
  '商空設計',
  '工程裝修',
  '風格國際 又獨特 商空設計 找杜哥',
  '我是杜宗樺，專注於商空設計。
風格國際 又獨特 商空設計 找杜哥

【理想引薦對象】
星巴克、星巴克、星巴克

【聯絡方式】
0937-666-877 design@e-deva.com.tw',
  'images/members/杜宗樺.jpg',
  'center',
  '["連鎖餐飲","汽車展覽"]'::jsonb,
  '["#商空設計","#杜宗樺","#BNI長輝白金分會"]'::jsonb,
  '[{"type":"facebook","url":"#","icon":"facebook"},{"type":"line","url":"#","icon":"line"},{"type":"website","url":"#","icon":"website"}]'::jsonb,
  0,
  NOW(),
  NOW(),
  NULL,
  NULL,
  'active'
WHERE NOT EXISTS (
  SELECT 1 FROM public.members m WHERE m.name = '杜宗樺'
);

UPDATE public.members
SET
  company = '樂霖物理治療所',
  position = '董事長',
  title = '董事長 - 樂霖物理治療所',
  industry = '物理治療師',
  category = '健康美麗',
  "shortIntro" = '身體痠痛 找瑋弘 讓你健康 氣勢虹',
  "fullIntro" = '我是賴瑋弘，專注於物理治療師。
身體痠痛 找瑋弘 讓你健康 氣勢虹

【理想引薦對象】
骨科及復健科醫師、健身教練

【聯絡方式】
0921-345-753 pe7256@gmail.com',
  photo = 'images/members/賴瑋弘.jpg',
  "photoPosition" = 'center',
  services = '["疼痛解除","徒手治療","運動治療"]'::jsonb,
  hashtags = '["#物理治療師","#賴瑋弘","#BNI長輝白金分會"]'::jsonb,
  links = '[{"type":"facebook","url":"#","icon":"facebook"},{"type":"line","url":"#","icon":"line"},{"type":"website","url":"#","icon":"website"}]'::jsonb,
  "editCount" = COALESCE("editCount", 0),
  "updatedAt" = NOW(),
  phone = NULL,
  email = NULL,
  status = 'active'
WHERE name = '賴瑋弘';

INSERT INTO public.members (
  id, name, company, position, title, industry, category,
  "shortIntro", "fullIntro", photo, "photoPosition",
  services, hashtags, links, "editCount", "createdAt", "updatedAt", phone, email, status
)
SELECT
  100009,
  '賴瑋弘',
  '樂霖物理治療所',
  '董事長',
  '董事長 - 樂霖物理治療所',
  '物理治療師',
  '健康美麗',
  '身體痠痛 找瑋弘 讓你健康 氣勢虹',
  '我是賴瑋弘，專注於物理治療師。
身體痠痛 找瑋弘 讓你健康 氣勢虹

【理想引薦對象】
骨科及復健科醫師、健身教練

【聯絡方式】
0921-345-753 pe7256@gmail.com',
  'images/members/賴瑋弘.jpg',
  'center',
  '["疼痛解除","徒手治療","運動治療"]'::jsonb,
  '["#物理治療師","#賴瑋弘","#BNI長輝白金分會"]'::jsonb,
  '[{"type":"facebook","url":"#","icon":"facebook"},{"type":"line","url":"#","icon":"line"},{"type":"website","url":"#","icon":"website"}]'::jsonb,
  0,
  NOW(),
  NOW(),
  NULL,
  NULL,
  'active'
WHERE NOT EXISTS (
  SELECT 1 FROM public.members m WHERE m.name = '賴瑋弘'
);

UPDATE public.members
SET
  company = '溫體氣流廣告製作有限公司',
  position = '董事長',
  title = '董事長 - 溫體氣流廣告製作有限公司',
  industry = '品牌設計',
  category = '企業顧問',
  "shortIntro" = '品牌設計 找學洋 業績提升 喜洋洋',
  "fullIntro" = '我是江學洋，專注於品牌設計。
品牌設計 找學洋 業績提升 喜洋洋

【理想引薦對象】
傳產二代接班轉型想做品牌、連鎖餐飲品牌打理、新開店面品牌

【聯絡方式】
0986-921-263',
  photo = 'images/members/江學洋.jpg',
  "photoPosition" = 'center',
  services = '["用品牌識別幫你說一個好故事"]'::jsonb,
  hashtags = '["#品牌設計","#江學洋","#BNI長輝白金分會"]'::jsonb,
  links = '[{"type":"facebook","url":"#","icon":"facebook"},{"type":"line","url":"#","icon":"line"},{"type":"website","url":"#","icon":"website"}]'::jsonb,
  "editCount" = COALESCE("editCount", 0),
  "updatedAt" = NOW(),
  phone = NULL,
  email = NULL,
  status = 'active'
WHERE name = '江學洋';

INSERT INTO public.members (
  id, name, company, position, title, industry, category,
  "shortIntro", "fullIntro", photo, "photoPosition",
  services, hashtags, links, "editCount", "createdAt", "updatedAt", phone, email, status
)
SELECT
  100010,
  '江學洋',
  '溫體氣流廣告製作有限公司',
  '董事長',
  '董事長 - 溫體氣流廣告製作有限公司',
  '品牌設計',
  '企業顧問',
  '品牌設計 找學洋 業績提升 喜洋洋',
  '我是江學洋，專注於品牌設計。
品牌設計 找學洋 業績提升 喜洋洋

【理想引薦對象】
傳產二代接班轉型想做品牌、連鎖餐飲品牌打理、新開店面品牌

【聯絡方式】
0986-921-263',
  'images/members/江學洋.jpg',
  'center',
  '["用品牌識別幫你說一個好故事"]'::jsonb,
  '["#品牌設計","#江學洋","#BNI長輝白金分會"]'::jsonb,
  '[{"type":"facebook","url":"#","icon":"facebook"},{"type":"line","url":"#","icon":"line"},{"type":"website","url":"#","icon":"website"}]'::jsonb,
  0,
  NOW(),
  NOW(),
  NULL,
  NULL,
  'active'
WHERE NOT EXISTS (
  SELECT 1 FROM public.members m WHERE m.name = '江學洋'
);

UPDATE public.members
SET
  company = '和朝創意開發有限公司',
  position = '董事長',
  title = '董事長 - 和朝創意開發有限公司',
  industry = '禮贈品',
  category = '企業行銷',
  "shortIntro" = '贈品商品找Johnson 行銷效益 有保證',
  "fullIntro" = '我是孫成育，專注於禮贈品。
贈品商品找Johnson 行銷效益 有保證

【理想引薦對象】
品牌策略、廣告企劃、展覽規劃、線上線下整合行銷

【聯絡方式】
0935-009-651 johnson@harvestnest.com',
  photo = 'images/members/孫成育.jpg',
  "photoPosition" = 'top',
  services = '["企業禮贈品","文創個性商品創意商品開發","包袋類製作"]'::jsonb,
  hashtags = '["#禮贈品","#孫成育","#BNI長輝白金分會"]'::jsonb,
  links = '[{"type":"facebook","url":"#","icon":"facebook"},{"type":"line","url":"#","icon":"line"},{"type":"website","url":"#","icon":"website"}]'::jsonb,
  "editCount" = COALESCE("editCount", 0),
  "updatedAt" = NOW(),
  phone = NULL,
  email = NULL,
  status = 'active'
WHERE name = '孫成育';

INSERT INTO public.members (
  id, name, company, position, title, industry, category,
  "shortIntro", "fullIntro", photo, "photoPosition",
  services, hashtags, links, "editCount", "createdAt", "updatedAt", phone, email, status
)
SELECT
  100011,
  '孫成育',
  '和朝創意開發有限公司',
  '董事長',
  '董事長 - 和朝創意開發有限公司',
  '禮贈品',
  '企業行銷',
  '贈品商品找Johnson 行銷效益 有保證',
  '我是孫成育，專注於禮贈品。
贈品商品找Johnson 行銷效益 有保證

【理想引薦對象】
品牌策略、廣告企劃、展覽規劃、線上線下整合行銷

【聯絡方式】
0935-009-651 johnson@harvestnest.com',
  'images/members/孫成育.jpg',
  'top',
  '["企業禮贈品","文創個性商品創意商品開發","包袋類製作"]'::jsonb,
  '["#禮贈品","#孫成育","#BNI長輝白金分會"]'::jsonb,
  '[{"type":"facebook","url":"#","icon":"facebook"},{"type":"line","url":"#","icon":"line"},{"type":"website","url":"#","icon":"website"}]'::jsonb,
  0,
  NOW(),
  NOW(),
  NULL,
  NULL,
  'active'
WHERE NOT EXISTS (
  SELECT 1 FROM public.members m WHERE m.name = '孫成育'
);

UPDATE public.members
SET
  company = '夢想成真資訊股份有限公司',
  position = '董事長',
  title = '董事長 - 夢想成真資訊股份有限公司',
  industry = '中小企業顧問',
  category = '企業顧問',
  "shortIntro" = '問題解決 全方位 省錢賺錢 邱宇鴻',
  "fullIntro" = '我是邱宇鴻，專注於中小企業顧問。
問題解決 全方位 省錢賺錢 邱宇鴻

【理想引薦對象】
新創中小企業、想開發電商網路企業 中小企業老闆(20人以下) 、傳產想經營網路電商、新創公司(剛創業諮詢)

【聯絡方式】
0989-018-852',
  photo = 'images/members/邱宇鴻.jpg',
  "photoPosition" = 'center',
  services = '["電腦資訊網路解決"]'::jsonb,
  hashtags = '["#中小企業顧問","#邱宇鴻","#BNI長輝白金分會"]'::jsonb,
  links = '[{"type":"facebook","url":"#","icon":"facebook"},{"type":"line","url":"#","icon":"line"},{"type":"website","url":"#","icon":"website"}]'::jsonb,
  "editCount" = COALESCE("editCount", 0),
  "updatedAt" = NOW(),
  phone = NULL,
  email = NULL,
  status = 'active'
WHERE name = '邱宇鴻';

INSERT INTO public.members (
  id, name, company, position, title, industry, category,
  "shortIntro", "fullIntro", photo, "photoPosition",
  services, hashtags, links, "editCount", "createdAt", "updatedAt", phone, email, status
)
SELECT
  100012,
  '邱宇鴻',
  '夢想成真資訊股份有限公司',
  '董事長',
  '董事長 - 夢想成真資訊股份有限公司',
  '中小企業顧問',
  '企業顧問',
  '問題解決 全方位 省錢賺錢 邱宇鴻',
  '我是邱宇鴻，專注於中小企業顧問。
問題解決 全方位 省錢賺錢 邱宇鴻

【理想引薦對象】
新創中小企業、想開發電商網路企業 中小企業老闆(20人以下) 、傳產想經營網路電商、新創公司(剛創業諮詢)

【聯絡方式】
0989-018-852',
  'images/members/邱宇鴻.jpg',
  'center',
  '["電腦資訊網路解決"]'::jsonb,
  '["#中小企業顧問","#邱宇鴻","#BNI長輝白金分會"]'::jsonb,
  '[{"type":"facebook","url":"#","icon":"facebook"},{"type":"line","url":"#","icon":"line"},{"type":"website","url":"#","icon":"website"}]'::jsonb,
  0,
  NOW(),
  NOW(),
  NULL,
  NULL,
  'active'
WHERE NOT EXISTS (
  SELECT 1 FROM public.members m WHERE m.name = '邱宇鴻'
);

UPDATE public.members
SET
  company = '宇雋會計師事務所',
  position = '董事長',
  title = '董事長 - 宇雋會計師事務所',
  industry = '會計師',
  category = '企業顧問',
  "shortIntro" = '會計稅務 找俊瑋 輕鬆省稅 最到位',
  "fullIntro" = '我是廖俊瑋，專注於會計師。
會計稅務 找俊瑋 輕鬆省稅 最到位

【理想引薦對象】
銀行企金、勞資顧問、移民公司、政府貸款或補助款 (文化部補助款申請或寫手)

【聯絡方式】
0916-246-263',
  photo = 'images/members/廖俊瑋.jpg',
  "photoPosition" = 'center',
  services = '["帳務處理","工商登記","財稅簽證 工作簽證/居留"]'::jsonb,
  hashtags = '["#會計師","#廖俊瑋","#BNI長輝白金分會"]'::jsonb,
  links = '[{"type":"facebook","url":"#","icon":"facebook"},{"type":"line","url":"#","icon":"line"},{"type":"website","url":"#","icon":"website"}]'::jsonb,
  "editCount" = COALESCE("editCount", 0),
  "updatedAt" = NOW(),
  phone = NULL,
  email = NULL,
  status = 'active'
WHERE name = '廖俊瑋';

INSERT INTO public.members (
  id, name, company, position, title, industry, category,
  "shortIntro", "fullIntro", photo, "photoPosition",
  services, hashtags, links, "editCount", "createdAt", "updatedAt", phone, email, status
)
SELECT
  100013,
  '廖俊瑋',
  '宇雋會計師事務所',
  '董事長',
  '董事長 - 宇雋會計師事務所',
  '會計師',
  '企業顧問',
  '會計稅務 找俊瑋 輕鬆省稅 最到位',
  '我是廖俊瑋，專注於會計師。
會計稅務 找俊瑋 輕鬆省稅 最到位

【理想引薦對象】
銀行企金、勞資顧問、移民公司、政府貸款或補助款 (文化部補助款申請或寫手)

【聯絡方式】
0916-246-263',
  'images/members/廖俊瑋.jpg',
  'center',
  '["帳務處理","工商登記","財稅簽證 工作簽證/居留"]'::jsonb,
  '["#會計師","#廖俊瑋","#BNI長輝白金分會"]'::jsonb,
  '[{"type":"facebook","url":"#","icon":"facebook"},{"type":"line","url":"#","icon":"line"},{"type":"website","url":"#","icon":"website"}]'::jsonb,
  0,
  NOW(),
  NOW(),
  NULL,
  NULL,
  'active'
WHERE NOT EXISTS (
  SELECT 1 FROM public.members m WHERE m.name = '廖俊瑋'
);

UPDATE public.members
SET
  company = '亞罕室內設計事務所',
  position = '董事長',
  title = '董事長 - 亞罕室內設計事務所',
  industry = '住宅設計',
  category = '工程裝修',
  "shortIntro" = '住宅設計 找育文 老屋豪宅 樣樣能',
  "fullIntro" = '我是陳育文，專注於住宅設計。
住宅設計 找育文 老屋豪宅 樣樣能

【理想引薦對象】
房仲、代銷、危老鑑定師

【聯絡方式】
0921-293-160 vcaido2009@gmail.com',
  photo = 'images/members/陳育文.jpg',
  "photoPosition" = 'center',
  services = '["室內設計","施工"]'::jsonb,
  hashtags = '["#住宅設計","#陳育文","#BNI長輝白金分會"]'::jsonb,
  links = '[{"type":"facebook","url":"#","icon":"facebook"},{"type":"line","url":"#","icon":"line"},{"type":"website","url":"#","icon":"website"}]'::jsonb,
  "editCount" = COALESCE("editCount", 0),
  "updatedAt" = NOW(),
  phone = NULL,
  email = NULL,
  status = 'active'
WHERE name = '陳育文';

INSERT INTO public.members (
  id, name, company, position, title, industry, category,
  "shortIntro", "fullIntro", photo, "photoPosition",
  services, hashtags, links, "editCount", "createdAt", "updatedAt", phone, email, status
)
SELECT
  100014,
  '陳育文',
  '亞罕室內設計事務所',
  '董事長',
  '董事長 - 亞罕室內設計事務所',
  '住宅設計',
  '工程裝修',
  '住宅設計 找育文 老屋豪宅 樣樣能',
  '我是陳育文，專注於住宅設計。
住宅設計 找育文 老屋豪宅 樣樣能

【理想引薦對象】
房仲、代銷、危老鑑定師

【聯絡方式】
0921-293-160 vcaido2009@gmail.com',
  'images/members/陳育文.jpg',
  'center',
  '["室內設計","施工"]'::jsonb,
  '["#住宅設計","#陳育文","#BNI長輝白金分會"]'::jsonb,
  '[{"type":"facebook","url":"#","icon":"facebook"},{"type":"line","url":"#","icon":"line"},{"type":"website","url":"#","icon":"website"}]'::jsonb,
  0,
  NOW(),
  NOW(),
  NULL,
  NULL,
  'active'
WHERE NOT EXISTS (
  SELECT 1 FROM public.members m WHERE m.name = '陳育文'
);

UPDATE public.members
SET
  company = '博拓國際智權集團',
  position = '董事長',
  title = '董事長 - 博拓國際智權集團',
  industry = '專利商標',
  category = '企業顧問',
  "shortIntro" = '專利商標 找彥慶 博拓智權 保護您',
  "fullIntro" = '我是李彥慶，專注於專利商標。
專利商標 找彥慶 博拓智權 保護您

【理想引薦對象】
想要保護創意商品服務不受侵害或是避免侵權的企業

【聯絡方式】
0963-014-517 Daniel@piip.pro',
  photo = 'images/members/李彥慶.jpg',
  "photoPosition" = 'center',
  services = '["全球專利商標申請與佈局","智權管理與價值化服務"]'::jsonb,
  hashtags = '["#專利商標","#李彥慶","#BNI長輝白金分會"]'::jsonb,
  links = '[{"type":"facebook","url":"#","icon":"facebook"},{"type":"line","url":"#","icon":"line"},{"type":"website","url":"#","icon":"website"}]'::jsonb,
  "editCount" = COALESCE("editCount", 0),
  "updatedAt" = NOW(),
  phone = NULL,
  email = NULL,
  status = 'active'
WHERE name = '李彥慶';

INSERT INTO public.members (
  id, name, company, position, title, industry, category,
  "shortIntro", "fullIntro", photo, "photoPosition",
  services, hashtags, links, "editCount", "createdAt", "updatedAt", phone, email, status
)
SELECT
  100015,
  '李彥慶',
  '博拓國際智權集團',
  '董事長',
  '董事長 - 博拓國際智權集團',
  '專利商標',
  '企業顧問',
  '專利商標 找彥慶 博拓智權 保護您',
  '我是李彥慶，專注於專利商標。
專利商標 找彥慶 博拓智權 保護您

【理想引薦對象】
想要保護創意商品服務不受侵害或是避免侵權的企業

【聯絡方式】
0963-014-517 Daniel@piip.pro',
  'images/members/李彥慶.jpg',
  'center',
  '["全球專利商標申請與佈局","智權管理與價值化服務"]'::jsonb,
  '["#專利商標","#李彥慶","#BNI長輝白金分會"]'::jsonb,
  '[{"type":"facebook","url":"#","icon":"facebook"},{"type":"line","url":"#","icon":"line"},{"type":"website","url":"#","icon":"website"}]'::jsonb,
  0,
  NOW(),
  NOW(),
  NULL,
  NULL,
  'active'
WHERE NOT EXISTS (
  SELECT 1 FROM public.members m WHERE m.name = '李彥慶'
);

UPDATE public.members
SET
  company = '柏飛營養諮詢中心',
  position = '董事長',
  title = '董事長 - 柏飛營養諮詢中心',
  industry = '運動營養師',
  category = '健康美麗',
  "shortIntro" = '運動營養 找承樺 讓你增肌減脂 抗老化',
  "fullIntro" = '我是楊承樺，專注於運動營養師。
運動營養 找承樺 讓你增肌減脂 抗老化

【理想引薦對象】
運動教練、品牌公關公司、健檢單位、檢驗所

【聯絡方式】
0912-738-335 evolution0105@gmail.com',
  photo = 'images/members/楊承樺.jpg',
  "photoPosition" = 'center',
  services = '["輔導減重/增肌/運動表現提升飲食計劃","演講教育"]'::jsonb,
  hashtags = '["#運動營養師","#楊承樺","#BNI長輝白金分會"]'::jsonb,
  links = '[{"type":"facebook","url":"#","icon":"facebook"},{"type":"line","url":"#","icon":"line"},{"type":"website","url":"#","icon":"website"}]'::jsonb,
  "editCount" = COALESCE("editCount", 0),
  "updatedAt" = NOW(),
  phone = NULL,
  email = NULL,
  status = 'active'
WHERE name = '楊承樺';

INSERT INTO public.members (
  id, name, company, position, title, industry, category,
  "shortIntro", "fullIntro", photo, "photoPosition",
  services, hashtags, links, "editCount", "createdAt", "updatedAt", phone, email, status
)
SELECT
  100016,
  '楊承樺',
  '柏飛營養諮詢中心',
  '董事長',
  '董事長 - 柏飛營養諮詢中心',
  '運動營養師',
  '健康美麗',
  '運動營養 找承樺 讓你增肌減脂 抗老化',
  '我是楊承樺，專注於運動營養師。
運動營養 找承樺 讓你增肌減脂 抗老化

【理想引薦對象】
運動教練、品牌公關公司、健檢單位、檢驗所

【聯絡方式】
0912-738-335 evolution0105@gmail.com',
  'images/members/楊承樺.jpg',
  'center',
  '["輔導減重/增肌/運動表現提升飲食計劃","演講教育"]'::jsonb,
  '["#運動營養師","#楊承樺","#BNI長輝白金分會"]'::jsonb,
  '[{"type":"facebook","url":"#","icon":"facebook"},{"type":"line","url":"#","icon":"line"},{"type":"website","url":"#","icon":"website"}]'::jsonb,
  0,
  NOW(),
  NOW(),
  NULL,
  NULL,
  'active'
WHERE NOT EXISTS (
  SELECT 1 FROM public.members m WHERE m.name = '楊承樺'
);

UPDATE public.members
SET
  company = '好健益運動有限公司',
  position = '董事長',
  title = '董事長 - 好健益運動有限公司',
  industry = '健身教練',
  category = '健康美麗',
  "shortIntro" = '紓壓運動 練肌力 專業教練 好健益',
  "fullIntro" = '我是廖涌辰，專注於健身教練。
紓壓運動 練肌力 專業教練 好健益

【理想引薦對象】
骨科/復健科醫師、營養師、物理治療師、高爾夫球教練

【聯絡方式】
0923-253-593 IG:goodideasport',
  photo = 'images/members/廖涌辰.jpg',
  "photoPosition" = 'center',
  services = '["客製化私人運動教練課程","居家到府運動教練"]'::jsonb,
  hashtags = '["#健身教練","#廖涌辰","#BNI長輝白金分會"]'::jsonb,
  links = '[{"type":"facebook","url":"#","icon":"facebook"},{"type":"line","url":"#","icon":"line"},{"type":"website","url":"#","icon":"website"}]'::jsonb,
  "editCount" = COALESCE("editCount", 0),
  "updatedAt" = NOW(),
  phone = NULL,
  email = NULL,
  status = 'active'
WHERE name = '廖涌辰';

INSERT INTO public.members (
  id, name, company, position, title, industry, category,
  "shortIntro", "fullIntro", photo, "photoPosition",
  services, hashtags, links, "editCount", "createdAt", "updatedAt", phone, email, status
)
SELECT
  100017,
  '廖涌辰',
  '好健益運動有限公司',
  '董事長',
  '董事長 - 好健益運動有限公司',
  '健身教練',
  '健康美麗',
  '紓壓運動 練肌力 專業教練 好健益',
  '我是廖涌辰，專注於健身教練。
紓壓運動 練肌力 專業教練 好健益

【理想引薦對象】
骨科/復健科醫師、營養師、物理治療師、高爾夫球教練

【聯絡方式】
0923-253-593 IG:goodideasport',
  'images/members/廖涌辰.jpg',
  'center',
  '["客製化私人運動教練課程","居家到府運動教練"]'::jsonb,
  '["#健身教練","#廖涌辰","#BNI長輝白金分會"]'::jsonb,
  '[{"type":"facebook","url":"#","icon":"facebook"},{"type":"line","url":"#","icon":"line"},{"type":"website","url":"#","icon":"website"}]'::jsonb,
  0,
  NOW(),
  NOW(),
  NULL,
  NULL,
  'active'
WHERE NOT EXISTS (
  SELECT 1 FROM public.members m WHERE m.name = '廖涌辰'
);

UPDATE public.members
SET
  company = '艾特鮮有限公司',
  position = '董事長',
  title = '董事長 - 艾特鮮有限公司',
  industry = '寵物營養',
  category = '健康美麗',
  "shortIntro" = '毛孩營養 艾特鮮 專業調理 我推薦',
  "fullIntro" = '我是詹謦鴻，專注於寵物營養。
毛孩營養 艾特鮮 專業調理 我推薦

【理想引薦對象】
寵物美容、寵物餐廳、寵物行為師

【聯絡方式】
0988-801651 juliachchan@gmail.com',
  photo = 'images/members/詹謦鴻.jpg',
  "photoPosition" = 'center',
  services = '["寵物營養諮詢","客製化寵物鮮食"]'::jsonb,
  hashtags = '["#寵物營養業","#詹謦鴻","#BNI長輝白金分會"]'::jsonb,
  links = '[{"type":"facebook","url":"#","icon":"facebook"},{"type":"line","url":"#","icon":"line"},{"type":"website","url":"#","icon":"website"}]'::jsonb,
  "editCount" = COALESCE("editCount", 0),
  "updatedAt" = NOW(),
  phone = NULL,
  email = NULL,
  status = 'active'
WHERE name = '詹謦鴻';

INSERT INTO public.members (
  id, name, company, position, title, industry, category,
  "shortIntro", "fullIntro", photo, "photoPosition",
  services, hashtags, links, "editCount", "createdAt", "updatedAt", phone, email, status
)
SELECT
  100018,
  '詹謦鴻',
  '艾特鮮有限公司',
  '董事長',
  '董事長 - 艾特鮮有限公司',
  '寵物營養',
  '健康美麗',
  '毛孩營養 艾特鮮 專業調理 我推薦',
  '我是詹謦鴻，專注於寵物營養。
毛孩營養 艾特鮮 專業調理 我推薦

【理想引薦對象】
寵物美容、寵物餐廳、寵物行為師

【聯絡方式】
0988-801651 juliachchan@gmail.com',
  'images/members/詹謦鴻.jpg',
  'center',
  '["寵物營養諮詢","客製化寵物鮮食"]'::jsonb,
  '["#寵物營養業","#詹謦鴻","#BNI長輝白金分會"]'::jsonb,
  '[{"type":"facebook","url":"#","icon":"facebook"},{"type":"line","url":"#","icon":"line"},{"type":"website","url":"#","icon":"website"}]'::jsonb,
  0,
  NOW(),
  NOW(),
  NULL,
  NULL,
  'active'
WHERE NOT EXISTS (
  SELECT 1 FROM public.members m WHERE m.name = '詹謦鴻'
);

UPDATE public.members
SET
  company = '健甲專家 H.N.P',
  position = '董事長',
  title = '董事長 - 健甲專家 H.N.P',
  industry = '手足指甲保健',
  category = '健康美麗',
  "shortIntro" = '指甲照護 找儀君 健甲專家 守護您',
  "fullIntro" = '我是洪儀君，專注於手足指甲保健。
指甲照護 找儀君 健甲專家 守護您

【理想引薦對象】
運動用品店、機能襪業者運動醫學醫師

【聯絡方式】
0983-401862 Line ID：hnp2016',
  photo = 'images/members/洪儀君.jpg',
  "photoPosition" = 'center',
  services = '["問題甲處理","運動員指甲照護","手足保養 (教育講座 課程服務)"]'::jsonb,
  hashtags = '["#手足指甲保健","#洪儀君","#BNI長輝白金分會"]'::jsonb,
  links = '[{"type":"facebook","url":"#","icon":"facebook"},{"type":"line","url":"#","icon":"line"},{"type":"website","url":"#","icon":"website"}]'::jsonb,
  "editCount" = COALESCE("editCount", 0),
  "updatedAt" = NOW(),
  phone = NULL,
  email = NULL,
  status = 'active'
WHERE name = '洪儀君';

INSERT INTO public.members (
  id, name, company, position, title, industry, category,
  "shortIntro", "fullIntro", photo, "photoPosition",
  services, hashtags, links, "editCount", "createdAt", "updatedAt", phone, email, status
)
SELECT
  100019,
  '洪儀君',
  '健甲專家 H.N.P',
  '董事長',
  '董事長 - 健甲專家 H.N.P',
  '手足指甲保健',
  '健康美麗',
  '指甲照護 找儀君 健甲專家 守護您',
  '我是洪儀君，專注於手足指甲保健。
指甲照護 找儀君 健甲專家 守護您

【理想引薦對象】
運動用品店、機能襪業者運動醫學醫師

【聯絡方式】
0983-401862 Line ID：hnp2016',
  'images/members/洪儀君.jpg',
  'center',
  '["問題甲處理","運動員指甲照護","手足保養 (教育講座 課程服務)"]'::jsonb,
  '["#手足指甲保健","#洪儀君","#BNI長輝白金分會"]'::jsonb,
  '[{"type":"facebook","url":"#","icon":"facebook"},{"type":"line","url":"#","icon":"line"},{"type":"website","url":"#","icon":"website"}]'::jsonb,
  0,
  NOW(),
  NOW(),
  NULL,
  NULL,
  'active'
WHERE NOT EXISTS (
  SELECT 1 FROM public.members m WHERE m.name = '洪儀君'
);

UPDATE public.members
SET
  company = '丞妍有限公司',
  position = '董事長',
  title = '董事長 - 丞妍有限公司',
  industry = '心靈諮詢',
  category = '健康美麗',
  "shortIntro" = '遠離負面 與是非 迎向光明 找蘇菲',
  "fullIntro" = '我是林庭瑀，專注於心靈諮詢。
遠離負面 與是非 迎向光明 找蘇菲

【理想引薦對象】
有情緒與關係困擾 重視員工福利的企業與個人

【聯絡方式】
0928-486-145 Email：sophibaby@gmail.com',
  photo = 'images/members/林庭瑀.jpg',
  "photoPosition" = 'center',
  services = '["個人流年運勢","關係與情緒輔導 企業決策溝通輔導","業務教育訓練"]'::jsonb,
  hashtags = '["#心靈諮詢","#林庭瑀","#BNI長輝白金分會"]'::jsonb,
  links = '[{"type":"facebook","url":"#","icon":"facebook"},{"type":"line","url":"#","icon":"line"},{"type":"website","url":"#","icon":"website"}]'::jsonb,
  "editCount" = COALESCE("editCount", 0),
  "updatedAt" = NOW(),
  phone = NULL,
  email = NULL,
  status = 'active'
WHERE name = '林庭瑀';

INSERT INTO public.members (
  id, name, company, position, title, industry, category,
  "shortIntro", "fullIntro", photo, "photoPosition",
  services, hashtags, links, "editCount", "createdAt", "updatedAt", phone, email, status
)
SELECT
  100020,
  '林庭瑀',
  '丞妍有限公司',
  '董事長',
  '董事長 - 丞妍有限公司',
  '心靈諮詢',
  '健康美麗',
  '遠離負面 與是非 迎向光明 找蘇菲',
  '我是林庭瑀，專注於心靈諮詢。
遠離負面 與是非 迎向光明 找蘇菲

【理想引薦對象】
有情緒與關係困擾 重視員工福利的企業與個人

【聯絡方式】
0928-486-145 Email：sophibaby@gmail.com',
  'images/members/林庭瑀.jpg',
  'center',
  '["個人流年運勢","關係與情緒輔導 企業決策溝通輔導","業務教育訓練"]'::jsonb,
  '["#心靈諮詢","#林庭瑀","#BNI長輝白金分會"]'::jsonb,
  '[{"type":"facebook","url":"#","icon":"facebook"},{"type":"line","url":"#","icon":"line"},{"type":"website","url":"#","icon":"website"}]'::jsonb,
  0,
  NOW(),
  NOW(),
  NULL,
  NULL,
  'active'
WHERE NOT EXISTS (
  SELECT 1 FROM public.members m WHERE m.name = '林庭瑀'
);

UPDATE public.members
SET
  company = '小島好日 LifeArt Studio',
  position = '董事長',
  title = '董事長 - 小島好日 LifeArt Studio',
  industry = '共享空間',
  category = '健康美麗',
  "shortIntro" = '活動空間 找雅菁 與你共創 好業績',
  "fullIntro" = '我是鄭雅菁，專注於共享空間。
活動空間 找雅菁 與你共創 好業績

【理想引薦對象】
有商攝場地需求的活動 / 廣告公司 有開課、辦講座活動需求的講師/廠商

【聯絡方式】
0970-862-180 islanday.life@gmail.com',
  photo = 'images/members/鄭雅菁.jpg',
  "photoPosition" = 'center',
  services = '["場地租借(商攝/講座/活動) 合作開課(烹飪/手作/身心/瑜珈)"]'::jsonb,
  hashtags = '["#共享空間","#鄭雅菁","#BNI長輝白金分會"]'::jsonb,
  links = '[{"type":"facebook","url":"#","icon":"facebook"},{"type":"line","url":"#","icon":"line"},{"type":"website","url":"#","icon":"website"}]'::jsonb,
  "editCount" = COALESCE("editCount", 0),
  "updatedAt" = NOW(),
  phone = NULL,
  email = NULL,
  status = 'active'
WHERE name = '鄭雅菁';

INSERT INTO public.members (
  id, name, company, position, title, industry, category,
  "shortIntro", "fullIntro", photo, "photoPosition",
  services, hashtags, links, "editCount", "createdAt", "updatedAt", phone, email, status
)
SELECT
  100021,
  '鄭雅菁',
  '小島好日 LifeArt Studio',
  '董事長',
  '董事長 - 小島好日 LifeArt Studio',
  '共享空間',
  '健康美麗',
  '活動空間 找雅菁 與你共創 好業績',
  '我是鄭雅菁，專注於共享空間。
活動空間 找雅菁 與你共創 好業績

【理想引薦對象】
有商攝場地需求的活動 / 廣告公司 有開課、辦講座活動需求的講師/廠商

【聯絡方式】
0970-862-180 islanday.life@gmail.com',
  'images/members/鄭雅菁.jpg',
  'center',
  '["場地租借(商攝/講座/活動) 合作開課(烹飪/手作/身心/瑜珈)"]'::jsonb,
  '["#共享空間","#鄭雅菁","#BNI長輝白金分會"]'::jsonb,
  '[{"type":"facebook","url":"#","icon":"facebook"},{"type":"line","url":"#","icon":"line"},{"type":"website","url":"#","icon":"website"}]'::jsonb,
  0,
  NOW(),
  NOW(),
  NULL,
  NULL,
  'active'
WHERE NOT EXISTS (
  SELECT 1 FROM public.members m WHERE m.name = '鄭雅菁'
);

UPDATE public.members
SET
  company = '夢想一號文化教育有限公司',
  position = '創辦人',
  title = '創辦人 - 夢想一號文化教育有限公司',
  industry = '魔術方塊教學',
  category = '休閒教育',
  "shortIntro" = '魔術方塊 找孟一 追求夢想 得第一',
  "fullIntro" = '我是李孟一，專注於魔術方塊教學。
魔術方塊 找孟一 追求夢想 得第一

【理想引薦對象】
想上課的家長、補習班、共學團 課後照顧中學、樂齡學習中心

【聯絡方式】
0963-237-969 Email：one@dreamcube.tw',
  photo = 'images/members/李孟一.jpg',
  "photoPosition" = 'center',
  services = '["魔術方塊教學","選手培訓"]'::jsonb,
  hashtags = '["#魔術方塊教學","#李孟一","#BNI長輝白金分會"]'::jsonb,
  links = '[{"type":"website","url":"https://dreamcube.tw","icon":"website"},{"type":"facebook","url":"https://www.facebook.com/DreamOneCubeAcademy","icon":"facebook"},{"type":"youtube","url":"https://www.youtube.com/@DreamOneCubeAcademy","icon":"youtube"}]'::jsonb,
  "editCount" = COALESCE("editCount", 0),
  "updatedAt" = NOW(),
  phone = NULL,
  email = NULL,
  status = 'active'
WHERE name = '李孟一';

INSERT INTO public.members (
  id, name, company, position, title, industry, category,
  "shortIntro", "fullIntro", photo, "photoPosition",
  services, hashtags, links, "editCount", "createdAt", "updatedAt", phone, email, status
)
SELECT
  100022,
  '李孟一',
  '夢想一號文化教育有限公司',
  '創辦人',
  '創辦人 - 夢想一號文化教育有限公司',
  '魔術方塊教學',
  '休閒教育',
  '魔術方塊 找孟一 追求夢想 得第一',
  '我是李孟一，專注於魔術方塊教學。
魔術方塊 找孟一 追求夢想 得第一

【理想引薦對象】
想上課的家長、補習班、共學團 課後照顧中學、樂齡學習中心

【聯絡方式】
0963-237-969 Email：one@dreamcube.tw',
  'images/members/李孟一.jpg',
  'center',
  '["魔術方塊教學","選手培訓"]'::jsonb,
  '["#魔術方塊教學","#李孟一","#BNI長輝白金分會"]'::jsonb,
  '[{"type":"website","url":"https://dreamcube.tw","icon":"website"},{"type":"facebook","url":"https://www.facebook.com/DreamOneCubeAcademy","icon":"facebook"},{"type":"youtube","url":"https://www.youtube.com/@DreamOneCubeAcademy","icon":"youtube"}]'::jsonb,
  0,
  NOW(),
  NOW(),
  NULL,
  NULL,
  'active'
WHERE NOT EXISTS (
  SELECT 1 FROM public.members m WHERE m.name = '李孟一'
);

UPDATE public.members
SET
  company = '讓創意飛媒體有限公司',
  position = '董事長',
  title = '董事長 - 讓創意飛媒體有限公司',
  industry = '自媒體經營',
  category = '企業行銷',
  "shortIntro" = '輕鬆經營 自媒體 創飛趴控 幫助您',
  "fullIntro" = '我是黃昱歆，專注於自媒體經營。
輕鬆經營 自媒體 創飛趴控 幫助您

【理想引薦對象】
設計師、攝影師、媒體資源

【聯絡方式】
0988-940-224 Email：jasperysh@gmail.com',
  photo = 'images/members/黃昱歆.jpg',
  "photoPosition" = 'center',
  services = '["自媒體經營"]'::jsonb,
  hashtags = '["#自媒體經營","#黃昱歆","#BNI長輝白金分會"]'::jsonb,
  links = '[{"type":"facebook","url":"#","icon":"facebook"},{"type":"line","url":"#","icon":"line"},{"type":"website","url":"#","icon":"website"}]'::jsonb,
  "editCount" = COALESCE("editCount", 0),
  "updatedAt" = NOW(),
  phone = NULL,
  email = NULL,
  status = 'active'
WHERE name = '黃昱歆';

INSERT INTO public.members (
  id, name, company, position, title, industry, category,
  "shortIntro", "fullIntro", photo, "photoPosition",
  services, hashtags, links, "editCount", "createdAt", "updatedAt", phone, email, status
)
SELECT
  100023,
  '黃昱歆',
  '讓創意飛媒體有限公司',
  '董事長',
  '董事長 - 讓創意飛媒體有限公司',
  '自媒體經營',
  '企業行銷',
  '輕鬆經營 自媒體 創飛趴控 幫助您',
  '我是黃昱歆，專注於自媒體經營。
輕鬆經營 自媒體 創飛趴控 幫助您

【理想引薦對象】
設計師、攝影師、媒體資源

【聯絡方式】
0988-940-224 Email：jasperysh@gmail.com',
  'images/members/黃昱歆.jpg',
  'center',
  '["自媒體經營"]'::jsonb,
  '["#自媒體經營","#黃昱歆","#BNI長輝白金分會"]'::jsonb,
  '[{"type":"facebook","url":"#","icon":"facebook"},{"type":"line","url":"#","icon":"line"},{"type":"website","url":"#","icon":"website"}]'::jsonb,
  0,
  NOW(),
  NOW(),
  NULL,
  NULL,
  'active'
WHERE NOT EXISTS (
  SELECT 1 FROM public.members m WHERE m.name = '黃昱歆'
);

UPDATE public.members
SET
  company = '茶事漫慢',
  position = '董事長',
  title = '董事長 - 茶事漫慢',
  industry = '茶葉盤商',
  category = '美食餐飲',
  "shortIntro" = '想要好茶 找蘇蘇 讓你品質價格 不會 輸',
  "fullIntro" = '我是蘇翊婷，專注於茶葉盤商。
想要好茶 找蘇蘇 讓你品質價格 不會 輸

【理想引薦對象】
飯店，餐飲，活動行銷公司 公司福委，有喝茶的人

【聯絡方式】
0955-699-750',
  photo = 'images/members/蘇翊婷.jpg',
  "photoPosition" = 'center',
  services = '["客製茶葉禮盒","專業高山茶","茶包","冷泡茶"]'::jsonb,
  hashtags = '["#茶葉盤商","#蘇翊婷","#BNI長輝白金分會"]'::jsonb,
  links = '[{"type":"facebook","url":"#","icon":"facebook"},{"type":"line","url":"#","icon":"line"},{"type":"website","url":"#","icon":"website"}]'::jsonb,
  "editCount" = COALESCE("editCount", 0),
  "updatedAt" = NOW(),
  phone = NULL,
  email = NULL,
  status = 'active'
WHERE name = '蘇翊婷';

INSERT INTO public.members (
  id, name, company, position, title, industry, category,
  "shortIntro", "fullIntro", photo, "photoPosition",
  services, hashtags, links, "editCount", "createdAt", "updatedAt", phone, email, status
)
SELECT
  100024,
  '蘇翊婷',
  '茶事漫慢',
  '董事長',
  '董事長 - 茶事漫慢',
  '茶葉盤商',
  '美食餐飲',
  '想要好茶 找蘇蘇 讓你品質價格 不會 輸',
  '我是蘇翊婷，專注於茶葉盤商。
想要好茶 找蘇蘇 讓你品質價格 不會 輸

【理想引薦對象】
飯店，餐飲，活動行銷公司 公司福委，有喝茶的人

【聯絡方式】
0955-699-750',
  'images/members/蘇翊婷.jpg',
  'center',
  '["客製茶葉禮盒","專業高山茶","茶包","冷泡茶"]'::jsonb,
  '["#茶葉盤商","#蘇翊婷","#BNI長輝白金分會"]'::jsonb,
  '[{"type":"facebook","url":"#","icon":"facebook"},{"type":"line","url":"#","icon":"line"},{"type":"website","url":"#","icon":"website"}]'::jsonb,
  0,
  NOW(),
  NOW(),
  NULL,
  NULL,
  'active'
WHERE NOT EXISTS (
  SELECT 1 FROM public.members m WHERE m.name = '蘇翊婷'
);

UPDATE public.members
SET
  company = '昇宏空調工程有限公司',
  position = '董事長',
  title = '董事長 - 昇宏空調工程有限公司',
  industry = '空調工程',
  category = '工程裝修',
  "shortIntro" = '居家空調 找智威 專業服務 揪甘心',
  "fullIntro" = '我是洪智威，專注於空調工程。
居家空調 找智威 專業服務 揪甘心

【理想引薦對象】
散客、建商冷氣代工、全國電子協力廠商

【聯絡方式】
0956-865-098',
  photo = 'images/members/洪智威.jpg',
  "photoPosition" = 'center',
  services = '["小冷","居家壁掛+吊隱"]'::jsonb,
  hashtags = '["#空調工程","#洪智威","#BNI長輝白金分會"]'::jsonb,
  links = '[{"type":"facebook","url":"#","icon":"facebook"},{"type":"line","url":"#","icon":"line"},{"type":"website","url":"#","icon":"website"}]'::jsonb,
  "editCount" = COALESCE("editCount", 0),
  "updatedAt" = NOW(),
  phone = NULL,
  email = NULL,
  status = 'active'
WHERE name = '洪智威';

INSERT INTO public.members (
  id, name, company, position, title, industry, category,
  "shortIntro", "fullIntro", photo, "photoPosition",
  services, hashtags, links, "editCount", "createdAt", "updatedAt", phone, email, status
)
SELECT
  100025,
  '洪智威',
  '昇宏空調工程有限公司',
  '董事長',
  '董事長 - 昇宏空調工程有限公司',
  '空調工程',
  '工程裝修',
  '居家空調 找智威 專業服務 揪甘心',
  '我是洪智威，專注於空調工程。
居家空調 找智威 專業服務 揪甘心

【理想引薦對象】
散客、建商冷氣代工、全國電子協力廠商

【聯絡方式】
0956-865-098',
  'images/members/洪智威.jpg',
  'center',
  '["小冷","居家壁掛+吊隱"]'::jsonb,
  '["#空調工程","#洪智威","#BNI長輝白金分會"]'::jsonb,
  '[{"type":"facebook","url":"#","icon":"facebook"},{"type":"line","url":"#","icon":"line"},{"type":"website","url":"#","icon":"website"}]'::jsonb,
  0,
  NOW(),
  NOW(),
  NULL,
  NULL,
  'active'
WHERE NOT EXISTS (
  SELECT 1 FROM public.members m WHERE m.name = '洪智威'
);

UPDATE public.members
SET
  company = '提摩設計工作室',
  position = '董事長',
  title = '董事長 - 提摩設計工作室',
  industry = '包裝設計',
  category = '工程裝修',
  "shortIntro" = '創意設計 找提摩 企業發展 躍蓬勃',
  "fullIntro" = '我是郭孝淵，專注於包裝設計。
創意設計 找提摩 企業發展 躍蓬勃

【理想引薦對象】
連鎖餐飲業者以及有禮盒包裝需求，想製作永續包裝的傳產業者

【聯絡方式】
0913-322-070',
  photo = 'images/members/郭孝淵.jpg',
  "photoPosition" = 'center',
  services = '["包裝結構開發","禮盒量產","綠色再生包裝設計"]'::jsonb,
  hashtags = '["#工藝設計","#郭孝淵","#BNI長輝白金分會"]'::jsonb,
  links = '[{"type":"facebook","url":"#","icon":"facebook"},{"type":"line","url":"#","icon":"line"},{"type":"website","url":"#","icon":"website"}]'::jsonb,
  "editCount" = COALESCE("editCount", 0),
  "updatedAt" = NOW(),
  phone = NULL,
  email = NULL,
  status = 'active'
WHERE name = '郭孝淵';

INSERT INTO public.members (
  id, name, company, position, title, industry, category,
  "shortIntro", "fullIntro", photo, "photoPosition",
  services, hashtags, links, "editCount", "createdAt", "updatedAt", phone, email, status
)
SELECT
  100026,
  '郭孝淵',
  '提摩設計工作室',
  '董事長',
  '董事長 - 提摩設計工作室',
  '包裝設計',
  '工程裝修',
  '創意設計 找提摩 企業發展 躍蓬勃',
  '我是郭孝淵，專注於包裝設計。
創意設計 找提摩 企業發展 躍蓬勃

【理想引薦對象】
連鎖餐飲業者以及有禮盒包裝需求，想製作永續包裝的傳產業者

【聯絡方式】
0913-322-070',
  'images/members/郭孝淵.jpg',
  'center',
  '["包裝結構開發","禮盒量產","綠色再生包裝設計"]'::jsonb,
  '["#工藝設計","#郭孝淵","#BNI長輝白金分會"]'::jsonb,
  '[{"type":"facebook","url":"#","icon":"facebook"},{"type":"line","url":"#","icon":"line"},{"type":"website","url":"#","icon":"website"}]'::jsonb,
  0,
  NOW(),
  NOW(),
  NULL,
  NULL,
  'active'
WHERE NOT EXISTS (
  SELECT 1 FROM public.members m WHERE m.name = '郭孝淵'
);

UPDATE public.members
SET
  company = '光隼資訊有限公司',
  position = '董事長',
  title = '董事長 - 光隼資訊有限公司',
  industry = 'LINE應用開發',
  category = '資訊系統',
  "shortIntro" = '讓LINE應用 好容易 輕量開發 找心怡',
  "fullIntro" = '我是江心怡，專注於LINE應用開發。
讓LINE應用 好容易 輕量開發 找心怡

【理想引薦對象】
醫美診所或美業相關工作者

【聯絡方式】
LINE ID: Lingchiang0831/0922930621',
  photo = 'images/members/江心怡.jpg',
  "photoPosition" = 'center',
  services = '["LINE@QA圖文chatbot","會員管理","定期連絡","電子名片","報名預約功能","購物商城","分潤機制"]'::jsonb,
  hashtags = '["#LINE 應用開發","#江心怡","#BNI長輝白金分會"]'::jsonb,
  links = '[{"type":"facebook","url":"#","icon":"facebook"},{"type":"line","url":"#","icon":"line"},{"type":"website","url":"#","icon":"website"}]'::jsonb,
  "editCount" = COALESCE("editCount", 0),
  "updatedAt" = NOW(),
  phone = NULL,
  email = NULL,
  status = 'active'
WHERE name = '江心怡';

INSERT INTO public.members (
  id, name, company, position, title, industry, category,
  "shortIntro", "fullIntro", photo, "photoPosition",
  services, hashtags, links, "editCount", "createdAt", "updatedAt", phone, email, status
)
SELECT
  100027,
  '江心怡',
  '光隼資訊有限公司',
  '董事長',
  '董事長 - 光隼資訊有限公司',
  'LINE應用開發',
  '資訊系統',
  '讓LINE應用 好容易 輕量開發 找心怡',
  '我是江心怡，專注於LINE應用開發。
讓LINE應用 好容易 輕量開發 找心怡

【理想引薦對象】
醫美診所或美業相關工作者

【聯絡方式】
LINE ID: Lingchiang0831/0922930621',
  'images/members/江心怡.jpg',
  'center',
  '["LINE@QA圖文chatbot","會員管理","定期連絡","電子名片","報名預約功能","購物商城","分潤機制"]'::jsonb,
  '["#LINE 應用開發","#江心怡","#BNI長輝白金分會"]'::jsonb,
  '[{"type":"facebook","url":"#","icon":"facebook"},{"type":"line","url":"#","icon":"line"},{"type":"website","url":"#","icon":"website"}]'::jsonb,
  0,
  NOW(),
  NOW(),
  NULL,
  NULL,
  'active'
WHERE NOT EXISTS (
  SELECT 1 FROM public.members m WHERE m.name = '江心怡'
);

UPDATE public.members
SET
  company = '驊程科技股份有限公司',
  position = '董事長',
  title = '董事長 - 驊程科技股份有限公司',
  industry = '資訊弱電系統整合',
  category = '資訊系統',
  "shortIntro" = '資訊弱電 大小事 交給秉辰 全搞定',
  "fullIntro" = '我是施秉辰，專注於資訊弱電系統整合。
資訊弱電 大小事 交給秉辰 全搞定

【理想引薦對象】
室內設計師、工程統包、各種工班

【聯絡方式】
0931-049-858 Line：addams.shih',
  photo = 'images/members/施秉辰.jpg',
  "photoPosition" = 'top',
  services = '["資訊設備軟硬體整合服務","弱電設備規劃建置"]'::jsonb,
  hashtags = '["#資訊弱電系統整合","#施秉辰","#BNI長輝白金分會"]'::jsonb,
  links = '[{"type":"facebook","url":"#","icon":"facebook"},{"type":"line","url":"#","icon":"line"},{"type":"website","url":"#","icon":"website"}]'::jsonb,
  "editCount" = COALESCE("editCount", 0),
  "updatedAt" = NOW(),
  phone = NULL,
  email = NULL,
  status = 'active'
WHERE name = '施秉辰';

INSERT INTO public.members (
  id, name, company, position, title, industry, category,
  "shortIntro", "fullIntro", photo, "photoPosition",
  services, hashtags, links, "editCount", "createdAt", "updatedAt", phone, email, status
)
SELECT
  100028,
  '施秉辰',
  '驊程科技股份有限公司',
  '董事長',
  '董事長 - 驊程科技股份有限公司',
  '資訊弱電系統整合',
  '資訊系統',
  '資訊弱電 大小事 交給秉辰 全搞定',
  '我是施秉辰，專注於資訊弱電系統整合。
資訊弱電 大小事 交給秉辰 全搞定

【理想引薦對象】
室內設計師、工程統包、各種工班

【聯絡方式】
0931-049-858 Line：addams.shih',
  'images/members/施秉辰.jpg',
  'top',
  '["資訊設備軟硬體整合服務","弱電設備規劃建置"]'::jsonb,
  '["#資訊弱電系統整合","#施秉辰","#BNI長輝白金分會"]'::jsonb,
  '[{"type":"facebook","url":"#","icon":"facebook"},{"type":"line","url":"#","icon":"line"},{"type":"website","url":"#","icon":"website"}]'::jsonb,
  0,
  NOW(),
  NOW(),
  NULL,
  NULL,
  'active'
WHERE NOT EXISTS (
  SELECT 1 FROM public.members m WHERE m.name = '施秉辰'
);

UPDATE public.members
SET
  company = '楓烽管理顧問有限公司',
  position = '董事長',
  title = '董事長 - 楓烽管理顧問有限公司',
  industry = '包租代管',
  category = '企業顧問',
  "shortIntro" = '包租代管 找亨利 讓你省時 又省力',
  "fullIntro" = '我是李秉誠，專注於包租代管。
包租代管 找亨利 讓你省時 又省力

【理想引薦對象】
房屋仲介、包租公、包租婆

【聯絡方式】
0901395543 Line：Ibc12345',
  photo = 'images/members/李秉誠.jpg',
  "photoPosition" = 'center',
  services = '["包租代管服務","專業房屋管理","房屋修繕 媒合屋主租客","催收租金","老屋改建增加收益"]'::jsonb,
  hashtags = '["#包租代管","#李秉誠","#BNI長輝白金分會"]'::jsonb,
  links = '[{"type":"facebook","url":"#","icon":"facebook"},{"type":"line","url":"#","icon":"line"},{"type":"website","url":"#","icon":"website"}]'::jsonb,
  "editCount" = COALESCE("editCount", 0),
  "updatedAt" = NOW(),
  phone = NULL,
  email = NULL,
  status = 'active'
WHERE name = '李秉誠';

INSERT INTO public.members (
  id, name, company, position, title, industry, category,
  "shortIntro", "fullIntro", photo, "photoPosition",
  services, hashtags, links, "editCount", "createdAt", "updatedAt", phone, email, status
)
SELECT
  100029,
  '李秉誠',
  '楓烽管理顧問有限公司',
  '董事長',
  '董事長 - 楓烽管理顧問有限公司',
  '包租代管',
  '企業顧問',
  '包租代管 找亨利 讓你省時 又省力',
  '我是李秉誠，專注於包租代管。
包租代管 找亨利 讓你省時 又省力

【理想引薦對象】
房屋仲介、包租公、包租婆

【聯絡方式】
0901395543 Line：Ibc12345',
  'images/members/李秉誠.jpg',
  'center',
  '["包租代管服務","專業房屋管理","房屋修繕 媒合屋主租客","催收租金","老屋改建增加收益"]'::jsonb,
  '["#包租代管","#李秉誠","#BNI長輝白金分會"]'::jsonb,
  '[{"type":"facebook","url":"#","icon":"facebook"},{"type":"line","url":"#","icon":"line"},{"type":"website","url":"#","icon":"website"}]'::jsonb,
  0,
  NOW(),
  NOW(),
  NULL,
  NULL,
  'active'
WHERE NOT EXISTS (
  SELECT 1 FROM public.members m WHERE m.name = '李秉誠'
);

UPDATE public.members
SET
  company = '錢自來綜合餐飲坊',
  position = '董事長',
  title = '董事長 - 錢自來綜合餐飲坊',
  industry = '原型食物料理師',
  category = '美食餐飲',
  "shortIntro" = '身體秘密 玄又玄 飲食協助 找采璇',
  "fullIntro" = '我是徐采璇，專注於原型食物料理師。
身體秘密 玄又玄 飲食協助 找采璇

【理想引薦對象】
火鍋店 咖啡廳 產婦 注重健康長輩

【聯絡方式】
0977152710',
  photo = 'images/members/徐采璇.jpg',
  "photoPosition" = 'center',
  services = '["三無原型食物餐廳","三無即食包","無糖","無奶","無麩質食物製作","身心靈需要好好被照顧的好食物"]'::jsonb,
  hashtags = '["#原型食物料理師","#徐采璇","#BNI長輝白金分會"]'::jsonb,
  links = '[{"type":"facebook","url":"#","icon":"facebook"},{"type":"line","url":"#","icon":"line"},{"type":"website","url":"#","icon":"website"}]'::jsonb,
  "editCount" = COALESCE("editCount", 0),
  "updatedAt" = NOW(),
  phone = NULL,
  email = NULL,
  status = 'active'
WHERE name = '徐采璇';

INSERT INTO public.members (
  id, name, company, position, title, industry, category,
  "shortIntro", "fullIntro", photo, "photoPosition",
  services, hashtags, links, "editCount", "createdAt", "updatedAt", phone, email, status
)
SELECT
  100030,
  '徐采璇',
  '錢自來綜合餐飲坊',
  '董事長',
  '董事長 - 錢自來綜合餐飲坊',
  '原型食物料理師',
  '美食餐飲',
  '身體秘密 玄又玄 飲食協助 找采璇',
  '我是徐采璇，專注於原型食物料理師。
身體秘密 玄又玄 飲食協助 找采璇

【理想引薦對象】
火鍋店 咖啡廳 產婦 注重健康長輩

【聯絡方式】
0977152710',
  'images/members/徐采璇.jpg',
  'center',
  '["三無原型食物餐廳","三無即食包","無糖","無奶","無麩質食物製作","身心靈需要好好被照顧的好食物"]'::jsonb,
  '["#原型食物料理師","#徐采璇","#BNI長輝白金分會"]'::jsonb,
  '[{"type":"facebook","url":"#","icon":"facebook"},{"type":"line","url":"#","icon":"line"},{"type":"website","url":"#","icon":"website"}]'::jsonb,
  0,
  NOW(),
  NOW(),
  NULL,
  NULL,
  'active'
WHERE NOT EXISTS (
  SELECT 1 FROM public.members m WHERE m.name = '徐采璇'
);

UPDATE public.members
SET
  company = '祈育教育實業坊',
  position = '董事長',
  title = '董事長 - 祈育教育實業坊',
  industry = 'ai學習整合',
  category = '休閒教育',
  "shortIntro" = 'A I 學習 找王祈 科技賦能 正黃旗',
  "fullIntro" = '我是王祈，專注於AI學習整合。
A I 學習 找王祈 科技賦能 正黃旗

【理想引薦對象】
尋求職涯成長的專業人士、各級學生 (國中至大學)、企業AI內訓

【聯絡方式】
0956522350',
  photo = 'images/members/王祈.jpg',
  "photoPosition" = 'center',
  services = '["教育賦能","AI應用學習"]'::jsonb,
  hashtags = '["#AI學習整合","#王祈","#BNI長輝白金分會"]'::jsonb,
  links = '[{"type":"instagram","url":"https://www.instagram.com/samuel_wang0731","icon":"instagram"},{"type":"website","url":"mailto:samuel900731@gmail.com","icon":"website"}]'::jsonb,
  "editCount" = COALESCE("editCount", 0),
  "updatedAt" = NOW(),
  phone = NULL,
  email = NULL,
  status = 'active'
WHERE name = '王祈';

INSERT INTO public.members (
  id, name, company, position, title, industry, category,
  "shortIntro", "fullIntro", photo, "photoPosition",
  services, hashtags, links, "editCount", "createdAt", "updatedAt", phone, email, status
)
SELECT
  100031,
  '王祈',
  '祈育教育實業坊',
  '董事長',
  '董事長 - 祈育教育實業坊',
  'ai學習整合',
  '休閒教育',
  'A I 學習 找王祈 科技賦能 正黃旗',
  '我是王祈，專注於AI學習整合。
A I 學習 找王祈 科技賦能 正黃旗

【理想引薦對象】
尋求職涯成長的專業人士、各級學生 (國中至大學)、企業AI內訓

【聯絡方式】
0956522350',
  'images/members/王祈.jpg',
  'center',
  '["教育賦能","AI應用學習"]'::jsonb,
  '["#AI學習整合","#王祈","#BNI長輝白金分會"]'::jsonb,
  '[{"type":"instagram","url":"https://www.instagram.com/samuel_wang0731","icon":"instagram"},{"type":"website","url":"mailto:samuel900731@gmail.com","icon":"website"}]'::jsonb,
  0,
  NOW(),
  NOW(),
  NULL,
  NULL,
  'active'
WHERE NOT EXISTS (
  SELECT 1 FROM public.members m WHERE m.name = '王祈'
);

UPDATE public.members
SET
  company = '大象山食品有限公司',
  position = '董事長',
  title = '董事長 - 大象山食品有限公司',
  industry = '堅果烘焙業',
  category = '美食餐飲',
  "shortIntro" = '身體健康 吃堅果 烘培堅果 大象山',
  "fullIntro" = '我是賴永相，專注於堅果烘焙業。
身體健康 吃堅果 烘培堅果 大象山

【理想引薦對象】
團購直播主 高爾夫球隊

【聯絡方式】
0935553726 elephant552726@yahoo.com.tw',
  photo = 'images/members/賴永相.jpg',
  "photoPosition" = 'center',
  services = '["自營堅果品牌-大象山 堅果禮盒 OEM堅果"]'::jsonb,
  hashtags = '["#堅果烘焙業","#賴永相","#BNI長輝白金分會"]'::jsonb,
  links = '[{"type":"facebook","url":"#","icon":"facebook"},{"type":"line","url":"#","icon":"line"},{"type":"website","url":"#","icon":"website"}]'::jsonb,
  "editCount" = COALESCE("editCount", 0),
  "updatedAt" = NOW(),
  phone = NULL,
  email = NULL,
  status = 'active'
WHERE name = '賴永相';

INSERT INTO public.members (
  id, name, company, position, title, industry, category,
  "shortIntro", "fullIntro", photo, "photoPosition",
  services, hashtags, links, "editCount", "createdAt", "updatedAt", phone, email, status
)
SELECT
  100032,
  '賴永相',
  '大象山食品有限公司',
  '董事長',
  '董事長 - 大象山食品有限公司',
  '堅果烘焙業',
  '美食餐飲',
  '身體健康 吃堅果 烘培堅果 大象山',
  '我是賴永相，專注於堅果烘焙業。
身體健康 吃堅果 烘培堅果 大象山

【理想引薦對象】
團購直播主 高爾夫球隊

【聯絡方式】
0935553726 elephant552726@yahoo.com.tw',
  'images/members/賴永相.jpg',
  'center',
  '["自營堅果品牌-大象山 堅果禮盒 OEM堅果"]'::jsonb,
  '["#堅果烘焙業","#賴永相","#BNI長輝白金分會"]'::jsonb,
  '[{"type":"facebook","url":"#","icon":"facebook"},{"type":"line","url":"#","icon":"line"},{"type":"website","url":"#","icon":"website"}]'::jsonb,
  0,
  NOW(),
  NOW(),
  NULL,
  NULL,
  'active'
WHERE NOT EXISTS (
  SELECT 1 FROM public.members m WHERE m.name = '賴永相'
);

UPDATE public.members
SET
  company = '廣謙科技有限公司',
  position = '董事長',
  title = '董事長 - 廣謙科技有限公司',
  industry = '電子商品設計',
  category = '企業顧問',
  "shortIntro" = '電子設計 找子超 熱賣狂銷 數紙鈔',
  "fullIntro" = '我是蘇子超，專注於電子商品設計。
電子設計 找子超 熱賣狂銷 數紙鈔

【理想引薦對象】
工業設計、專利師、新創投資

【聯絡方式】
0926-190980',
  photo = 'images/members/蘇子超.jpg',
  "photoPosition" = 'center',
  services = '["電子商品設計","電子商品生產及製作"]'::jsonb,
  hashtags = '["#電子商品設計","#蘇子超","#BNI長輝白金分會"]'::jsonb,
  links = '[{"type":"facebook","url":"#","icon":"facebook"},{"type":"line","url":"#","icon":"line"},{"type":"website","url":"#","icon":"website"}]'::jsonb,
  "editCount" = COALESCE("editCount", 0),
  "updatedAt" = NOW(),
  phone = NULL,
  email = NULL,
  status = 'active'
WHERE name = '蘇子超';

INSERT INTO public.members (
  id, name, company, position, title, industry, category,
  "shortIntro", "fullIntro", photo, "photoPosition",
  services, hashtags, links, "editCount", "createdAt", "updatedAt", phone, email, status
)
SELECT
  100033,
  '蘇子超',
  '廣謙科技有限公司',
  '董事長',
  '董事長 - 廣謙科技有限公司',
  '電子商品設計',
  '企業顧問',
  '電子設計 找子超 熱賣狂銷 數紙鈔',
  '我是蘇子超，專注於電子商品設計。
電子設計 找子超 熱賣狂銷 數紙鈔

【理想引薦對象】
工業設計、專利師、新創投資

【聯絡方式】
0926-190980',
  'images/members/蘇子超.jpg',
  'center',
  '["電子商品設計","電子商品生產及製作"]'::jsonb,
  '["#電子商品設計","#蘇子超","#BNI長輝白金分會"]'::jsonb,
  '[{"type":"facebook","url":"#","icon":"facebook"},{"type":"line","url":"#","icon":"line"},{"type":"website","url":"#","icon":"website"}]'::jsonb,
  0,
  NOW(),
  NOW(),
  NULL,
  NULL,
  'active'
WHERE NOT EXISTS (
  SELECT 1 FROM public.members m WHERE m.name = '蘇子超'
);

UPDATE public.members
SET
  company = '艾思特創新設計有限公司',
  position = '董事長',
  title = '董事長 - 艾思特創新設計有限公司',
  industry = '網站創新開發',
  category = '資訊系統',
  "shortIntro" = '網站APP 找維恩 數位創新 賺大錢',
  "fullIntro" = '我是李維恩，專注於網站創新開發。
網站APP 找維恩 數位創新 賺大錢

【理想引薦對象】
企業顧問、資訊顧問、品牌設計、網路行銷

【聯絡方式】
0933-721-702',
  photo = 'images/members/李維恩.jpg',
  "photoPosition" = 'center',
  services = '["專注於：網站 / APP / 系統 / AI"]'::jsonb,
  hashtags = '["#APP 設計開發","#李維恩","#BNI長輝白金分會"]'::jsonb,
  links = '[{"type":"facebook","url":"#","icon":"facebook"},{"type":"line","url":"#","icon":"line"},{"type":"website","url":"#","icon":"website"}]'::jsonb,
  "editCount" = COALESCE("editCount", 0),
  "updatedAt" = NOW(),
  phone = NULL,
  email = NULL,
  status = 'active'
WHERE name = '李維恩';

INSERT INTO public.members (
  id, name, company, position, title, industry, category,
  "shortIntro", "fullIntro", photo, "photoPosition",
  services, hashtags, links, "editCount", "createdAt", "updatedAt", phone, email, status
)
SELECT
  100034,
  '李維恩',
  '艾思特創新設計有限公司',
  '董事長',
  '董事長 - 艾思特創新設計有限公司',
  '網站創新開發',
  '資訊系統',
  '網站APP 找維恩 數位創新 賺大錢',
  '我是李維恩，專注於網站創新開發。
網站APP 找維恩 數位創新 賺大錢

【理想引薦對象】
企業顧問、資訊顧問、品牌設計、網路行銷

【聯絡方式】
0933-721-702',
  'images/members/李維恩.jpg',
  'center',
  '["專注於：網站 / APP / 系統 / AI"]'::jsonb,
  '["#APP 設計開發","#李維恩","#BNI長輝白金分會"]'::jsonb,
  '[{"type":"facebook","url":"#","icon":"facebook"},{"type":"line","url":"#","icon":"line"},{"type":"website","url":"#","icon":"website"}]'::jsonb,
  0,
  NOW(),
  NOW(),
  NULL,
  NULL,
  'active'
WHERE NOT EXISTS (
  SELECT 1 FROM public.members m WHERE m.name = '李維恩'
);

UPDATE public.members
SET
  company = '拉蒂設計LuxurWind_個人工作室',
  position = '董事長',
  title = '董事長 - 拉蒂設計LuxurWind_個人工作室',
  industry = '插畫設計',
  category = '企業行銷',
  "shortIntro" = '蒂造形象新花浪 插畫設計找貞妮',
  "fullIntro" = '我是吳貞妮，專注於插畫設計。
蒂造形象新花浪 插畫設計找貞妮

【理想引薦對象】
品牌行銷、社群網紅、遊戲公司

【聯絡方式】
0909-016-990',
  photo = 'images/members/吳貞妮.jpg',
  "photoPosition" = 'center',
  services = '["客製化貼圖","插畫吉祥物"]'::jsonb,
  hashtags = '["#貼圖設計","#吳貞妮","#BNI長輝白金分會"]'::jsonb,
  links = '[{"type":"facebook","url":"#","icon":"facebook"},{"type":"line","url":"#","icon":"line"},{"type":"website","url":"#","icon":"website"}]'::jsonb,
  "editCount" = COALESCE("editCount", 0),
  "updatedAt" = NOW(),
  phone = NULL,
  email = NULL,
  status = 'active'
WHERE name = '吳貞妮';

INSERT INTO public.members (
  id, name, company, position, title, industry, category,
  "shortIntro", "fullIntro", photo, "photoPosition",
  services, hashtags, links, "editCount", "createdAt", "updatedAt", phone, email, status
)
SELECT
  100035,
  '吳貞妮',
  '拉蒂設計LuxurWind_個人工作室',
  '董事長',
  '董事長 - 拉蒂設計LuxurWind_個人工作室',
  '插畫設計',
  '企業行銷',
  '蒂造形象新花浪 插畫設計找貞妮',
  '我是吳貞妮，專注於插畫設計。
蒂造形象新花浪 插畫設計找貞妮

【理想引薦對象】
品牌行銷、社群網紅、遊戲公司

【聯絡方式】
0909-016-990',
  'images/members/吳貞妮.jpg',
  'center',
  '["客製化貼圖","插畫吉祥物"]'::jsonb,
  '["#貼圖設計","#吳貞妮","#BNI長輝白金分會"]'::jsonb,
  '[{"type":"facebook","url":"#","icon":"facebook"},{"type":"line","url":"#","icon":"line"},{"type":"website","url":"#","icon":"website"}]'::jsonb,
  0,
  NOW(),
  NOW(),
  NULL,
  NULL,
  'active'
WHERE NOT EXISTS (
  SELECT 1 FROM public.members m WHERE m.name = '吳貞妮'
);

UPDATE public.members
SET
  company = '峰翔工程行',
  position = '董事長',
  title = '董事長 - 峰翔工程行',
  industry = '泥作工程',
  category = '工程裝修',
  "shortIntro" = '泥作工程 找宇峰 品質工法 樣樣通',
  "fullIntro" = '我是吳宇峰，專注於泥作工程。
泥作工程 找宇峰 品質工法 樣樣通

【理想引薦對象】
統包工程、室內設計師、營造廠

【聯絡方式】
0935-111-222',
  photo = 'images/members/吳宇峰.jpg',
  "photoPosition" = 'center',
  services = '["泥作工程承包","防水工程","磁磚鋪設"]'::jsonb,
  hashtags = '["#泥作工程","#吳宇峰","#BNI長輝白金分會"]'::jsonb,
  links = '[{"type":"facebook","url":"#","icon":"facebook"},{"type":"line","url":"#","icon":"line"},{"type":"website","url":"#","icon":"website"}]'::jsonb,
  "editCount" = COALESCE("editCount", 0),
  "updatedAt" = NOW(),
  phone = NULL,
  email = NULL,
  status = 'active'
WHERE name = '吳宇峰';

INSERT INTO public.members (
  id, name, company, position, title, industry, category,
  "shortIntro", "fullIntro", photo, "photoPosition",
  services, hashtags, links, "editCount", "createdAt", "updatedAt", phone, email, status
)
SELECT
  100036,
  '吳宇峰',
  '峰翔工程行',
  '董事長',
  '董事長 - 峰翔工程行',
  '泥作工程',
  '工程裝修',
  '泥作工程 找宇峰 品質工法 樣樣通',
  '我是吳宇峰，專注於泥作工程。
泥作工程 找宇峰 品質工法 樣樣通

【理想引薦對象】
統包工程、室內設計師、營造廠

【聯絡方式】
0935-111-222',
  'images/members/吳宇峰.jpg',
  'center',
  '["泥作工程承包","防水工程","磁磚鋪設"]'::jsonb,
  '["#泥作工程","#吳宇峰","#BNI長輝白金分會"]'::jsonb,
  '[{"type":"facebook","url":"#","icon":"facebook"},{"type":"line","url":"#","icon":"line"},{"type":"website","url":"#","icon":"website"}]'::jsonb,
  0,
  NOW(),
  NOW(),
  NULL,
  NULL,
  'active'
WHERE NOT EXISTS (
  SELECT 1 FROM public.members m WHERE m.name = '吳宇峰'
);

UPDATE public.members
SET
  company = '樂橙創作設計',
  position = '董事長',
  title = '董事長 - 樂橙創作設計',
  industry = '策展規劃設計',
  category = '工程裝修',
  "shortIntro" = '策展規劃 大小事 交給阿德 無難事',
  "fullIntro" = '我是劉懿德，專注於策展規劃設計。
策展規劃 大小事 交給阿德 無難事

【理想引薦對象】
公司工廠展示空間/ESG展示

【聯絡方式】
0952-983-157 Email：claire@allrange.tw',
  photo = 'images/members/劉懿德.jpg',
  "photoPosition" = 'center',
  services = '["公司或傳產工廠轉型展示規劃","短中長期活動展場設計 從設計提案3D到發包施工","一條龍的服務。"]'::jsonb,
  hashtags = '["#策展規劃設計","#劉懿德","#BNI長輝白金分會"]'::jsonb,
  links = '[{"type":"facebook","url":"#","icon":"facebook"},{"type":"line","url":"#","icon":"line"},{"type":"website","url":"#","icon":"website"}]'::jsonb,
  "editCount" = COALESCE("editCount", 0),
  "updatedAt" = NOW(),
  phone = NULL,
  email = NULL,
  status = 'active'
WHERE name = '劉懿德';

INSERT INTO public.members (
  id, name, company, position, title, industry, category,
  "shortIntro", "fullIntro", photo, "photoPosition",
  services, hashtags, links, "editCount", "createdAt", "updatedAt", phone, email, status
)
SELECT
  100037,
  '劉懿德',
  '樂橙創作設計',
  '董事長',
  '董事長 - 樂橙創作設計',
  '策展規劃設計',
  '工程裝修',
  '策展規劃 大小事 交給阿德 無難事',
  '我是劉懿德，專注於策展規劃設計。
策展規劃 大小事 交給阿德 無難事

【理想引薦對象】
公司工廠展示空間/ESG展示

【聯絡方式】
0952-983-157 Email：claire@allrange.tw',
  'images/members/劉懿德.jpg',
  'center',
  '["公司或傳產工廠轉型展示規劃","短中長期活動展場設計 從設計提案3D到發包施工","一條龍的服務。"]'::jsonb,
  '["#策展規劃設計","#劉懿德","#BNI長輝白金分會"]'::jsonb,
  '[{"type":"facebook","url":"#","icon":"facebook"},{"type":"line","url":"#","icon":"line"},{"type":"website","url":"#","icon":"website"}]'::jsonb,
  0,
  NOW(),
  NOW(),
  NULL,
  NULL,
  'active'
WHERE NOT EXISTS (
  SELECT 1 FROM public.members m WHERE m.name = '劉懿德'
);

UPDATE public.members
SET
  company = '鉅成工業股份有限公司',
  position = '董事長',
  title = '董事長 - 鉅成工業股份有限公司',
  industry = '抗病毒地板',
  category = '工程裝修',
  "shortIntro" = '地板需求 找凱地 商空住家 皆適宜',
  "fullIntro" = '我是游凱地，專注於抗病毒地板。
地板需求 找凱地 商空住家 皆適宜

【理想引薦對象】
建商、工程承包商、設計師、 電商平台

【聯絡方式】
0988-568-819 Email：ktyu@kingtile.com.tw',
  photo = 'images/members/游凱地.jpg',
  "photoPosition" = 'center',
  services = '["PVC地板製造","抗病毒SPC地板","免膠兒童地板 抗病毒防疫建材","塗布技術"]'::jsonb,
  hashtags = '["#抗病毒地板","#游凱地","#BNI長輝白金分會"]'::jsonb,
  links = '[{"type":"facebook","url":"#","icon":"facebook"},{"type":"line","url":"#","icon":"line"},{"type":"website","url":"#","icon":"website"}]'::jsonb,
  "editCount" = COALESCE("editCount", 0),
  "updatedAt" = NOW(),
  phone = NULL,
  email = NULL,
  status = 'active'
WHERE name = '游凱地';

INSERT INTO public.members (
  id, name, company, position, title, industry, category,
  "shortIntro", "fullIntro", photo, "photoPosition",
  services, hashtags, links, "editCount", "createdAt", "updatedAt", phone, email, status
)
SELECT
  100038,
  '游凱地',
  '鉅成工業股份有限公司',
  '董事長',
  '董事長 - 鉅成工業股份有限公司',
  '抗病毒地板',
  '工程裝修',
  '地板需求 找凱地 商空住家 皆適宜',
  '我是游凱地，專注於抗病毒地板。
地板需求 找凱地 商空住家 皆適宜

【理想引薦對象】
建商、工程承包商、設計師、 電商平台

【聯絡方式】
0988-568-819 Email：ktyu@kingtile.com.tw',
  'images/members/游凱地.jpg',
  'center',
  '["PVC地板製造","抗病毒SPC地板","免膠兒童地板 抗病毒防疫建材","塗布技術"]'::jsonb,
  '["#抗病毒地板","#游凱地","#BNI長輝白金分會"]'::jsonb,
  '[{"type":"facebook","url":"#","icon":"facebook"},{"type":"line","url":"#","icon":"line"},{"type":"website","url":"#","icon":"website"}]'::jsonb,
  0,
  NOW(),
  NOW(),
  NULL,
  NULL,
  'active'
WHERE NOT EXISTS (
  SELECT 1 FROM public.members m WHERE m.name = '游凱地'
);

UPDATE public.members
SET
  company = '分子藝術有限公司',
  position = '董事長',
  title = '董事長 - 分子藝術有限公司',
  industry = '創意策劃',
  category = '企業行銷',
  "shortIntro" = '創意策劃 找多多 出神入化 Magical',
  "fullIntro" = '我是邱翰城，專注於創意策劃。
創意策劃 找多多 出神入化 Magical

【理想引薦對象】
策展人、品牌公關、 餐飲旅宿品牌

【聯絡方式】
0978-110-365 Email：kk955172@gmail.com Line：kk955172',
  photo = 'images/members/邱翰城.jpg',
  "photoPosition" = 'center',
  services = '["品牌故事企劃","互動故事體驗","跨領域藝術整合企劃"]'::jsonb,
  hashtags = '["#創意策劃","#邱翰城","#BNI長輝白金分會"]'::jsonb,
  links = '[{"type":"facebook","url":"#","icon":"facebook"},{"type":"line","url":"#","icon":"line"},{"type":"website","url":"#","icon":"website"}]'::jsonb,
  "editCount" = COALESCE("editCount", 0),
  "updatedAt" = NOW(),
  phone = NULL,
  email = NULL,
  status = 'active'
WHERE name = '邱翰城';

INSERT INTO public.members (
  id, name, company, position, title, industry, category,
  "shortIntro", "fullIntro", photo, "photoPosition",
  services, hashtags, links, "editCount", "createdAt", "updatedAt", phone, email, status
)
SELECT
  100039,
  '邱翰城',
  '分子藝術有限公司',
  '董事長',
  '董事長 - 分子藝術有限公司',
  '創意策劃',
  '企業行銷',
  '創意策劃 找多多 出神入化 Magical',
  '我是邱翰城，專注於創意策劃。
創意策劃 找多多 出神入化 Magical

【理想引薦對象】
策展人、品牌公關、 餐飲旅宿品牌

【聯絡方式】
0978-110-365 Email：kk955172@gmail.com Line：kk955172',
  'images/members/邱翰城.jpg',
  'center',
  '["品牌故事企劃","互動故事體驗","跨領域藝術整合企劃"]'::jsonb,
  '["#創意策劃","#邱翰城","#BNI長輝白金分會"]'::jsonb,
  '[{"type":"facebook","url":"#","icon":"facebook"},{"type":"line","url":"#","icon":"line"},{"type":"website","url":"#","icon":"website"}]'::jsonb,
  0,
  NOW(),
  NOW(),
  NULL,
  NULL,
  'active'
WHERE NOT EXISTS (
  SELECT 1 FROM public.members m WHERE m.name = '邱翰城'
);

UPDATE public.members
SET
  company = '欣楠科技股份有限公司',
  position = '董事長',
  title = '董事長 - 欣楠科技股份有限公司',
  industry = '機電設計',
  category = '健康美麗',
  "shortIntro" = '機電設計 找明翰 智能創新 沒煩惱',
  "fullIntro" = '我是楊明翰，專注於機電設計。
機電設計 找明翰 智能創新 沒煩惱

【理想引薦對象】
統包工程、室內裝修、室內設計師

【聯絡方式】
0978059263 mail：sunshineminghan@gmail.com',
  photo = 'images/members/楊明翰.jpg',
  "photoPosition" = 'center',
  services = '["機電規劃","設計","施工","監工","完工","測試","後續使用中的開機操作","維護保養。"]'::jsonb,
  hashtags = '["#產物保險規劃","#楊明翰","#BNI長輝白金分會"]'::jsonb,
  links = '[{"type":"facebook","url":"#","icon":"facebook"},{"type":"line","url":"#","icon":"line"},{"type":"website","url":"#","icon":"website"}]'::jsonb,
  "editCount" = COALESCE("editCount", 0),
  "updatedAt" = NOW(),
  phone = NULL,
  email = NULL,
  status = 'active'
WHERE name = '楊明翰';

INSERT INTO public.members (
  id, name, company, position, title, industry, category,
  "shortIntro", "fullIntro", photo, "photoPosition",
  services, hashtags, links, "editCount", "createdAt", "updatedAt", phone, email, status
)
SELECT
  100040,
  '楊明翰',
  '欣楠科技股份有限公司',
  '董事長',
  '董事長 - 欣楠科技股份有限公司',
  '機電設計',
  '健康美麗',
  '機電設計 找明翰 智能創新 沒煩惱',
  '我是楊明翰，專注於機電設計。
機電設計 找明翰 智能創新 沒煩惱

【理想引薦對象】
統包工程、室內裝修、室內設計師

【聯絡方式】
0978059263 mail：sunshineminghan@gmail.com',
  'images/members/楊明翰.jpg',
  'center',
  '["機電規劃","設計","施工","監工","完工","測試","後續使用中的開機操作","維護保養。"]'::jsonb,
  '["#產物保險規劃","#楊明翰","#BNI長輝白金分會"]'::jsonb,
  '[{"type":"facebook","url":"#","icon":"facebook"},{"type":"line","url":"#","icon":"line"},{"type":"website","url":"#","icon":"website"}]'::jsonb,
  0,
  NOW(),
  NOW(),
  NULL,
  NULL,
  'active'
WHERE NOT EXISTS (
  SELECT 1 FROM public.members m WHERE m.name = '楊明翰'
);

UPDATE public.members
SET
  company = '禾望品牌股份有限公司',
  position = '董事長',
  title = '董事長 - 禾望品牌股份有限公司',
  industry = '餐飲行銷整合',
  category = '企業行銷',
  "shortIntro" = '餐飲創業 找禾望 一起豐收 沒煩惱',
  "fullIntro" = '我是顧心芝，專注於餐飲行銷整合。
餐飲創業 找禾望 一起豐收 沒煩惱

【理想引薦對象】
想要在餐飲市場創業，或者已經創業需要重新規劃

【聯絡方式】
0921-856-976 Email：design@havest4hope.com',
  photo = 'images/members/顧心芝.jpg',
  "photoPosition" = 'center',
  services = '["服務項目：餐飲行銷整合規劃 開店大小事","都是我們的事 餐飲品牌量身定做","店面規劃","餐飲研發","人事訓練","從零開始","搞定你的餐飲創業大小事"]'::jsonb,
  hashtags = '["#餐飲行銷整合","#顧心芝","#BNI長輝白金分會"]'::jsonb,
  links = '[{"type":"facebook","url":"#","icon":"facebook"},{"type":"line","url":"#","icon":"line"},{"type":"website","url":"#","icon":"website"}]'::jsonb,
  "editCount" = COALESCE("editCount", 0),
  "updatedAt" = NOW(),
  phone = NULL,
  email = NULL,
  status = 'active'
WHERE name = '顧心芝';

INSERT INTO public.members (
  id, name, company, position, title, industry, category,
  "shortIntro", "fullIntro", photo, "photoPosition",
  services, hashtags, links, "editCount", "createdAt", "updatedAt", phone, email, status
)
SELECT
  100041,
  '顧心芝',
  '禾望品牌股份有限公司',
  '董事長',
  '董事長 - 禾望品牌股份有限公司',
  '餐飲行銷整合',
  '企業行銷',
  '餐飲創業 找禾望 一起豐收 沒煩惱',
  '我是顧心芝，專注於餐飲行銷整合。
餐飲創業 找禾望 一起豐收 沒煩惱

【理想引薦對象】
想要在餐飲市場創業，或者已經創業需要重新規劃

【聯絡方式】
0921-856-976 Email：design@havest4hope.com',
  'images/members/顧心芝.jpg',
  'center',
  '["服務項目：餐飲行銷整合規劃 開店大小事","都是我們的事 餐飲品牌量身定做","店面規劃","餐飲研發","人事訓練","從零開始","搞定你的餐飲創業大小事"]'::jsonb,
  '["#餐飲行銷整合","#顧心芝","#BNI長輝白金分會"]'::jsonb,
  '[{"type":"facebook","url":"#","icon":"facebook"},{"type":"line","url":"#","icon":"line"},{"type":"website","url":"#","icon":"website"}]'::jsonb,
  0,
  NOW(),
  NOW(),
  NULL,
  NULL,
  'active'
WHERE NOT EXISTS (
  SELECT 1 FROM public.members m WHERE m.name = '顧心芝'
);

UPDATE public.members
SET
  company = '元創財富管理顧問有限公司',
  position = '董事長',
  title = '董事長 - 元創財富管理顧問有限公司',
  industry = '銀行融資顧問',
  category = '企業顧問',
  "shortIntro" = '貸款需求 找亭儒 簡單快速 好幸福',
  "fullIntro" = '我是陳亭儒，專注於銀行融資顧問。
貸款需求 找亭儒 簡單快速 好幸福

【理想引薦對象】
保險業務員、律師、會計師 理財顧問

【聯絡方式】
0988-923-104',
  photo = 'images/members/陳亭儒.jpg',
  "photoPosition" = 'center',
  services = '["銀行融資貸款 協助新創公司融資擴大營業","辦理預備金","申請創業青年貸款需求","申辦房貸20年寬限期貸款"]'::jsonb,
  hashtags = '["#銀行融資顧問","#陳亭儒","#BNI長輝白金分會"]'::jsonb,
  links = '[{"type":"facebook","url":"#","icon":"facebook"},{"type":"line","url":"#","icon":"line"},{"type":"website","url":"#","icon":"website"}]'::jsonb,
  "editCount" = COALESCE("editCount", 0),
  "updatedAt" = NOW(),
  phone = NULL,
  email = NULL,
  status = 'active'
WHERE name = '陳亭儒';

INSERT INTO public.members (
  id, name, company, position, title, industry, category,
  "shortIntro", "fullIntro", photo, "photoPosition",
  services, hashtags, links, "editCount", "createdAt", "updatedAt", phone, email, status
)
SELECT
  100042,
  '陳亭儒',
  '元創財富管理顧問有限公司',
  '董事長',
  '董事長 - 元創財富管理顧問有限公司',
  '銀行融資顧問',
  '企業顧問',
  '貸款需求 找亭儒 簡單快速 好幸福',
  '我是陳亭儒，專注於銀行融資顧問。
貸款需求 找亭儒 簡單快速 好幸福

【理想引薦對象】
保險業務員、律師、會計師 理財顧問

【聯絡方式】
0988-923-104',
  'images/members/陳亭儒.jpg',
  'center',
  '["銀行融資貸款 協助新創公司融資擴大營業","辦理預備金","申請創業青年貸款需求","申辦房貸20年寬限期貸款"]'::jsonb,
  '["#銀行融資顧問","#陳亭儒","#BNI長輝白金分會"]'::jsonb,
  '[{"type":"facebook","url":"#","icon":"facebook"},{"type":"line","url":"#","icon":"line"},{"type":"website","url":"#","icon":"website"}]'::jsonb,
  0,
  NOW(),
  NOW(),
  NULL,
  NULL,
  'active'
WHERE NOT EXISTS (
  SELECT 1 FROM public.members m WHERE m.name = '陳亭儒'
);

UPDATE public.members
SET
  company = '半日閑企業行',
  position = '董事長',
  title = '董事長 - 半日閑企業行',
  industry = '澎湖特色餐飲',
  category = '美食餐飲',
  "shortIntro" = '澎湖旅遊 享新鮮 美食甜點 半日閑',
  "fullIntro" = '我是陳夗媃，專注於澎湖特色餐飲。
澎湖旅遊 享新鮮 美食甜點 半日閑

【理想引薦對象】
旅行社、公司活動部

【聯絡方式】
06-921-1007',
  photo = 'images/members/陳夗媃.jpg',
  "photoPosition" = 'center',
  services = '["澎湖美食甜點","團體包場 咖啡","甜點","美食宅配","澎湖特產宅配"]'::jsonb,
  hashtags = '["#澎湖特色餐飲","#陳夗媃","#BNI長輝白金分會"]'::jsonb,
  links = '[{"type":"facebook","url":"#","icon":"facebook"},{"type":"line","url":"#","icon":"line"},{"type":"website","url":"#","icon":"website"}]'::jsonb,
  "editCount" = COALESCE("editCount", 0),
  "updatedAt" = NOW(),
  phone = NULL,
  email = NULL,
  status = 'active'
WHERE name = '陳夗媃';

INSERT INTO public.members (
  id, name, company, position, title, industry, category,
  "shortIntro", "fullIntro", photo, "photoPosition",
  services, hashtags, links, "editCount", "createdAt", "updatedAt", phone, email, status
)
SELECT
  100043,
  '陳夗媃',
  '半日閑企業行',
  '董事長',
  '董事長 - 半日閑企業行',
  '澎湖特色餐飲',
  '美食餐飲',
  '澎湖旅遊 享新鮮 美食甜點 半日閑',
  '我是陳夗媃，專注於澎湖特色餐飲。
澎湖旅遊 享新鮮 美食甜點 半日閑

【理想引薦對象】
旅行社、公司活動部

【聯絡方式】
06-921-1007',
  'images/members/陳夗媃.jpg',
  'center',
  '["澎湖美食甜點","團體包場 咖啡","甜點","美食宅配","澎湖特產宅配"]'::jsonb,
  '["#澎湖特色餐飲","#陳夗媃","#BNI長輝白金分會"]'::jsonb,
  '[{"type":"facebook","url":"#","icon":"facebook"},{"type":"line","url":"#","icon":"line"},{"type":"website","url":"#","icon":"website"}]'::jsonb,
  0,
  NOW(),
  NOW(),
  NULL,
  NULL,
  'active'
WHERE NOT EXISTS (
  SELECT 1 FROM public.members m WHERE m.name = '陳夗媃'
);

UPDATE public.members
SET
  company = '創達智能技術股份有限公司',
  position = '董事長',
  title = '董事長 - 創達智能技術股份有限公司',
  industry = 'AI程式交易',
  category = '投資理財',
  "shortIntro" = '程式交易 很容易 穩定獲利 找年煜',
  "fullIntro" = '我是王年煜，專注於AI程式交易。
程式交易 很容易 穩定獲利 找年煜

【理想引薦對象】
有理財需求的公司與個人、想替自己客戶尋找穩定收益的理財產品、對開發人工智慧應用有興趣的公司或個人

【聯絡方式】
0938-767-768 Mail：wang.ian@investrontech.com',
  photo = 'images/members/王年煜.jpg',
  "photoPosition" = 'center',
  services = '["人工智慧 & 外匯交易"]'::jsonb,
  hashtags = '["#AI程式交易","#王年煜","#BNI長輝白金分會"]'::jsonb,
  links = '[{"type":"facebook","url":"#","icon":"facebook"},{"type":"line","url":"#","icon":"line"},{"type":"website","url":"#","icon":"website"}]'::jsonb,
  "editCount" = COALESCE("editCount", 0),
  "updatedAt" = NOW(),
  phone = NULL,
  email = NULL,
  status = 'active'
WHERE name = '王年煜';

INSERT INTO public.members (
  id, name, company, position, title, industry, category,
  "shortIntro", "fullIntro", photo, "photoPosition",
  services, hashtags, links, "editCount", "createdAt", "updatedAt", phone, email, status
)
SELECT
  100044,
  '王年煜',
  '創達智能技術股份有限公司',
  '董事長',
  '董事長 - 創達智能技術股份有限公司',
  'AI程式交易',
  '投資理財',
  '程式交易 很容易 穩定獲利 找年煜',
  '我是王年煜，專注於AI程式交易。
程式交易 很容易 穩定獲利 找年煜

【理想引薦對象】
有理財需求的公司與個人、想替自己客戶尋找穩定收益的理財產品、對開發人工智慧應用有興趣的公司或個人

【聯絡方式】
0938-767-768 Mail：wang.ian@investrontech.com',
  'images/members/王年煜.jpg',
  'center',
  '["人工智慧 & 外匯交易"]'::jsonb,
  '["#AI程式交易","#王年煜","#BNI長輝白金分會"]'::jsonb,
  '[{"type":"facebook","url":"#","icon":"facebook"},{"type":"line","url":"#","icon":"line"},{"type":"website","url":"#","icon":"website"}]'::jsonb,
  0,
  NOW(),
  NOW(),
  NULL,
  NULL,
  'active'
WHERE NOT EXISTS (
  SELECT 1 FROM public.members m WHERE m.name = '王年煜'
);

UPDATE public.members
SET
  company = '三人科技顧問 (三人數位科技有限公司 )',
  position = '創辦人',
  title = '創辦人 - 三人科技顧問 (三人數位科技有限公司 )',
  industry = 'ai商務顧問',
  category = '資訊系統',
  "shortIntro" = 'AI服務 組合拳 幫你創新 找王銓',
  "fullIntro" = '我是王銓，專注於AI商務顧問。
AI服務 組合拳 幫你創新 找王銓

【理想引薦對象】
行政繁瑣的中小企業、想解放工作時間的工作者

【聯絡方式】
0911-309-998 E-Mail：wang.business.a@gmail.com',
  photo = 'images/members/王銓.jpg',
  "photoPosition" = 'center',
  services = '["客製AI自動化系統","AI工具導入"]'::jsonb,
  hashtags = '["#AI 程式教育","#王銓","#BNI長輝白金分會"]'::jsonb,
  links = '[{"type":"facebook","url":"#測試連結","icon":"facebook"},{"type":"line","url":"#","icon":"line"},{"type":"website","url":"#","icon":"website"}]'::jsonb,
  "editCount" = COALESCE("editCount", 0),
  "updatedAt" = NOW(),
  phone = NULL,
  email = NULL,
  status = 'active'
WHERE name = '王銓';

INSERT INTO public.members (
  id, name, company, position, title, industry, category,
  "shortIntro", "fullIntro", photo, "photoPosition",
  services, hashtags, links, "editCount", "createdAt", "updatedAt", phone, email, status
)
SELECT
  100045,
  '王銓',
  '三人科技顧問 (三人數位科技有限公司 )',
  '創辦人',
  '創辦人 - 三人科技顧問 (三人數位科技有限公司 )',
  'ai商務顧問',
  '資訊系統',
  'AI服務 組合拳 幫你創新 找王銓',
  '我是王銓，專注於AI商務顧問。
AI服務 組合拳 幫你創新 找王銓

【理想引薦對象】
行政繁瑣的中小企業、想解放工作時間的工作者

【聯絡方式】
0911-309-998 E-Mail：wang.business.a@gmail.com',
  'images/members/王銓.jpg',
  'center',
  '["客製AI自動化系統","AI工具導入"]'::jsonb,
  '["#AI 程式教育","#王銓","#BNI長輝白金分會"]'::jsonb,
  '[{"type":"facebook","url":"#測試連結","icon":"facebook"},{"type":"line","url":"#","icon":"line"},{"type":"website","url":"#","icon":"website"}]'::jsonb,
  0,
  NOW(),
  NOW(),
  NULL,
  NULL,
  'active'
WHERE NOT EXISTS (
  SELECT 1 FROM public.members m WHERE m.name = '王銓'
);

UPDATE public.members
SET
  company = '悅爾企業有限公司',
  position = '董事長',
  title = '董事長 - 悅爾企業有限公司',
  industry = '團體服業',
  category = '企業行銷',
  "shortIntro" = '團體服裝 找姐夫（Jeffrey） 品質形象 不馬虎',
  "fullIntro" = '我是李慰祖，專注於團體服業。
團體服裝 找姐夫（Jeffrey） 品質形象 不馬虎

【理想引薦對象】
公司行號、公司團體、公關行銷、標案合作

【聯絡方式】
0903-995105 Line ID: jwl8477',
  photo = 'images/members/李慰祖.jpg',
  "photoPosition" = 'center',
  services = '["針對公營及民營團體與學校 提供各種款式團體服裝設計","製作"]'::jsonb,
  hashtags = '["#團體服業","#李慰祖","#BNI長輝白金分會"]'::jsonb,
  links = '[{"type":"facebook","url":"#","icon":"facebook"},{"type":"line","url":"#","icon":"line"},{"type":"website","url":"#","icon":"website"}]'::jsonb,
  "editCount" = COALESCE("editCount", 0),
  "updatedAt" = NOW(),
  phone = NULL,
  email = NULL,
  status = 'active'
WHERE name = '李慰祖';

INSERT INTO public.members (
  id, name, company, position, title, industry, category,
  "shortIntro", "fullIntro", photo, "photoPosition",
  services, hashtags, links, "editCount", "createdAt", "updatedAt", phone, email, status
)
SELECT
  100046,
  '李慰祖',
  '悅爾企業有限公司',
  '董事長',
  '董事長 - 悅爾企業有限公司',
  '團體服業',
  '企業行銷',
  '團體服裝 找姐夫（Jeffrey） 品質形象 不馬虎',
  '我是李慰祖，專注於團體服業。
團體服裝 找姐夫（Jeffrey） 品質形象 不馬虎

【理想引薦對象】
公司行號、公司團體、公關行銷、標案合作

【聯絡方式】
0903-995105 Line ID: jwl8477',
  'images/members/李慰祖.jpg',
  'center',
  '["針對公營及民營團體與學校 提供各種款式團體服裝設計","製作"]'::jsonb,
  '["#團體服業","#李慰祖","#BNI長輝白金分會"]'::jsonb,
  '[{"type":"facebook","url":"#","icon":"facebook"},{"type":"line","url":"#","icon":"line"},{"type":"website","url":"#","icon":"website"}]'::jsonb,
  0,
  NOW(),
  NOW(),
  NULL,
  NULL,
  'active'
WHERE NOT EXISTS (
  SELECT 1 FROM public.members m WHERE m.name = '李慰祖'
);

UPDATE public.members
SET
  company = '元允室內裝修工程有限公司',
  position = '董事長',
  title = '董事長 - 元允室內裝修工程有限公司',
  industry = '統包工程',
  category = '工程裝修',
  "shortIntro" = '工程統包 找睿霖 進度品管 最放心',
  "fullIntro" = '我是吳睿霖，專注於統包工程。
工程統包 找睿霖 進度品管 最放心

【理想引薦對象】
營造廠、建設公司、設計公司

【聯絡方式】
0938-541-940',
  photo = 'images/members/吳睿霖.jpg',
  "photoPosition" = 'center',
  services = '["建案","商業","住宅工程統包及木作工程"]'::jsonb,
  hashtags = '["#統包工程","#吳睿霖","#BNI長輝白金分會"]'::jsonb,
  links = '[{"type":"facebook","url":"#","icon":"facebook"},{"type":"line","url":"#","icon":"line"},{"type":"website","url":"#","icon":"website"}]'::jsonb,
  "editCount" = COALESCE("editCount", 0),
  "updatedAt" = NOW(),
  phone = NULL,
  email = NULL,
  status = 'active'
WHERE name = '吳睿霖';

INSERT INTO public.members (
  id, name, company, position, title, industry, category,
  "shortIntro", "fullIntro", photo, "photoPosition",
  services, hashtags, links, "editCount", "createdAt", "updatedAt", phone, email, status
)
SELECT
  100047,
  '吳睿霖',
  '元允室內裝修工程有限公司',
  '董事長',
  '董事長 - 元允室內裝修工程有限公司',
  '統包工程',
  '工程裝修',
  '工程統包 找睿霖 進度品管 最放心',
  '我是吳睿霖，專注於統包工程。
工程統包 找睿霖 進度品管 最放心

【理想引薦對象】
營造廠、建設公司、設計公司

【聯絡方式】
0938-541-940',
  'images/members/吳睿霖.jpg',
  'center',
  '["建案","商業","住宅工程統包及木作工程"]'::jsonb,
  '["#統包工程","#吳睿霖","#BNI長輝白金分會"]'::jsonb,
  '[{"type":"facebook","url":"#","icon":"facebook"},{"type":"line","url":"#","icon":"line"},{"type":"website","url":"#","icon":"website"}]'::jsonb,
  0,
  NOW(),
  NOW(),
  NULL,
  NULL,
  'active'
WHERE NOT EXISTS (
  SELECT 1 FROM public.members m WHERE m.name = '吳睿霖'
);

UPDATE public.members
SET
  company = '沃祈數位科技股份有限公司',
  position = '行銷副總',
  title = '行銷副總 - 沃祈數位科技股份有限公司',
  industry = '人力媒合平台',
  category = '企業顧問',
  "shortIntro" = 'worky信的過 更好用 一鍵派工 超輕鬆',
  "fullIntro" = '我是許雅婷，專注於人力媒合平台。
worky信的過 更好用 一鍵派工 超輕鬆

【理想引薦對象】
商家老闆、有人力需求的店家和企業、連鎖企業、有短期工作需求者

【聯絡方式】
0920808788 mail:angela.hsu@gamehours.com',
  photo = 'images/members/許雅婷.jpg',
  "photoPosition" = 'center',
  services = '["快速協助商家解決缺工問題並 節省時間與人力成本。"]'::jsonb,
  hashtags = '["#人力媒合","#Worky","#許雅婷","#BNI長輝白金分會"]'::jsonb,
  links = '[{"type":"website","url":"#","icon":"website"}]'::jsonb,
  "editCount" = COALESCE("editCount", 0),
  "updatedAt" = NOW(),
  phone = NULL,
  email = NULL,
  status = 'active'
WHERE name = '許雅婷';

INSERT INTO public.members (
  id, name, company, position, title, industry, category,
  "shortIntro", "fullIntro", photo, "photoPosition",
  services, hashtags, links, "editCount", "createdAt", "updatedAt", phone, email, status
)
SELECT
  100048,
  '許雅婷',
  '沃祈數位科技股份有限公司',
  '行銷副總',
  '行銷副總 - 沃祈數位科技股份有限公司',
  '人力媒合平台',
  '企業顧問',
  'worky信的過 更好用 一鍵派工 超輕鬆',
  '我是許雅婷，專注於人力媒合平台。
worky信的過 更好用 一鍵派工 超輕鬆

【理想引薦對象】
商家老闆、有人力需求的店家和企業、連鎖企業、有短期工作需求者

【聯絡方式】
0920808788 mail:angela.hsu@gamehours.com',
  'images/members/許雅婷.jpg',
  'center',
  '["快速協助商家解決缺工問題並 節省時間與人力成本。"]'::jsonb,
  '["#人力媒合","#Worky","#許雅婷","#BNI長輝白金分會"]'::jsonb,
  '[{"type":"website","url":"#","icon":"website"}]'::jsonb,
  0,
  NOW(),
  NOW(),
  NULL,
  NULL,
  'active'
WHERE NOT EXISTS (
  SELECT 1 FROM public.members m WHERE m.name = '許雅婷'
);

UPDATE public.members
SET
  company = '圭葆有限公司',
  position = '負責人',
  title = '負責人 - 圭葆有限公司',
  industry = '居家鍍膜',
  category = NULL,
  "shortIntro" = '居家鍍膜 找顯智 潔淨生活 更舒適',
  "fullIntro" = '我是彭顯智，專注於居家鍍膜。
居家鍍膜 找顯智 潔淨生活 更舒適

【理想引薦對象】
設計師、裝修公司、清潔業者、物業管理、民宿與商用空間業主

【聯絡方式】
0978-178-488 mail：genius.hcpeng@gmail.com',
  photo = 'images/members/彭顯智.jpg',
  "photoPosition" = 'center',
  services = '["居家鍍膜產品","抗菌防護層","廚衛耐污鍍膜","玻璃防水鍍膜","家俱表面保護","清潔效能提升方案"]'::jsonb,
  hashtags = '["#居家鍍膜","#彭顯智"]'::jsonb,
  links = '[{"type":"website","url":"#","icon":"website"}]'::jsonb,
  "editCount" = COALESCE("editCount", 0),
  "updatedAt" = NOW(),
  phone = NULL,
  email = NULL,
  status = 'active'
WHERE name = '彭顯智';

INSERT INTO public.members (
  id, name, company, position, title, industry, category,
  "shortIntro", "fullIntro", photo, "photoPosition",
  services, hashtags, links, "editCount", "createdAt", "updatedAt", phone, email, status
)
SELECT
  100049,
  '彭顯智',
  '圭葆有限公司',
  '負責人',
  '負責人 - 圭葆有限公司',
  '居家鍍膜',
  NULL,
  '居家鍍膜 找顯智 潔淨生活 更舒適',
  '我是彭顯智，專注於居家鍍膜。
居家鍍膜 找顯智 潔淨生活 更舒適

【理想引薦對象】
設計師、裝修公司、清潔業者、物業管理、民宿與商用空間業主

【聯絡方式】
0978-178-488 mail：genius.hcpeng@gmail.com',
  'images/members/彭顯智.jpg',
  'center',
  '["居家鍍膜產品","抗菌防護層","廚衛耐污鍍膜","玻璃防水鍍膜","家俱表面保護","清潔效能提升方案"]'::jsonb,
  '["#居家鍍膜","#彭顯智"]'::jsonb,
  '[{"type":"website","url":"#","icon":"website"}]'::jsonb,
  0,
  NOW(),
  NOW(),
  NULL,
  NULL,
  'active'
WHERE NOT EXISTS (
  SELECT 1 FROM public.members m WHERE m.name = '彭顯智'
);

UPDATE public.members
SET
  company = '雷水有限公司',
  position = '負責人',
  title = '水電工程 專家',
  industry = '水電工程',
  category = NULL,
  "shortIntro" = '案場工程 找水電 雷水讓你 尚放心',
  "fullIntro" = '我是劉弼凱，專注於水電工程。
案場工程 找水電 雷水讓你 尚放心

【理想引薦對象】
設計師/建築師/統包公司

【聯絡方式】
0929-853-311 mail：l.shuei1113@gmail.com',
  photo = 'images/members/劉弼凱.jpg',
  "photoPosition" = 'center',
  services = '["建築物專用水電工程","配合設計師/建築師/ 統包公司","為您特製合法合規的水+電。"]'::jsonb,
  hashtags = '["#水電工程","#劉弼凱"]'::jsonb,
  links = '[{"type":"website","url":"#","icon":"website"}]'::jsonb,
  "editCount" = COALESCE("editCount", 0),
  "updatedAt" = NOW(),
  phone = NULL,
  email = NULL,
  status = 'active'
WHERE name = '劉弼凱';

INSERT INTO public.members (
  id, name, company, position, title, industry, category,
  "shortIntro", "fullIntro", photo, "photoPosition",
  services, hashtags, links, "editCount", "createdAt", "updatedAt", phone, email, status
)
SELECT
  100050,
  '劉弼凱',
  '雷水有限公司',
  '負責人',
  '水電工程 專家',
  '水電工程',
  NULL,
  '案場工程 找水電 雷水讓你 尚放心',
  '我是劉弼凱，專注於水電工程。
案場工程 找水電 雷水讓你 尚放心

【理想引薦對象】
設計師/建築師/統包公司

【聯絡方式】
0929-853-311 mail：l.shuei1113@gmail.com',
  'images/members/劉弼凱.jpg',
  'center',
  '["建築物專用水電工程","配合設計師/建築師/ 統包公司","為您特製合法合規的水+電。"]'::jsonb,
  '["#水電工程","#劉弼凱"]'::jsonb,
  '[{"type":"website","url":"#","icon":"website"}]'::jsonb,
  0,
  NOW(),
  NOW(),
  NULL,
  NULL,
  'active'
WHERE NOT EXISTS (
  SELECT 1 FROM public.members m WHERE m.name = '劉弼凱'
);

UPDATE public.members
SET
  company = '最準行銷服務有限公司',
  position = '負責人',
  title = 'SEO 內容行銷 專家',
  industry = 'SEO 內容行銷',
  category = NULL,
  "shortIntro" = '精準流量 全代操 客戶上門 免煩惱',
  "fullIntro" = '我是潘芷盈，專注於SEO 內容行銷。
精準流量 全代操 客戶上門 免煩惱

【理想引薦對象】
行銷公司、品牌顧問、電商系統

【聯絡方式】
0975042077、 jadepang418@gmail.com',
  photo = 'images/members/潘芷盈.jpg',
  "photoPosition" = 'center',
  services = '["免費架網站","免費寫文章","有效才付費"]'::jsonb,
  hashtags = '["#SEO 內容行銷","#潘芷盈"]'::jsonb,
  links = '[{"type":"website","url":"#","icon":"website"}]'::jsonb,
  "editCount" = COALESCE("editCount", 0),
  "updatedAt" = NOW(),
  phone = NULL,
  email = NULL,
  status = 'active'
WHERE name = '潘芷盈';

INSERT INTO public.members (
  id, name, company, position, title, industry, category,
  "shortIntro", "fullIntro", photo, "photoPosition",
  services, hashtags, links, "editCount", "createdAt", "updatedAt", phone, email, status
)
SELECT
  100051,
  '潘芷盈',
  '最準行銷服務有限公司',
  '負責人',
  'SEO 內容行銷 專家',
  'SEO 內容行銷',
  NULL,
  '精準流量 全代操 客戶上門 免煩惱',
  '我是潘芷盈，專注於SEO 內容行銷。
精準流量 全代操 客戶上門 免煩惱

【理想引薦對象】
行銷公司、品牌顧問、電商系統

【聯絡方式】
0975042077、 jadepang418@gmail.com',
  'images/members/潘芷盈.jpg',
  'center',
  '["免費架網站","免費寫文章","有效才付費"]'::jsonb,
  '["#SEO 內容行銷","#潘芷盈"]'::jsonb,
  '[{"type":"website","url":"#","icon":"website"}]'::jsonb,
  0,
  NOW(),
  NOW(),
  NULL,
  NULL,
  'active'
WHERE NOT EXISTS (
  SELECT 1 FROM public.members m WHERE m.name = '潘芷盈'
);

UPDATE public.members
SET
  company = '謙益科技股份有限公司',
  position = '負責人',
  title = '永續可分解包裝 專家',
  industry = '永續可分解包裝',
  category = NULL,
  "shortIntro" = '分解包裝 找益承 袋袋永續 有保證',
  "fullIntro" = '我是湯益承，專注於永續可分解包裝。
分解包裝 找益承 袋袋永續 有保證

【理想引薦對象】
飯店旅宿業，團購主，家樂福，全聯採購

【聯絡方式】
0930857662 mail:pm1modesty@gmail.com',
  photo = 'images/members/湯益承.jpg',
  "photoPosition" = 'center',
  services = '["夾鏈袋","垃圾袋","蔬果袋","麵包袋","拾狗便袋 等公版與客製化包裝袋服務"]'::jsonb,
  hashtags = '["#永續可分解包裝","#湯益承"]'::jsonb,
  links = '[{"type":"website","url":"#","icon":"website"}]'::jsonb,
  "editCount" = COALESCE("editCount", 0),
  "updatedAt" = NOW(),
  phone = NULL,
  email = NULL,
  status = 'active'
WHERE name = '湯益承';

INSERT INTO public.members (
  id, name, company, position, title, industry, category,
  "shortIntro", "fullIntro", photo, "photoPosition",
  services, hashtags, links, "editCount", "createdAt", "updatedAt", phone, email, status
)
SELECT
  100052,
  '湯益承',
  '謙益科技股份有限公司',
  '負責人',
  '永續可分解包裝 專家',
  '永續可分解包裝',
  NULL,
  '分解包裝 找益承 袋袋永續 有保證',
  '我是湯益承，專注於永續可分解包裝。
分解包裝 找益承 袋袋永續 有保證

【理想引薦對象】
飯店旅宿業，團購主，家樂福，全聯採購

【聯絡方式】
0930857662 mail:pm1modesty@gmail.com',
  'images/members/湯益承.jpg',
  'center',
  '["夾鏈袋","垃圾袋","蔬果袋","麵包袋","拾狗便袋 等公版與客製化包裝袋服務"]'::jsonb,
  '["#永續可分解包裝","#湯益承"]'::jsonb,
  '[{"type":"website","url":"#","icon":"website"}]'::jsonb,
  0,
  NOW(),
  NOW(),
  NULL,
  NULL,
  'active'
WHERE NOT EXISTS (
  SELECT 1 FROM public.members m WHERE m.name = '湯益承'
);

UPDATE public.members
SET
  company = '富豪聯合租賃股份有限公司',
  position = '負責人',
  title = '汽車租賃 專家',
  industry = '汽車租賃',
  category = NULL,
  "shortIntro" = '汽車租賃 找富豪 事業馬上 變富豪',
  "fullIntro" = '我是呂學承，專注於汽車租賃。
汽車租賃 找富豪 事業馬上 變富豪

【理想引薦對象】
半導體與科技廠區/建設公司/代銷不動產/ 宗教協會工會

【聯絡方式】
0928-834-212 mail：alexlu@am-asap.com',
  photo = 'images/members/呂學承.jpg',
  "photoPosition" = 'center',
  services = '["企業租車","買賣汽車","中古車買賣"]'::jsonb,
  hashtags = '["#汽車租賃","#呂學承"]'::jsonb,
  links = '[{"type":"website","url":"#","icon":"website"}]'::jsonb,
  "editCount" = COALESCE("editCount", 0),
  "updatedAt" = NOW(),
  phone = NULL,
  email = NULL,
  status = 'active'
WHERE name = '呂學承';

INSERT INTO public.members (
  id, name, company, position, title, industry, category,
  "shortIntro", "fullIntro", photo, "photoPosition",
  services, hashtags, links, "editCount", "createdAt", "updatedAt", phone, email, status
)
SELECT
  100053,
  '呂學承',
  '富豪聯合租賃股份有限公司',
  '負責人',
  '汽車租賃 專家',
  '汽車租賃',
  NULL,
  '汽車租賃 找富豪 事業馬上 變富豪',
  '我是呂學承，專注於汽車租賃。
汽車租賃 找富豪 事業馬上 變富豪

【理想引薦對象】
半導體與科技廠區/建設公司/代銷不動產/ 宗教協會工會

【聯絡方式】
0928-834-212 mail：alexlu@am-asap.com',
  'images/members/呂學承.jpg',
  'center',
  '["企業租車","買賣汽車","中古車買賣"]'::jsonb,
  '["#汽車租賃","#呂學承"]'::jsonb,
  '[{"type":"website","url":"#","icon":"website"}]'::jsonb,
  0,
  NOW(),
  NOW(),
  NULL,
  NULL,
  'active'
WHERE NOT EXISTS (
  SELECT 1 FROM public.members m WHERE m.name = '呂學承'
);

UPDATE public.referrals
SET
  title = '清大校友球隊年度服飾專案',
  description = '施秉辰接任清華大學校友高爾夫球隊總幹事，需製作年度球衣與球帽。他引薦李慰祖協助，李慰祖解決了會長獨特的客製化需求，從設計到打樣流程順暢，成品獲得校友高度肯定。',
  metrics = '{"amount":"金額六位數","type":"團體服飾設計與製作"}'::jsonb,
  referrer_name = '施秉辰',
  referee_name = '李慰祖',
  referrer_story = '施秉辰接任清華大學校友高爾夫球隊總幹事，需製作年度球衣與球帽。他引薦李慰祖協助，李慰祖解決了會長獨特的客製化需求，從設計到打樣流程順暢，成品獲得校友高度肯定。',
  referrer_testimonial = NULL,
  referee_story = NULL,
  referee_value = NULL
WHERE id = 'ref-001';

INSERT INTO public.referrals (
  id, title, description, metrics,
  referrer_name, referee_name,
  referrer_story, referrer_testimonial,
  referee_story, referee_value,
  "createdAt", created_at
)
SELECT
  'ref-001',
  '清大校友球隊年度服飾專案',
  '施秉辰接任清華大學校友高爾夫球隊總幹事，需製作年度球衣與球帽。他引薦李慰祖協助，李慰祖解決了會長獨特的客製化需求，從設計到打樣流程順暢，成品獲得校友高度肯定。',
  '{"amount":"金額六位數","type":"團體服飾設計與製作"}'::jsonb,
  '施秉辰',
  '李慰祖',
  '施秉辰接任清華大學校友高爾夫球隊總幹事，需製作年度球衣與球帽。他引薦李慰祖協助，李慰祖解決了會長獨特的客製化需求，從設計到打樣流程順暢，成品獲得校友高度肯定。',
  NULL,
  NULL,
  NULL,
  NOW(),
  NOW()
WHERE NOT EXISTS (
  SELECT 1 FROM public.referrals r WHERE r.id = 'ref-001'
);

UPDATE public.referrals
SET
  title = '🤖 跨界結合，創新無限',
  description = '王銓將合夥人介紹給王祈，將原本看似無交集的「AI 教育」與「升學輔導」結合，打造針對企業與成人學習者的「AI 顧問」新角色，成功開設課程並接到企業顧問案。',
  metrics = '{"amount":"跨界創新合作","type":"新課程開設、企業顧問案"}'::jsonb,
  referrer_name = '王銓',
  referee_name = '王祈',
  referrer_story = '王銓將合夥人介紹給王祈，將原本看似無交集的「AI 教育」與「升學輔導」結合，打造針對企業與成人學習者的「AI 顧問」新角色，成功開設課程並接到企業顧問案。',
  referrer_testimonial = NULL,
  referee_story = NULL,
  referee_value = NULL
WHERE id = 'ref-002';

INSERT INTO public.referrals (
  id, title, description, metrics,
  referrer_name, referee_name,
  referrer_story, referrer_testimonial,
  referee_story, referee_value,
  "createdAt", created_at
)
SELECT
  'ref-002',
  '🤖 跨界結合，創新無限',
  '王銓將合夥人介紹給王祈，將原本看似無交集的「AI 教育」與「升學輔導」結合，打造針對企業與成人學習者的「AI 顧問」新角色，成功開設課程並接到企業顧問案。',
  '{"amount":"跨界創新合作","type":"新課程開設、企業顧問案"}'::jsonb,
  '王銓',
  '王祈',
  '王銓將合夥人介紹給王祈，將原本看似無交集的「AI 教育」與「升學輔導」結合，打造針對企業與成人學習者的「AI 顧問」新角色，成功開設課程並接到企業顧問案。',
  NULL,
  NULL,
  NULL,
  NOW(),
  NOW()
WHERE NOT EXISTS (
  SELECT 1 FROM public.referrals r WHERE r.id = 'ref-002'
);

UPDATE public.referrals
SET
  title = '🏃‍♂️ 鞋墊助力路跑者',
  description = '洪儀君經由運動營養師引薦接觸到一位路跑玩家，發現其有足弓塌陷問題，隨即引薦林修賢。林修賢提供專業檢測，製作日常鞋墊並改良專業路跑鞋，提供一條龍服務。',
  metrics = '{"amount":"一條龍服務","type":"日常鞋墊 + 專業路跑鞋改良"}'::jsonb,
  referrer_name = '洪儀君',
  referee_name = '林修賢',
  referrer_story = '洪儀君經由運動營養師引薦接觸到一位路跑玩家，發現其有足弓塌陷問題，隨即引薦林修賢。林修賢提供專業檢測，製作日常鞋墊並改良專業路跑鞋，提供一條龍服務。',
  referrer_testimonial = NULL,
  referee_story = NULL,
  referee_value = NULL
WHERE id = 'ref-003';

INSERT INTO public.referrals (
  id, title, description, metrics,
  referrer_name, referee_name,
  referrer_story, referrer_testimonial,
  referee_story, referee_value,
  "createdAt", created_at
)
SELECT
  'ref-003',
  '🏃‍♂️ 鞋墊助力路跑者',
  '洪儀君經由運動營養師引薦接觸到一位路跑玩家，發現其有足弓塌陷問題，隨即引薦林修賢。林修賢提供專業檢測，製作日常鞋墊並改良專業路跑鞋，提供一條龍服務。',
  '{"amount":"一條龍服務","type":"日常鞋墊 + 專業路跑鞋改良"}'::jsonb,
  '洪儀君',
  '林修賢',
  '洪儀君經由運動營養師引薦接觸到一位路跑玩家，發現其有足弓塌陷問題，隨即引薦林修賢。林修賢提供專業檢測，製作日常鞋墊並改良專業路跑鞋，提供一條龍服務。',
  NULL,
  NULL,
  NULL,
  NOW(),
  NOW()
WHERE NOT EXISTS (
  SELECT 1 FROM public.referrals r WHERE r.id = 'ref-003'
);

UPDATE public.referrals
SET
  title = '信任成交，匹克品牌專案',
  description = '江沛璇推廣匹克球運動，預見未來品牌建置需求，引薦江學洋給總召。因事前鋪墊完整，建立了極高信任感，讓原本需要數月的開發期縮短至幾次會議即成交。',
  metrics = '{"amount":"效率大幅提升","type":"品牌商標設計"}'::jsonb,
  referrer_name = '江沛璇',
  referee_name = '江學洋',
  referrer_story = '江沛璇推廣匹克球運動，預見未來品牌建置需求，引薦江學洋給總召。因事前鋪墊完整，建立了極高信任感，讓原本需要數月的開發期縮短至幾次會議即成交。',
  referrer_testimonial = NULL,
  referee_story = NULL,
  referee_value = NULL
WHERE id = 'ref-004';

INSERT INTO public.referrals (
  id, title, description, metrics,
  referrer_name, referee_name,
  referrer_story, referrer_testimonial,
  referee_story, referee_value,
  "createdAt", created_at
)
SELECT
  'ref-004',
  '信任成交，匹克品牌專案',
  '江沛璇推廣匹克球運動，預見未來品牌建置需求，引薦江學洋給總召。因事前鋪墊完整，建立了極高信任感，讓原本需要數月的開發期縮短至幾次會議即成交。',
  '{"amount":"效率大幅提升","type":"品牌商標設計"}'::jsonb,
  '江沛璇',
  '江學洋',
  '江沛璇推廣匹克球運動，預見未來品牌建置需求，引薦江學洋給總召。因事前鋪墊完整，建立了極高信任感，讓原本需要數月的開發期縮短至幾次會議即成交。',
  NULL,
  NULL,
  NULL,
  NOW(),
  NOW()
WHERE NOT EXISTS (
  SELECT 1 FROM public.referrals r WHERE r.id = 'ref-004'
);

UPDATE public.referrals
SET
  title = '台啤T恤專案，破百萬合作',
  description = '台灣隊長陳傑憲代言台啤後的第一波製作物，孫成育引薦李慰祖製作 4,000 件高品質團體 T 恤。雙方快速確認打樣與品質，順利簽約。',
  metrics = '{"amount":"專案金額破百萬","type":"4,000件T恤"}'::jsonb,
  referrer_name = '孫成育',
  referee_name = '李慰祖',
  referrer_story = '台灣隊長陳傑憲代言台啤後的第一波製作物，孫成育引薦李慰祖製作 4,000 件高品質團體 T 恤。雙方快速確認打樣與品質，順利簽約。',
  referrer_testimonial = NULL,
  referee_story = NULL,
  referee_value = NULL
WHERE id = 'ref-005';

INSERT INTO public.referrals (
  id, title, description, metrics,
  referrer_name, referee_name,
  referrer_story, referrer_testimonial,
  referee_story, referee_value,
  "createdAt", created_at
)
SELECT
  'ref-005',
  '台啤T恤專案，破百萬合作',
  '台灣隊長陳傑憲代言台啤後的第一波製作物，孫成育引薦李慰祖製作 4,000 件高品質團體 T 恤。雙方快速確認打樣與品質，順利簽約。',
  '{"amount":"專案金額破百萬","type":"4,000件T恤"}'::jsonb,
  '孫成育',
  '李慰祖',
  '台灣隊長陳傑憲代言台啤後的第一波製作物，孫成育引薦李慰祖製作 4,000 件高品質團體 T 恤。雙方快速確認打樣與品質，順利簽約。',
  NULL,
  NULL,
  NULL,
  NOW(),
  NOW()
WHERE NOT EXISTS (
  SELECT 1 FROM public.referrals r WHERE r.id = 'ref-005'
);

UPDATE public.referrals
SET
  title = '輕食餐盒，活動完美呈現',
  description = '江沛璇邀請郭家宏參與 Power Lunch 擺攤交流，並引薦給之後舉辦的小型企業論壇紅酒會，郭家宏快速規劃出符合場合的輕食餐盒。',
  metrics = '{"amount":"企業論壇紅酒會","type":"輕食餐盒服務"}'::jsonb,
  referrer_name = '江沛璇',
  referee_name = '郭家宏',
  referrer_story = '江沛璇邀請郭家宏參與 Power Lunch 擺攤交流，並引薦給之後舉辦的小型企業論壇紅酒會，郭家宏快速規劃出符合場合的輕食餐盒。',
  referrer_testimonial = NULL,
  referee_story = NULL,
  referee_value = NULL
WHERE id = 'ref-006';

INSERT INTO public.referrals (
  id, title, description, metrics,
  referrer_name, referee_name,
  referrer_story, referrer_testimonial,
  referee_story, referee_value,
  "createdAt", created_at
)
SELECT
  'ref-006',
  '輕食餐盒，活動完美呈現',
  '江沛璇邀請郭家宏參與 Power Lunch 擺攤交流，並引薦給之後舉辦的小型企業論壇紅酒會，郭家宏快速規劃出符合場合的輕食餐盒。',
  '{"amount":"企業論壇紅酒會","type":"輕食餐盒服務"}'::jsonb,
  '江沛璇',
  '郭家宏',
  '江沛璇邀請郭家宏參與 Power Lunch 擺攤交流，並引薦給之後舉辦的小型企業論壇紅酒會，郭家宏快速規劃出符合場合的輕食餐盒。',
  NULL,
  NULL,
  NULL,
  NOW(),
  NOW()
WHERE NOT EXISTS (
  SELECT 1 FROM public.referrals r WHERE r.id = 'ref-006'
);

UPDATE public.referrals
SET
  title = '寵物保母課程場地合作',
  description = '詹謦鴻為寵物保母認證班尋找毛孩友善場地，引薦鄭雅菁的空間。講師參訪後深受感動，決定將 48 小時的專業課程交給小島好日舉辦。',
  metrics = '{"amount":"48小時認證班","type":"場地租賃"}'::jsonb,
  referrer_name = '詹謦鴻',
  referee_name = '鄭雅菁',
  referrer_story = '詹謦鴻為寵物保母認證班尋找毛孩友善場地，引薦鄭雅菁的空間。講師參訪後深受感動，決定將 48 小時的專業課程交給小島好日舉辦。',
  referrer_testimonial = NULL,
  referee_story = NULL,
  referee_value = NULL
WHERE id = 'ref-007';

INSERT INTO public.referrals (
  id, title, description, metrics,
  referrer_name, referee_name,
  referrer_story, referrer_testimonial,
  referee_story, referee_value,
  "createdAt", created_at
)
SELECT
  'ref-007',
  '寵物保母課程場地合作',
  '詹謦鴻為寵物保母認證班尋找毛孩友善場地，引薦鄭雅菁的空間。講師參訪後深受感動，決定將 48 小時的專業課程交給小島好日舉辦。',
  '{"amount":"48小時認證班","type":"場地租賃"}'::jsonb,
  '詹謦鴻',
  '鄭雅菁',
  '詹謦鴻為寵物保母認證班尋找毛孩友善場地，引薦鄭雅菁的空間。講師參訪後深受感動，決定將 48 小時的專業課程交給小島好日舉辦。',
  NULL,
  NULL,
  NULL,
  NOW(),
  NOW()
WHERE NOT EXISTS (
  SELECT 1 FROM public.referrals r WHERE r.id = 'ref-007'
);

UPDATE public.referrals
SET
  title = '房產過戶，省稅關鍵',
  description = '王執定協助客戶進行房產過戶給兒子的規劃，事前做好完整稅務分析，再引薦李逸強執行過戶手續。因前端規劃完善，地政士只需執行文件，流程極高效率。',
  metrics = '{"amount":"專業省稅規劃","type":"房產過戶"}'::jsonb,
  referrer_name = '王執定',
  referee_name = '李逸強',
  referrer_story = '王執定協助客戶進行房產過戶給兒子的規劃，事前做好完整稅務分析，再引薦李逸強執行過戶手續。因前端規劃完善，地政士只需執行文件，流程極高效率。',
  referrer_testimonial = NULL,
  referee_story = NULL,
  referee_value = NULL
WHERE id = 'ref-008';

INSERT INTO public.referrals (
  id, title, description, metrics,
  referrer_name, referee_name,
  referrer_story, referrer_testimonial,
  referee_story, referee_value,
  "createdAt", created_at
)
SELECT
  'ref-008',
  '房產過戶，省稅關鍵',
  '王執定協助客戶進行房產過戶給兒子的規劃，事前做好完整稅務分析，再引薦李逸強執行過戶手續。因前端規劃完善，地政士只需執行文件，流程極高效率。',
  '{"amount":"專業省稅規劃","type":"房產過戶"}'::jsonb,
  '王執定',
  '李逸強',
  '王執定協助客戶進行房產過戶給兒子的規劃，事前做好完整稅務分析，再引薦李逸強執行過戶手續。因前端規劃完善，地政士只需執行文件，流程極高效率。',
  NULL,
  NULL,
  NULL,
  NOW(),
  NOW()
WHERE NOT EXISTS (
  SELECT 1 FROM public.referrals r WHERE r.id = 'ref-008'
);

UPDATE public.referrals
SET
  title = '寵物食品包裝設計',
  description = '詹謦鴻引薦郭孝淵負責寵物鮮食與「灶神」聯名的包裝設計。設計兼顧宗教寓意與實用性，產品推出後大受歡迎，並促成後續與大廠的長期合作。',
  metrics = '{"amount":"長期合作、新客戶拓展","type":"包裝設計"}'::jsonb,
  referrer_name = '詹謦鴻',
  referee_name = '郭孝淵',
  referrer_story = '詹謦鴻引薦郭孝淵負責寵物鮮食與「灶神」聯名的包裝設計。設計兼顧宗教寓意與實用性，產品推出後大受歡迎，並促成後續與大廠的長期合作。',
  referrer_testimonial = NULL,
  referee_story = NULL,
  referee_value = NULL
WHERE id = 'ref-009';

INSERT INTO public.referrals (
  id, title, description, metrics,
  referrer_name, referee_name,
  referrer_story, referrer_testimonial,
  referee_story, referee_value,
  "createdAt", created_at
)
SELECT
  'ref-009',
  '寵物食品包裝設計',
  '詹謦鴻引薦郭孝淵負責寵物鮮食與「灶神」聯名的包裝設計。設計兼顧宗教寓意與實用性，產品推出後大受歡迎，並促成後續與大廠的長期合作。',
  '{"amount":"長期合作、新客戶拓展","type":"包裝設計"}'::jsonb,
  '詹謦鴻',
  '郭孝淵',
  '詹謦鴻引薦郭孝淵負責寵物鮮食與「灶神」聯名的包裝設計。設計兼顧宗教寓意與實用性，產品推出後大受歡迎，並促成後續與大廠的長期合作。',
  NULL,
  NULL,
  NULL,
  NOW(),
  NOW()
WHERE NOT EXISTS (
  SELECT 1 FROM public.referrals r WHERE r.id = 'ref-009'
);

UPDATE public.referrals
SET
  title = '食安保障，加盟無憂',
  description = '郭家宏的品牌「雞百分」拓展連鎖加盟，引薦楊明翰協助導入產品責任保險，讓總部與加盟主對接投保，建立食安防線。',
  metrics = '{"amount":"服務全省連鎖加盟體系","type":"產品責任保險"}'::jsonb,
  referrer_name = '郭家宏',
  referee_name = '楊明翰',
  referrer_story = '郭家宏的品牌「雞百分」拓展連鎖加盟，引薦楊明翰協助導入產品責任保險，讓總部與加盟主對接投保，建立食安防線。',
  referrer_testimonial = NULL,
  referee_story = NULL,
  referee_value = NULL
WHERE id = 'ref-010';

INSERT INTO public.referrals (
  id, title, description, metrics,
  referrer_name, referee_name,
  referrer_story, referrer_testimonial,
  referee_story, referee_value,
  "createdAt", created_at
)
SELECT
  'ref-010',
  '食安保障，加盟無憂',
  '郭家宏的品牌「雞百分」拓展連鎖加盟，引薦楊明翰協助導入產品責任保險，讓總部與加盟主對接投保，建立食安防線。',
  '{"amount":"服務全省連鎖加盟體系","type":"產品責任保險"}'::jsonb,
  '郭家宏',
  '楊明翰',
  '郭家宏的品牌「雞百分」拓展連鎖加盟，引薦楊明翰協助導入產品責任保險，讓總部與加盟主對接投保，建立食安防線。',
  NULL,
  NULL,
  NULL,
  NOW(),
  NOW()
WHERE NOT EXISTS (
  SELECT 1 FROM public.referrals r WHERE r.id = 'ref-010'
);

UPDATE public.referrals
SET
  title = '拉分衝刺，升學無懼',
  description = '劉懿德的孩子國三轉學，數學成績 C-，經王祈老師輔導一年後提升至 B+，段考班排第三。孩子找回自信與學習方向。',
  metrics = '{"amount":"成績顯著進步","type":"升學輔導"}'::jsonb,
  referrer_name = '劉懿德',
  referee_name = '王祈',
  referrer_story = '劉懿德的孩子國三轉學，數學成績 C-，經王祈老師輔導一年後提升至 B+，段考班排第三。孩子找回自信與學習方向。',
  referrer_testimonial = NULL,
  referee_story = NULL,
  referee_value = NULL
WHERE id = 'ref-011';

INSERT INTO public.referrals (
  id, title, description, metrics,
  referrer_name, referee_name,
  referrer_story, referrer_testimonial,
  referee_story, referee_value,
  "createdAt", created_at
)
SELECT
  'ref-011',
  '拉分衝刺，升學無懼',
  '劉懿德的孩子國三轉學，數學成績 C-，經王祈老師輔導一年後提升至 B+，段考班排第三。孩子找回自信與學習方向。',
  '{"amount":"成績顯著進步","type":"升學輔導"}'::jsonb,
  '劉懿德',
  '王祈',
  '劉懿德的孩子國三轉學，數學成績 C-，經王祈老師輔導一年後提升至 B+，段考班排第三。孩子找回自信與學習方向。',
  NULL,
  NULL,
  NULL,
  NOW(),
  NOW()
WHERE NOT EXISTS (
  SELECT 1 FROM public.referrals r WHERE r.id = 'ref-011'
);

UPDATE public.referrals
SET
  title = '🏡 豪宅開箱 聲量倍增',
  description = '江學洋為弘第家具做品牌規劃時，得知客戶有自媒體需求，立即引薦黃昱歆。因精準對接，一週內成交年度規劃，目前已續約四次。',
  metrics = '{"amount":"已續約四次","type":"自媒體經營規劃"}'::jsonb,
  referrer_name = '江學洋',
  referee_name = '黃昱歆',
  referrer_story = '江學洋為弘第家具做品牌規劃時，得知客戶有自媒體需求，立即引薦黃昱歆。因精準對接，一週內成交年度規劃，目前已續約四次。',
  referrer_testimonial = NULL,
  referee_story = NULL,
  referee_value = NULL
WHERE id = 'ref-012';

INSERT INTO public.referrals (
  id, title, description, metrics,
  referrer_name, referee_name,
  referrer_story, referrer_testimonial,
  referee_story, referee_value,
  "createdAt", created_at
)
SELECT
  'ref-012',
  '🏡 豪宅開箱 聲量倍增',
  '江學洋為弘第家具做品牌規劃時，得知客戶有自媒體需求，立即引薦黃昱歆。因精準對接，一週內成交年度規劃，目前已續約四次。',
  '{"amount":"已續約四次","type":"自媒體經營規劃"}'::jsonb,
  '江學洋',
  '黃昱歆',
  '江學洋為弘第家具做品牌規劃時，得知客戶有自媒體需求，立即引薦黃昱歆。因精準對接，一週內成交年度規劃，目前已續約四次。',
  NULL,
  NULL,
  NULL,
  NOW(),
  NOW()
WHERE NOT EXISTS (
  SELECT 1 FROM public.referrals r WHERE r.id = 'ref-012'
);

UPDATE public.referrals
SET
  title = '🔧 設備升級，工地三連裝',
  description = '廖涌辰得知球友（工地圍籬業者）有安裝 LED 電子看板的急迫需求，引薦施秉辰。裝機當天建設公司非常滿意，立刻推薦給其他部門，連續成交三個工地。',
  metrics = '{"amount":"連續三個工地訂單","type":"LED 電子看板安裝"}'::jsonb,
  referrer_name = '廖涌辰',
  referee_name = '施秉辰',
  referrer_story = '廖涌辰得知球友（工地圍籬業者）有安裝 LED 電子看板的急迫需求，引薦施秉辰。裝機當天建設公司非常滿意，立刻推薦給其他部門，連續成交三個工地。',
  referrer_testimonial = NULL,
  referee_story = NULL,
  referee_value = NULL
WHERE id = 'ref-013';

INSERT INTO public.referrals (
  id, title, description, metrics,
  referrer_name, referee_name,
  referrer_story, referrer_testimonial,
  referee_story, referee_value,
  "createdAt", created_at
)
SELECT
  'ref-013',
  '🔧 設備升級，工地三連裝',
  '廖涌辰得知球友（工地圍籬業者）有安裝 LED 電子看板的急迫需求，引薦施秉辰。裝機當天建設公司非常滿意，立刻推薦給其他部門，連續成交三個工地。',
  '{"amount":"連續三個工地訂單","type":"LED 電子看板安裝"}'::jsonb,
  '廖涌辰',
  '施秉辰',
  '廖涌辰得知球友（工地圍籬業者）有安裝 LED 電子看板的急迫需求，引薦施秉辰。裝機當天建設公司非常滿意，立刻推薦給其他部門，連續成交三個工地。',
  NULL,
  NULL,
  NULL,
  NOW(),
  NOW()
WHERE NOT EXISTS (
  SELECT 1 FROM public.referrals r WHERE r.id = 'ref-013'
);
COMMIT;
