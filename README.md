# BNI 長翔名人堂白金分會 — 官方網站

> **長翔展翼，商機無限** — 匯聚各產業精英的金質商務交流平台

## 專案簡介

本專案基於 [EverShine](https://github.com/dropout-tech/EverShine) 模板，為 BNI 長翔名人堂白金分會打造專屬的官方網站。

## 技術棧

- **前端**：React 19 + Vite 7 + Tailwind CSS 4
- **後端/資料庫**：Supabase (PostgreSQL + Auth + Storage + RLS)
- **部署**：支援 Zeabur / Vercel / Railway / 自架 VPS

## 設計風格

- **核心主題**：「長翔展翼，商機無限」
- **配色方案**：深海藍 (`#102A43`) + 香檳金 (`#D4AF37`) + 純淨白 (`#FFFFFF`)
- **關鍵元素**：抽象幾何波浪、拉絲金屬質感、金色箭頭裝飾

## 頁面架構

| 路徑 | 頁面 | 說明 |
|------|------|------|
| `/` | 首頁 | Hero + 關於 + 成員牆 + 實績 + BNI 介紹 + FAQ + 聯繫 |
| `/bni` | 認識 BNI | BNI 核心價值、全球數據 |
| `/members` | 長翔夥伴 | 成員列表，可編輯個人資料 |
| `/referrals` | 引薦實績 | 引薦案例展示 |
| `/privacy` | 隱私政策 | 隱私權政策與服務條款 |

## 開始使用

```bash
# 安裝依賴
npm install

# 開發模式
npm run dev

# 建置
npm run build

# 啟動
npm start
```

## 環境變數

複製 `.env.example` 為 `.env` 並填入：
- `VITE_SUPABASE_URL` — Supabase 專案 URL
- `VITE_SUPABASE_ANON_KEY` — Supabase Anon Key
- `VITE_CLAIM_PASSWORD` — 分會認領密碼

詳見 `CLONE_GUIDE.md` 完整部署指南。

## 品牌配置

核心配置檔位於 `src/config/site.config.ts`。

## 連結

- [Facebook 粉專](https://www.facebook.com/BNI.Chang.Siang.Chapter/)
