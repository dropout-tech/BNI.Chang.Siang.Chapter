export const ADMIN_EMAILS = [
    'b1993614@gmail.com',
    'info@dropout.tw',
    'gg.gg2858@gmail.com',
    'lauraliuanny@gmail.com',
    'qoo77313@gmail.com',
] as const;

export function isAdminEmail(email: string | null | undefined): boolean {
    const normalized = email?.trim().toLowerCase();
    return !!normalized && ADMIN_EMAILS.includes(normalized as (typeof ADMIN_EMAILS)[number]);
}

