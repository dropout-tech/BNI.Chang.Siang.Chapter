const BASE = import.meta.env.BASE_URL.replace(/\/$/, '');

export function assetUrl(path: string): string {
    if (!path) return `${BASE}/images/assets/logo/bni-logo-new.png`;
    if (path.startsWith('http')) return path;
    const cleanPath = path.startsWith('/') ? path : `/${path}`;
    return `${BASE}${cleanPath}`;
}
