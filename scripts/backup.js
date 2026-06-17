/**
 * InsForge Database Backup Script
 *
 * Usage:
 *   node scripts/backup.js
 *
 * Requires environment variables (or a .env file via dotenv):
 *   VITE_INSFORGE_URL   — InsForge project URL
 *   VITE_INSFORGE_ANON_KEY — InsForge anon key
 *
 * Output:
 *   backups/YYYY-MM-DD.json  (overwrites if already exists)
 *
 * Skipped tables (high-volume analytics):
 *   analytics_events, page_views
 */

import { readFileSync, writeFileSync, mkdirSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, '..');

// ── Load .env manually (no dotenv dependency needed) ──────────────
function loadEnv() {
    try {
        const env = readFileSync(resolve(ROOT, '.env'), 'utf8');
        for (const line of env.split('\n')) {
            const [k, ...v] = line.split('=');
            if (k && !k.startsWith('#') && !process.env[k.trim()]) {
                process.env[k.trim()] = v.join('=').trim().replace(/^["']|["']$/g, '');
            }
        }
    } catch { /* .env not found, rely on process.env */ }
}
loadEnv();

const BASE_URL = process.env.VITE_INSFORGE_URL;
const ANON_KEY = process.env.VITE_INSFORGE_ANON_KEY;

if (!BASE_URL || !ANON_KEY) {
    console.error('❌  VITE_INSFORGE_URL 或 VITE_INSFORGE_ANON_KEY 未設定');
    console.error('   請確認 .env 檔案或環境變數已正確設定');
    process.exit(1);
}

// ── InsForge uses /api/database/records/{table} (PostgREST-compatible)
async function fetchTable(table, options = {}) {
    const { order = '', select = '*', limit = '' } = options;
    const params = new URLSearchParams({ select });
    if (order) params.set('order', order);
    if (limit) params.set('limit', limit);

    const url = `${BASE_URL}/api/database/records/${table}?${params}`;

    const res = await fetch(url, {
        headers: {
            'Authorization': `Bearer ${ANON_KEY}`,
            'Accept': 'application/json',
        },
    });

    if (!res.ok) {
        const text = await res.text();
        throw new Error(`[${table}] HTTP ${res.status}: ${text.slice(0, 200)}`);
    }
    return res.json();
}

// ── Tables to back up ─────────────────────────────────────────────
const TABLES = [
    { name: 'members',               order: 'idx.asc' },
    { name: 'referrals',             order: 'created_at.asc' },
    { name: 'faqs',                  order: 'sort_order.asc' },
    { name: 'events',                order: 'sort_order.asc' },
    { name: 'chapter_roles',         order: 'sort_order.asc' },
    { name: 'homepage_stats',        order: 'month.asc' },
    { name: 'member_traffic_scores', order: 'member_id.asc,month.asc' },
    { name: 'audit_logs',            order: 'created_at.desc', limit: '500' },
];

// ── Main ──────────────────────────────────────────────────────────
async function main() {
    const today = new Date().toISOString().slice(0, 10);
    const outDir = resolve(ROOT, 'backups');
    const outFile = resolve(outDir, `${today}.json`);

    console.log(`📦  InsForge 備份開始 — ${today}`);
    console.log(`    目標: ${outFile}\n`);

    mkdirSync(outDir, { recursive: true });

    const backup = { _meta: { backup_at: new Date().toISOString(), tables: {} } };

    for (const { name, order, limit } of TABLES) {
        process.stdout.write(`  ▸ ${name.padEnd(26)} `);
        try {
            const rows = await fetchTable(name, { order, limit });
            backup[name] = rows;
            backup._meta.tables[name] = rows.length;
            console.log(`✅  ${rows.length} 筆`);
        } catch (err) {
            backup[name] = [];
            backup._meta.tables[name] = `ERROR: ${err.message}`;
            console.log(`❌  失敗 — ${err.message}`);
        }
    }

    writeFileSync(outFile, JSON.stringify(backup, null, 2), 'utf8');
    console.log(`\n✨  備份完成 → ${outFile}`);

    const totalRows = Object.values(backup._meta.tables)
        .filter(v => typeof v === 'number')
        .reduce((a, b) => a + b, 0);
    console.log(`   共備份 ${totalRows} 筆資料，${TABLES.length} 個資料表`);
}

main().catch(err => {
    console.error('\n💥  備份失敗:', err.message);
    process.exit(1);
});
