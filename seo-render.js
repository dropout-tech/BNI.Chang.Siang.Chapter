// Pure HTML transforms shared by server.js (Zeabur) and scripts/prerender-routes.mjs (Cloudflare Pages).
// Runtime config injection stays in server.js; prerendered files rely on build-time VITE_* env.
import seoRoutes from './seo-routes.js';

export const NOINDEX_ROUTES = ['/login', '/admin', '/member-edit'];

export function isNoindexRoute(routePath) {
    return NOINDEX_ROUTES.some(r => routePath.startsWith(r));
}

/** Returns html with per-route SEO meta; unknown routes return html unchanged (default meta). */
export function injectSeoMeta(html, routePath) {
    const seo = seoRoutes[routePath];
    if (!seo) return html;

    let result = html;

    result = result.replace(
        /<title>[^<]*<\/title>/,
        `<title>${seo.title}</title>`
    );

    result = result.replace(
        /<meta name="description" content="[^"]*"/,
        `<meta name="description" content="${seo.description}"`
    );

    result = result.replace(
        /<meta name="keywords" content="[^"]*"/,
        `<meta name="keywords" content="${seo.keywords}"`
    );

    result = result.replace(
        /<link rel="canonical" href="[^"]*"/,
        `<link rel="canonical" href="${seo.canonical}"`
    );

    result = result.replace(
        /<meta property="og:url" content="[^"]*"/,
        `<meta property="og:url" content="${seo.canonical}"`
    );

    result = result.replace(
        /<meta property="og:title" content="[^"]*"/,
        `<meta property="og:title" content="${seo.title}"`
    );

    result = result.replace(
        /<meta property="og:description" content="[^"]*"/,
        `<meta property="og:description" content="${seo.description}"`
    );

    result = result.replace(
        /<meta name="twitter:url" content="[^"]*"/,
        `<meta name="twitter:url" content="${seo.canonical}"`
    );

    result = result.replace(
        /<meta name="twitter:title" content="[^"]*"/,
        `<meta name="twitter:title" content="${seo.title}"`
    );

    result = result.replace(
        /<meta name="twitter:description" content="[^"]*"/,
        `<meta name="twitter:description" content="${seo.description}"`
    );

    return result;
}

export function injectNoindex(html) {
    return html.replace(
        '</head>',
        '  <meta name="robots" content="noindex, nofollow" />\n</head>'
    );
}
