/**
 * 從 markitdown 轉出的例會 PPTX Markdown 擷取「會員每週商務簡報」投影片，
 * 輸出與 data/pdf-chain-members.json 相同形狀，可再接 generate-pdf-chain-members-sql.mjs。
 *
 *   node scripts/meeting-weekly-md-to-json.mjs .cursor-extract/meeting14-pptx.md data/meeting14-weekly-members.json
 *
 * 前置：python -m markitdown "簡報.pptx" -o .cursor-extract/meeting14-pptx.md
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const CHAIN_BY_CATEGORY = {
    健康醫療: '健康醫療產業鍊',
    工程裝修: '工程裝修產業鍊',
    企業服務: '企業服務產業鍊',
    生活消費: '消費生活產業鍊',
    資產管理: '資產管理產業鍊',
};

/** 與既有 members / pdf-chain 用字對齊 */
function normalizeName(s) {
    return String(s || '')
        .replace(/^陳啟人$/, '陳啓人')
        .trim();
}

function normalizeSpecialty(lines) {
    const parts = lines
        .map((l) => l.replace(/\s+/g, ' ').trim())
        .filter(Boolean);
    // 去掉重複姓名、純頭銜尾註
    const out = [];
    for (const p of parts) {
        if (/博士$/.test(p) && p.length < 10) continue;
        if (/^亞洲十大名師$/.test(p)) continue;
        if (/^勞資雙贏權威$/.test(p)) continue;
        out.push(p);
    }
    return out
        .join(' ')
        .replace(/\s+/g, ' ')
        .replace(/負離子\s+衣物寢具/g, '負離子衣物寢具')
        .trim();
}

function detectChain(line) {
    const compact = line.replace(/\s/g, '');
    if (compact.includes('健康醫療')) return CHAIN_BY_CATEGORY.健康醫療;
    if (compact.includes('工程裝修')) return CHAIN_BY_CATEGORY.工程裝修;
    if (compact.includes('企業服務')) return CHAIN_BY_CATEGORY.企業服務;
    if (compact.includes('生活消費')) return CHAIN_BY_CATEGORY.生活消費;
    if (compact.includes('資產管理')) return CHAIN_BY_CATEGORY.資產管理;
    return null;
}

function parseSlides(md) {
    const slideRe = /<!-- Slide number: (\d+) -->([\s\S]*?)(?=<!-- Slide number: \d+ -->|$)/g;
    const slides = new Map();
    let m;
    while ((m = slideRe.exec(md)) !== null) {
        slides.set(Number(m[1]), m[2]);
    }
    return slides;
}

function extractWeeklyRows(slideBody) {
    const rawLines = slideBody.split('\n');
    const lines = [];
    for (const raw of rawLines) {
        const t = raw.trim();
        if (!t || t.startsWith('![](') || t === '### Notes:') continue;
        lines.push(t);
    }

    const prepIdx = lines.findIndex((l) => l === '請準備');
    /** 最後一位講員投影片可能沒有「請準備」 */
    const isLastSlide = prepIdx < 0;

    let before;
    if (isLastSlide) {
        const catIdxEarly = lines.findIndex((l) => detectChain(l));
        if (catIdxEarly < 1) return null;
        before = lines.slice(0, catIdxEarly);
    } else {
        if (prepIdx < 1) return null;
        before = lines.slice(0, prepIdx - 1);
    }

    let slogan = '';
    const referralParts = [];
    let inReferral = false;

    for (const l of before) {
        if (l.startsWith('引薦對象')) {
            inReferral = true;
            referralParts.push(l.replace(/^引薦對象\s*/, '').trim());
            continue;
        }
        if (inReferral) {
            if (l.includes('請準備')) break;
            if (l === '簡報結束') break;
            referralParts.push(l);
            continue;
        }
        if (!slogan && l.length >= 4 && !l.startsWith('客戶代表')) {
            slogan = l;
        }
    }

    const after = isLastSlide ? lines : lines.slice(prepIdx + 1);
    const catIdx = after.findIndex((l) => detectChain(l));
    if (catIdx < 0) return null;

    const chain = detectChain(after[catIdx]);
    const nameLine = after[catIdx + 1];
    const specialtyLines = after.slice(catIdx + 2);

    const name = normalizeName(nameLine);
    const specialty = normalizeSpecialty(specialtyLines);

    const referralTargets = referralParts
        .join(' ')
        .replace(/\s+/g, ' ')
        .replace(/、/g, '/')
        .replace(/，/g, '/')
        .replace(/\s*\/\s*/g, '/')
        .trim();

    const row = { chain, name, specialty, referralTargets, slogan };
    if (!isLastSlide) {
        const nextSpeaker = lines[prepIdx - 1].replace(/請準備\s*$/, '').trim();
        row._nextSpeaker = nextSpeaker;
    }
    return row;
}

function main() {
    const inPath = path.resolve(process.argv[2] || path.join(__dirname, '..', '.cursor-extract', 'meeting14-pptx.md'));
    const outPath = path.resolve(process.argv[3] || path.join(__dirname, '..', 'data', 'meeting14-weekly-members.json'));

    if (!fs.existsSync(inPath)) {
        console.error('找不到輸入檔:', inPath);
        process.exit(1);
    }

    const md = fs.readFileSync(inPath, 'utf8');
    const slides = parseSlides(md);
    const rows = [];
    for (let n = 69; n <= 107; n++) {
        const body = slides.get(n);
        if (!body) continue;
        const row = extractWeeklyRows(body);
        if (row && row.chain && row.name) {
            delete row._nextSpeaker;
            rows.push(row);
        }
    }

    fs.mkdirSync(path.dirname(outPath), { recursive: true });
    fs.writeFileSync(outPath, JSON.stringify(rows, null, 2), 'utf8');
    console.log('已寫入', outPath, '筆數:', rows.length);
}

main();
