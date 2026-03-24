# BNI 長翔名人堂白金分會 — 部署指南

> **當前狀態：Demo 模式**（無 Supabase 後端，純前端展示）

---

## 快速啟動（Demo 模式）

### 本地預覽

```bash
# 1. 安裝依賴
npm install

# 2. 建置
npm run build

# 3. 啟動 server（含 SEO meta injection）
npm start
# → http://localhost:8080
```

### 開發模式（Hot Reload）

```bash
npm run dev
# → http://localhost:5173
```

> **重要：** 不可直接用瀏覽器開啟 `dist/index.html`。SPA 必須透過 HTTP server 提供服務。

---

## Demo 模式說明

目前網站在**無 Supabase 環境變數**的情況下運行：

- 所有頁面正常顯示（首頁、BNI 介紹、FAQ、聯繫等）
- 會員列表為空（需連接 Supabase 後才有資料）
- 引薦案例為空（同上）
- 登入/後台功能停用
- 引薦成果圖表使用示範資料

**Console 會出現：** `⚠️ Supabase 環境變數未設定，網站以 Demo 模式運行`，這是正常的。

---

## 部署選項

### 方案 A：Zeabur（推薦）

1. [Zeabur](https://zeabur.com) 連接 GitHub repo
2. 設定環境變數（見下方「環境變數」章節）
3. Build Command：`npm run build`
4. Start Command：`npm start`
5. 自動部署

### 方案 B：Vercel

1. Import GitHub repo
2. Framework Preset：**Other**
3. Build Command：`npm run build`
4. Output Directory：`dist`
5. 設定環境變數
6. **注意：** 需新增 `vercel.json` 處理 SPA routing：

```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
}
```

### 方案 C：Railway / Render

1. 連接 GitHub repo
2. Build Command：`npm install && npm run build`
3. Start Command：`npm start`
4. 設定環境變數

### 方案 D：自架 VPS / Docker

```bash
# 使用內建 Dockerfile
docker build -t bni-changsiang .
docker run -p 8080:8080 \
  -e VITE_SUPABASE_URL=your_url \
  -e VITE_SUPABASE_ANON_KEY=your_key \
  bni-changsiang
```

或直接：

```bash
npm install
npm run build
npm start  # 啟動 server.js（port 8080）
```

---

## 環境變數

### Demo 模式（目前）— 不需要任何環境變數

網站可直接 `npm run build && npm start` 運行。

### 正式上線 — 需設定 `.env`

複製 `.env.example` 為 `.env`：

```bash
cp .env.example .env
```

| 變數名 | 必要性 | 說明 |
|--------|--------|------|
| `VITE_SUPABASE_URL` | **必填** | Supabase 專案 URL |
| `VITE_SUPABASE_ANON_KEY` | **必填** | Supabase Anon Key |
| `VITE_CLAIM_PASSWORD` | **必填** | 會員認領帳號用的密碼 |
| `VITE_TURNSTILE_SITE_KEY` | 建議 | Cloudflare Turnstile 防機器人 |
| `VITE_GA_ID` | 可選 | Google Analytics 4 評估 ID |
| `VITE_FB_PIXEL_ID` | 可選 | Facebook Pixel ID |
| `VITE_CLARITY_ID` | 可選 | Microsoft Clarity Project ID |

---

## 上線前的下一步

完成 Demo 驗收後，需要按以下順序完成正式上線：

### 1. 建立 Supabase 專案

參照 `CLONE_GUIDE.md` 步驟 2，在 [supabase.com](https://supabase.com) 建立專案並執行資料庫 SQL。

### 2. 設定環境變數

將 Supabase URL 和 Anon Key 填入 `.env` 或部署平台的環境變數設定。

### 3. 匯入會員資料

在 Supabase Table Editor 匯入長翔分會的會員基本資料。

### 4. 建立管理員帳號

用 Email 註冊後，在 Supabase 中將該帳號的 `is_admin` 設為 `true`。

### 5. 執行 RLS 安全策略

執行 `scripts/supabase-rls.sql` 確保資料安全。

### 6. 替換 Logo 和品牌素材

將長翔專屬 Logo 放到 `public/images/assets/logo/`。

### 7. 設定網域 DNS

將 `changsiang.tw`（或您的網域）指向部署平台。

---

## SEO 架構

本網站已內建完整的 SEO 機制：

| 機制 | 說明 |
|------|------|
| Server-side Meta Injection | `server.js` 根據路由動態替換 `<title>`、`<meta description>`、OG tags |
| JSON-LD 結構化資料 | Organization + WebSite + ProfessionalService + FAQPage + Event |
| `<noscript>` 全文內容 | 不支援 JS 的爬蟲也能讀取完整內容 |
| `sitemap.xml` | 列出所有路由 |
| `robots.txt` | 指向 sitemap |
| Per-route SEO | 每個路由有獨立的 title / description / canonical / keywords |
| noindex 保護 | `/login`、`/admin`、`/member-edit` 自動加入 noindex |

### SEO 路由設定檔

- `seo-routes.js` — 各路由的 title / description / keywords / canonical
- `index.html` — 預設 meta tags + JSON-LD + noscript 內容

---

## 技術棧

- **前端：** React 19 + Vite 7 + Tailwind CSS 4
- **動畫：** Framer Motion
- **圖表：** Chart.js + react-chartjs-2
- **後端：** Supabase (PostgreSQL + Auth + Storage)
- **Server：** Node.js (server.js，含 SPA fallback + SEO injection)

---

## 檔案結構

```
├── src/
│   ├── config/site.config.ts   ← 核心品牌配置
│   ├── pages/                   ← 頁面元件
│   ├── components/              ← 共用元件
│   ├── hooks/                   ← 資料 hooks
│   ├── lib/                     ← Supabase、Analytics
│   └── contexts/                ← Auth Context
├── public/
│   ├── images/                  ← Logo、會員照片
│   ├── sitemap.xml
│   └── robots.txt
├── index.html                   ← 入口 HTML（含 SEO）
├── server.js                    ← Production server
├── seo-routes.js                ← SEO 路由配置
├── CLONE_GUIDE.md               ← 完整 Clone 部署指南
└── DEPLOY_GUIDE.md              ← 本文件
```
