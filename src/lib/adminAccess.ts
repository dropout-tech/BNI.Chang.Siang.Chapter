/** 可直接使用後台、不需認領會員帳號的管理員 Email */
export const BYPASS_CLAIM_ADMIN_EMAILS = [
    'b1993614@gmail.com',
    'info@dropout.tw',
] as const;

/** 需先認領會員帳號後才啟用管理員權限的 Email */
export const ADMIN_EMAILS = [
    ...BYPASS_CLAIM_ADMIN_EMAILS,
    'gg.gg2858@gmail.com', // 林宗平
    'lauraliuanny@gmail.com',
    'qoo77313@gmail.com',
] as const;

/** 後台「系統維運團隊」顯示名單 */
export const SYSTEM_SUPPORT_TEAM = [
    { name: '李孟一', role: '系統管理員' },
    { name: '琢奧科技', role: '網站開發維護' },
    { name: '林宗平', role: '系統管理員' },
] as const;

function normalizeEmail(email: string | null | undefined): string {
    return email?.trim().toLowerCase() ?? '';
}

export function isBypassClaimAdminEmail(email: string | null | undefined): boolean {
    const normalized = normalizeEmail(email);
    return !!normalized && BYPASS_CLAIM_ADMIN_EMAILS.includes(normalized as (typeof BYPASS_CLAIM_ADMIN_EMAILS)[number]);
}

export function isAdminEmail(email: string | null | undefined): boolean {
    const normalized = normalizeEmail(email);
    return !!normalized && ADMIN_EMAILS.includes(normalized as (typeof ADMIN_EMAILS)[number]);
}

