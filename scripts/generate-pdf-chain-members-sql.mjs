/**
 * 由 data/pdf-chain-members.json 產生可在 InsForge SQL Editor 執行的 INSERT。
 * 僅插入「尚不存在同名」的會員（依 name），避免覆蓋既有完整資料。
 *
 *   node scripts/generate-pdf-chain-members-sql.mjs > scripts/pdf-chain-members-insert.sql
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const CHAIN_TO_CATEGORY = {
    '健康醫療產業鍊': '身心健康與醫療',
    '工程裝修產業鍊': '居住與空間工程',
    '企業服務產業鍊': '企業營運與法稅',
    '消費生活產業鍊': '品牌整合與行銷',
    '資產管理產業鍊': '金融財富與資產',
};

/** 與網站預設占位圖一致（請依部署網域調整） */
const DEFAULT_PHOTO =
    'https://changsiang.tw/BNI.Chang.Siang.Chapter/images/assets/logo/白色正方形logo.png';

const jsonPath = path.join(__dirname, '..', 'data', 'pdf-chain-members.json');
const rows = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));

function esc(s) {
    return String(s ?? '').replace(/'/g, "''");
}

function fullIntro(row) {
    return [
        `【五大產業】${row.chain}`,
        `【專業】${row.specialty}`,
        `【合作／引薦對象】${row.referralTargets}`,
        `【SLOGAN】${row.slogan}`,
        '',
        '資料來源：《長翔五大產業類別及Slogan》PDF（20260224）。',
    ].join('\n');
}

let baseId = 850001;

console.log(`-- 由 scripts/generate-pdf-chain-members-sql.mjs 產生`);
console.log(`-- ${new Date().toISOString()}`);
console.log(`-- 《長翔五大產業類別及Slogan》PDF → members（依姓名略過已存在者）`);
console.log(`-- 請在 InsForge Database → SQL Editor 貼上執行（通常具 postgres 權限會繞過 RLS）。`);
console.log(`BEGIN;\n`);

for (const row of rows) {
    const category = CHAIN_TO_CATEGORY[row.chain] || '永續發展與製造';
    const intro = fullIntro(row);
    const services = JSON.stringify([row.specialty]);
    const hashtags = JSON.stringify([row.chain.replace('產業鍊', '').trim()]);
    const id = baseId++;

    console.log(`INSERT INTO public.members (`);
    console.log(`  id, name, company, position, title, industry, category,`);
    console.log(`  "shortIntro", "fullIntro", photo, "photoPosition",`);
    console.log(`  services, hashtags, links, "createdAt", "updatedAt", status`);
    console.log(`)`);
    console.log(`SELECT`);
    console.log(`  ${id},`);
    console.log(`  '${esc(row.name)}',`);
    console.log(`  '長翔名人堂白金分會',`);
    console.log(`  '${esc(row.specialty)}',`);
    console.log(`  '${esc(row.specialty)}',`);
    console.log(`  '${esc(row.specialty)}',`);
    console.log(`  '${esc(category)}',`);
    console.log(`  '${esc(row.slogan)}',`);
    console.log(`  '${esc(intro)}',`);
    console.log(`  '${esc(DEFAULT_PHOTO)}',`);
    console.log(`  'center',`);
    console.log(`  '${esc(services)}'::jsonb,`);
    console.log(`  '${esc(hashtags)}'::jsonb,`);
    console.log(`  '{}'::jsonb,`);
    console.log(`  NOW(), NOW(),`);
    console.log(`  'active'`);
    console.log(`WHERE NOT EXISTS (`);
    console.log(`  SELECT 1 FROM public.members m WHERE m.name = '${esc(row.name)}'`);
    console.log(`);\n`);
}

console.log(`COMMIT;`);
