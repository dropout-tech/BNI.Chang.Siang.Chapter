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

export function hasAdminAccess(user: AuthLikeUser | null | undefined, linkedMember: LinkedMemberAccount | null): boolean {
    if (!user || !linkedMember) return false;
    return isAdminEmail(user.email) || linkedMember.is_admin === true;
}
