# BNI 長翔名人堂白金分會 — 官方網站

> **長翔展翼，商機無限** — 匯聚各產業精英的金質商務交流平台

## 專案簡介

本專案為 BNI 長翔名人堂白金分會的官方網站，採用 Next.js 14 + Tailwind CSS 建置，呈現高端商務、專業信賴的視覺形象。

## 設計風格

- **主色**：深海藍 (`#102A43`) — 代表專業、沉穩、信任
- **輔助色**：香檳金 (`#D4AF37`) — 代表尊貴、成功、價值
- **強調色**：純淨白 (`#FFFFFF`) — 確保清晰度
- **關鍵元素**：抽象幾何波浪、拉絲金屬質感、顆粒紋理、金色箭頭 (>>>) 點綴

## 頁面架構

| 路徑 | 頁面 | 說明 |
|------|------|------|
| `/` | 首頁 | Hero + 各區塊預覽 |
| `/about-bni` | 什麼是 BNI | BNI 特色、功能、核心價值 |
| `/about-us` | 關於長翔 | 長翔故事、優勢、產業鏈 |
| `/partners` | 長翔夥伴 | 成員列表，可點擊查看個人頁 |
| `/partners/[id]` | 夥伴個人頁 | 姓名、產業、專業介紹 |
| `/achievements` | 引薦實績 | 數據統計 + 引薦故事 |
| `/events` | 活動紀錄 | Power Day、BOD、尾牙春酒等 |

## 技術棧

- **框架**：Next.js 16 (App Router)
- **語言**：TypeScript
- **樣式**：Tailwind CSS v4
- **動畫**：Framer Motion
- **圖示**：Lucide React

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

## 自訂內容

### 更新夥伴資料
編輯 `src/data/partners.ts` 填入實際成員資訊。

### 更新引薦實績
編輯 `src/data/achievements.ts` 更新數據與故事。

### 更新活動紀錄
編輯 `src/data/events.ts` 新增活動。

## 連結

- [Facebook 粉專](https://www.facebook.com/BNI.Chang.Siang.Chapter/)
