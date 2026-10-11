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

### 方案 A：Zeabur + Cloudflare DNS（正式站 `changsiang.tw` 使用中）

正式站由 Zeabur 提供服務，Cloudflare 只負責 DNS（可選 CDN）。本專案**不再使用 GitHub Pages**。

1. [Zeabur](https://zeabur.com) 連接 GitHub repo（會使用根目錄的 `Dockerfile` 建置，push 到 `main` 即自動部署）
2. Variables 設定 `INSFORGE_URL`、`INSFORGE_ANON_KEY`（或使用 Zeabur 的 InsForge 原生綁定自動注入）。`server.js` 會在 runtime 注入瀏覽器，不需在 build 階段提供
3. 先用 Zeabur 產生的 `*.zeabur.app` 網址確認網站可正常開啟
4. 服務的 Domains → Custom Domain 新增 `changsiang.tw` 與 `www.changsiang.tw`，記下 Zeabur 提供的 CNAME 目標（例如 `tpe1.clusters.zeabur.com`）
5. Cloudflare → DNS → Records：
   - 刪除 `changsiang.tw` 舊的 A / CNAME 記錄（例如指向 GitHub Pages `185.199.x.x` 的記錄）
   - `CNAME  @    → <Zeabur CNAME 目標>`（根網域可直接用 CNAME，Cloudflare 會自動 CNAME Flattening）
   - `CNAME  www  → <Zeabur CNAME 目標>`
   - 首次設定建議先用灰雲（DNS only），待 Zeabur 顯示網域生效後再視需要開橘雲
6. 若開啟橘雲（Cloudflare Proxy）：SSL/TLS 模式請選 **Full**，**不可選 Full (Strict)**，否則會因 Zeabur 自簽憑證導致連線失敗（Cloudflare 回 5xx）
7. `www` 轉址請用 Zeabur 的「Redirect to another domain」或 Cloudflare Redirect Rule，並確認目標網域拼字正確
8. InsForge 後台將 `https://changsiang.tw/login`、`https://changsiang.tw/member-edit?reset=true` 加入回跳允許清單

> `dist/` 不納入 git，一律由 Zeabur 依 `Dockerfile` 從原始碼建置（`npm ci` 鎖定 `package-lock.json` 版本）。新增或升級套件後務必一併提交 `package-lock.json`。
>
> 舊的會員照片網址 `https://changsiang.tw/BNI.Chang.Siang.Chapter/...` 仍由 `server.js` 的 `LEGACY_BASE_PATH` 自動轉回根路徑，請勿移除該設定。

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
  -e INSFORGE_URL=https://your-app.insforge.app \
  -e INSFORGE_ANON_KEY=your_anon_key \
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
