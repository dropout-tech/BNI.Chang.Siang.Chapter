import { insforge, isBackendConfigured } from './insforge';
import { isAdminEmail } from './adminAccess';

type AuthLikeUser = {
    id: string;
    email?: string | null;
};

export type LinkedMemberAccount = {
    id: number | string;
    name?: string;
    is_admin?: boolean;
};

export async function getLinkedMemberAccount(user: AuthLikeUser | null | undefined): Promise<LinkedMemberAccount | null> {
    if (!user || !isBackendConfigured) return null;

    const { data, error } = await insforge.database
        .from('members')
        .select('id, name, is_admin')
        .eq('user_id', user.id)
        .maybeSingle();

    if (error || !data) return null;
    return data as LinkedMemberAccount;
}

/**
 * 後台權限：與 DB `is_admin()` 對齊——
 * 1) 白名單信箱（`adminAccess.ts`）可直接進後台，不需綁定 members；
 * 2) 已綁定 members 且 `is_admin === true` 者。
 */
export function hasAdminAccess(user: AuthLikeUser | null | undefined, linkedMember: LinkedMemberAccount | null): boolean {
    if (!user) return false;
    if (isAdminEmail(user.email)) return true;
    return linkedMember?.is_admin === true;
}
