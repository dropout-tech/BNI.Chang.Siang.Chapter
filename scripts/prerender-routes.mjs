// Post-build step for static hosting (Cloudflare Pages): writes one HTML file per SEO / noindex route
// so each URL gets the same <head> that server.js injects at request time.
// Files are written as dist/<route>.html (not dist/<route>/index.html) so `/bni` is served without a
// trailing-slash redirect. No dist/404.html is written: Pages then falls back to dist/index.html for
// dynamic routes such as /members/:id.
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import seoRoutes from '../seo-routes.js';
import { injectSeoMeta, injectNoindex, NOINDEX_ROUTES } from '../seo-render.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DIST = path.join(__dirname, '..', 'dist');
const indexPath = path.join(DIST, 'index.html');

if (!fs.existsSync(indexPath)) {
    console.error('prerender-routes: dist/index.html not found — run `vite build` first.');
    process.exit(1);
}

const template = fs.readFileSync(indexPath, 'utf-8');

function writeRoute(routePath, html) {
    const file = routePath === '/' ? indexPath : path.join(DIST, `${routePath.slice(1)}.html`);
    fs.mkdirSync(path.dirname(file), { recursive: true });
    fs.writeFileSync(file, html);
    console.log(`prerender-routes: ${routePath} → ${path.relative(DIST, file)}`);
}

for (const routePath of Object.keys(seoRoutes)) {
    writeRoute(routePath, injectSeoMeta(template, routePath));
}

for (const routePath of NOINDEX_ROUTES) {
    writeRoute(routePath, injectNoindex(template));
}
