import { insforge, isBackendConfigured } from './insforge';
import { isAdminEmail, isBypassClaimAdminEmail } from './adminAccess';

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
 * 後台權限：
 * 1) BYPASS_CLAIM 信箱可直接進後台；
 * 2) 已認領且 is_admin === true；
 * 3) 已認領且 Email 在白名單內。
 */
export function hasAdminAccess(user: AuthLikeUser | null | undefined, linkedMember: LinkedMemberAccount | null): boolean {
    if (!user) return false;
    if (isBypassClaimAdminEmail(user.email)) return true;
    if (!linkedMember) return false;
    return linkedMember.is_admin === true || isAdminEmail(user.email);
}
