import fs from 'fs';
import path from 'path';

const root = process.cwd();
const members = JSON.parse(fs.readFileSync(path.join(root, 'data/members.json'), 'utf8')).members ?? [];
const referrals = JSON.parse(fs.readFileSync(path.join(root, 'data/referrals.json'), 'utf8')).referrals ?? [];

function esc(value) {
  return String(value ?? '').replace(/'/g, "''");
}

function sqlText(value) {
  return value == null || value === '' ? 'NULL' : `'${esc(value)}'`;
}

function sqlJson(value, fallback) {
  return `'${esc(JSON.stringify(value ?? fallback))}'::jsonb`;
}

const lines = [];
lines.push('BEGIN;');

members.forEach((member, index) => {
  const id = Number(member.id) || 100001 + index;
  const photoPosition = member.photoPosition || 'center';
  const links = member.links ?? {};
  const services = Array.isArray(member.services) ? member.services : [];
  const hashtags = Array.isArray(member.hashtags) ? member.hashtags : [];

  lines.push(`
UPDATE public.members
SET
  company = ${sqlText(member.company)},
  position = ${sqlText(member.position)},
  title = ${sqlText(member.title)},
  industry = ${sqlText(member.industry)},
  category = ${sqlText(member.category)},
  "shortIntro" = ${sqlText(member.shortIntro)},
  "fullIntro" = ${sqlText(member.fullIntro)},
  photo = ${sqlText(member.photo)},
  "photoPosition" = ${sqlText(photoPosition)},
  services = ${sqlJson(services, [])},
  hashtags = ${sqlJson(hashtags, [])},
  links = ${sqlJson(links, {})},
  "editCount" = COALESCE("editCount", 0),
  "updatedAt" = NOW(),
  phone = ${sqlText(member.phone)},
  email = ${sqlText(member.email)},
  status = 'active'
WHERE name = '${esc(member.name)}';

INSERT INTO public.members (
  id, name, company, position, title, industry, category,
  "shortIntro", "fullIntro", photo, "photoPosition",
  services, hashtags, links, "editCount", "createdAt", "updatedAt", phone, email, status
)
SELECT
  ${id},
  '${esc(member.name)}',
  ${sqlText(member.company)},
  ${sqlText(member.position)},
  ${sqlText(member.title)},
  ${sqlText(member.industry)},
  ${sqlText(member.category)},
  ${sqlText(member.shortIntro)},
  ${sqlText(member.fullIntro)},
  ${sqlText(member.photo)},
  ${sqlText(photoPosition)},
  ${sqlJson(services, [])},
  ${sqlJson(hashtags, [])},
  ${sqlJson(links, {})},
  0,
  NOW(),
  NOW(),
  ${sqlText(member.phone)},
  ${sqlText(member.email)},
  'active'
WHERE NOT EXISTS (
  SELECT 1 FROM public.members m WHERE m.name = '${esc(member.name)}'
);`);
});

referrals.forEach((referral) => {
  lines.push(`
UPDATE public.referrals
SET
  title = ${sqlText(referral.title)},
  description = ${sqlText(referral.description)},
  metrics = ${sqlJson(referral.metrics, {})},
  referrer_name = ${sqlText(referral.referrer?.name)},
  referee_name = ${sqlText(referral.referee?.name)},
  referrer_story = ${sqlText(referral.referrer?.story)},
  referrer_testimonial = ${sqlText(referral.referrer?.testimonial)},
  referee_story = ${sqlText(referral.referee?.story)},
  referee_value = ${sqlText(referral.referee?.value)}
WHERE id = '${esc(referral.id)}';

INSERT INTO public.referrals (
  id, title, description, metrics,
  referrer_name, referee_name,
  referrer_story, referrer_testimonial,
  referee_story, referee_value,
  "createdAt", created_at
)
SELECT
  '${esc(referral.id)}',
  ${sqlText(referral.title)},
  ${sqlText(referral.description)},
  ${sqlJson(referral.metrics, {})},
  ${sqlText(referral.referrer?.name)},
  ${sqlText(referral.referee?.name)},
  ${sqlText(referral.referrer?.story)},
  ${sqlText(referral.referrer?.testimonial)},
  ${sqlText(referral.referee?.story)},
  ${sqlText(referral.referee?.value)},
  NOW(),
  NOW()
WHERE NOT EXISTS (
  SELECT 1 FROM public.referrals r WHERE r.id = '${esc(referral.id)}'
);`);
});

lines.push('COMMIT;');

const outputPath = path.join(root, '.cursor-extract', 'upsert-site-data.sql');
fs.writeFileSync(outputPath, `${lines.join('\n')}\n`, 'utf8');
console.log(`Wrote ${outputPath}`);
console.log(`members=${members.length} referrals=${referrals.length}`);
