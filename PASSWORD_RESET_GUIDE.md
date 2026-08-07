# 忘記密碼／重設密碼使用教學

本站帳號驗證由 **InsForge Auth** 處理。後台若設定為寄送「六碼驗證碼」（`resetPasswordMethod = code`），會員必須在網站輸入驗證碼後才能設定新密碼。

## 會員操作步驟（六碼驗證碼）

1. 開啟網站 **[會員登入](/login)** 頁面。
2. 點選 **「忘記密碼？」**。
3. 輸入註冊時使用的 Email，按 **「發送重設信」**。
4. 系統會自動進入 **「輸入驗證碼」** 畫面。
5. 到信箱找尋主旨含 Reset Password／重設密碼的信件，複製 **六碼數字**（Reset Password Code）。
6. 回到網站，在 **六碼驗證碼** 欄位輸入後，按 **「驗證並繼續」**。
7. 驗證成功後，設定 **新密碼**（至少 8 字元，需含英文與數字）並再確認一次。
8. 按 **「更新密碼」**，完成後用新密碼登入。

### 若已有驗證碼、但畫面還在「忘記密碼」

點選 **「已收到驗證碼？直接輸入六碼」**，輸入 Email 與六碼即可。

### 若沒收到信或驗證碼過期

在「輸入驗證碼」畫面點 **「重新寄送驗證碼」**，或回到「忘記密碼」重新申請。

### 若信中是連結而不是六碼

直接點擊信中連結；網站會自動開啟「設定新密碼」畫面。此為 InsForge `link` 模式，與六碼模式可並存於不同後台設定。

---

## 管理員注意事項（InsForge）

| 項目 | 說明 |
|------|------|
| `resetPasswordMethod` | `code`：寄六碼（本站已支援輸入畫面）；`link`：寄重設連結 |
| `allowedRedirectUrls` | 若使用 `link`，需加入站台 `/login` 完整網址 |
| 郵件內容 | 六碼信件標題／內文由 InsForge 寄出，不在本專案內 |

建議：若多數會員習慣點連結，可在 InsForge Dashboard 改為 `link`；若維持 `code`，請引導會員使用「輸入驗證碼」步驟。

---

## 技術流程（開發者）

```
忘記密碼
  → sendResetPasswordEmail({ email, redirectTo })
  →（code 模式）使用者輸入六碼
  → exchangeResetPasswordToken({ email, code }) → token
  → resetPassword({ newPassword, otp: token })
```

主要實作位置：`src/pages/Login.tsx`

- `forgot`：寄信
- `enter_reset_code`：輸入六碼並換取 token
- `reset_password`：設定新密碼（連結回跳或六碼換票後共用）
