/** 產生 referrals 表所需的唯一 id（TEXT NOT NULL，無 DB default） */
export function createReferralId(): string {
    if (typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function') {
        return `ref-${crypto.randomUUID()}`;
    }
    return `ref-${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;
}
