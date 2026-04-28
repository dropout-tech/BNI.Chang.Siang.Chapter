
/**
 * InsForge 後台資料表 DDL 已移至同目錄：
 *   scripts/insforge-schema.sql
 *
 * 請在 InsForge（或 Postgres）SQL Editor 貼上並執行該檔案。
 * 舊版 Supabase 專用說明請見 scripts/supabase-rls.sql（若仍使用 Supabase）。
 */

import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import path from 'path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const sqlPath = path.join(__dirname, 'insforge-schema.sql');

console.log(`
============================================================
InsForge 後台資料庫結構（homepage_stats / referrals / members 等）
============================================================
請將以下檔案內容貼到 InsForge Database → SQL Editor 執行：

  ${sqlPath}

--- 檔案開頭預覽 ---`);
try {
    const sql = readFileSync(sqlPath, 'utf8');
    const preview = sql.split('\n').slice(0, 25).join('\n');
    console.log(preview);
    console.log('...\n');
} catch (e) {
    console.error('無法讀取 insforge-schema.sql:', e.message);
}
