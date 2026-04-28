/**
 * 產生「完整公開網址」供 InsForge 驗證信、OAuth、重設密碼回跳使用。
 * 必須包含 Vite `base`（例如 GitHub Pages 子路徑），且與 InsForge 後台允許的 redirect URL 一致。
 */
export function getAuthRedirectUrl(pathWithQuery: string): string {
    const base = import.meta.env.BASE_URL || '/';
    const normalizedBase = base.endsWith('/') ? base : `${base}/`;
    const relative = pathWithQuery.replace(/^\//, '');
    return new URL(relative, window.location.origin + normalizedBase).href;
}
