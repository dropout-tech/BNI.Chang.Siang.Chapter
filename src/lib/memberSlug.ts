export function makeMemberSlug(name: string, id?: number | string): string {
    const base = (name || 'member')
        .trim()
        .replace(/\s+/g, '-')
        .replace(/[/?#%]+/g, '-')
        .replace(/^-+|-+$/g, '') || 'member';

    return id ? base : `${base}-${Math.random().toString(36).slice(2, 8)}`;
}

export function getMemberPath(member: { id: number | string; name: string; slug?: string | null }): string {
    return `/member/${member.slug || makeMemberSlug(member.name, member.id)}`;
}

export function decodeMemberParam(param: string | undefined): string {
    if (!param) return '';
    try {
        return decodeURIComponent(param);
    } catch {
        return param;
    }
}

