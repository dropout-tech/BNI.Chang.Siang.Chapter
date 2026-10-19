import http from 'http';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import seoRoutes from './seo-routes.js';
import { injectSeoMeta, injectNoindex, isNoindexRoute } from './seo-render.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const PORT = process.env.PORT || 8080;
const DIST = path.join(__dirname, 'dist');
const PUBLIC_DIR = path.join(__dirname, 'public');
const LEGACY_BASE_PATH = '/BNI.Chang.Siang.Chapter';

console.log('Starting simple node server (v2.0 - SEO Enhanced)...');
console.log(`PORT: ${PORT}`);
console.log(`DIST directory: ${DIST}`);

if (!fs.existsSync(DIST)) {
    console.error('CRITICAL ERROR: DIST folder not found! Build process failed or output directory is wrong.');
    console.log('Current directory contents:', fs.readdirSync(__dirname));
    process.exit(1);
}

const mimeTypes = {
    '.html': 'text/html',
    '.js': 'text/javascript',
    '.css': 'text/css',
    '.json': 'application/json',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.webp': 'image/webp',
    '.gif': 'image/gif',
    '.svg': 'image/svg+xml',
    '.ico': 'image/x-icon',
    '.woff2': 'font/woff2',
    '.woff': 'font/woff',
    '.xml': 'application/xml',
    '.txt': 'text/plain'
};

const indexHtmlCache = fs.readFileSync(path.join(DIST, 'index.html'), 'utf-8');

function getRuntimePublicConfig() {
    return {
        INSFORGE_URL: process.env.VITE_INSFORGE_URL || process.env.INSFORGE_URL || process.env.INSFORGE_BASE_URL || '',
        INSFORGE_ANON_KEY: process.env.VITE_INSFORGE_ANON_KEY || process.env.INSFORGE_ANON_KEY || process.env.ANON_KEY || '',
    };
}

function injectRuntimeConfig(html) {
    const config = getRuntimePublicConfig();
    if (!config.INSFORGE_URL || !config.INSFORGE_ANON_KEY) {
        return html;
    }

    const script = `<script>window.__APP_CONFIG__=${JSON.stringify(config).replace(/</g, '\\u003c')};</script>`;
    return html.includes('window.__APP_CONFIG__')
        ? html.replace(/<script>\s*window\.__APP_CONFIG__\s*=\s*\{[\s\S]*?\};\s*<\/script>/, script)
        : html.replace('</head>', `  ${script}\n</head>`);
}

function sendText(res, statusCode, message) {
    res.writeHead(statusCode, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end(message);
}

function sendHtml(res, html) {
    res.writeHead(200, {
        'Content-Type': 'text/html; charset=utf-8',
        'Cache-Control': 'no-cache'
    });
    res.end(html);
}

/** Returns null for malformed percent-encoding or embedded NUL bytes. */
function decodeRequestPath(url) {
    try {
        const decoded = decodeURIComponent(url.split('?')[0]);
        return decoded.includes('\0') ? null : decoded;
    } catch {
        return null;
    }
}

function stripLegacyBasePath(requestPath) {
    if (requestPath === LEGACY_BASE_PATH) return '/';
    if (requestPath.startsWith(`${LEGACY_BASE_PATH}/`)) {
        return requestPath.slice(LEGACY_BASE_PATH.length);
    }
    return requestPath;
}

/** Resolves requestPath inside rootDir; returns null if it would escape rootDir. */
function resolveInside(rootDir, requestPath) {
    const resolved = path.resolve(rootDir, `.${requestPath}`);
    return resolved.startsWith(rootDir + path.sep) ? resolved : null;
}

function cacheControlFor(requestPath, extname) {
    if (requestPath.startsWith('/images/')) return 'public, max-age=604800, immutable';
    if (extname === '.css' || extname === '.js') return 'public, max-age=31536000, immutable';
    return 'no-cache';
}

// Runtime config is injected before noindex to keep the original tag order in <head>.
function renderSpaHtml(routePath) {
    return isNoindexRoute(routePath)
        ? injectNoindex(injectRuntimeConfig(indexHtmlCache))
        : injectRuntimeConfig(injectSeoMeta(indexHtmlCache, routePath));
}

function serveStaticFile(res, filePath, requestPath) {
    const extname = path.extname(requestPath);
    fs.readFile(filePath, (err, content) => {
        if (err) {
            if (err.code === 'ENOENT' || err.code === 'EISDIR') {
                sendText(res, 404, 'Not Found');
            } else {
                console.error(`Read error for ${requestPath}:`, err.code);
                sendText(res, 500, 'Internal Server Error');
            }
            return;
        }
        res.writeHead(200, {
            'Content-Type': mimeTypes[extname] || 'application/octet-stream',
            'Cache-Control': cacheControlFor(requestPath, extname)
        });
        res.end(content);
    });
}

function handleRequest(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, HEAD, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

    if (req.method === 'OPTIONS') {
        res.writeHead(204);
        res.end();
        return;
    }
    if (req.method !== 'GET' && req.method !== 'HEAD') {
        res.setHeader('Allow', 'GET, HEAD, OPTIONS');
        sendText(res, 405, 'Method Not Allowed');
        return;
    }

    const decodedPath = decodeRequestPath(req.url);
    if (decodedPath === null) {
        sendText(res, 400, 'Bad Request');
        return;
    }

    const requestPath = stripLegacyBasePath(decodedPath);
    if (requestPath === '/' || requestPath === '/index.html') {
        sendHtml(res, injectRuntimeConfig(injectSeoMeta(indexHtmlCache, '/')));
        return;
    }
    if (!path.extname(requestPath)) {
        sendHtml(res, renderSpaHtml(requestPath));
        return;
    }

    const rootDir = requestPath.startsWith('/images/') || requestPath.startsWith('/data/') ? PUBLIC_DIR : DIST;
    const filePath = resolveInside(rootDir, requestPath);
    if (!filePath) {
        sendText(res, 404, 'Not Found');
        return;
    }
    serveStaticFile(res, filePath, requestPath);
}

const server = http.createServer((req, res) => {
    console.log(`Request: ${req.method} ${req.url}`);
    try {
        handleRequest(req, res);
    } catch (err) {
        console.error(`Unhandled error for ${req.method} ${req.url}:`, err);
        if (!res.headersSent) sendText(res, 500, 'Internal Server Error');
        else res.end();
    }
});

server.listen(PORT, '0.0.0.0', () => {
    console.log(`Server successfully started on port ${PORT}`);
    console.log(`Environment: ${process.env.NODE_ENV || 'development'}`);
    console.log(`Serving Static Files from: ${DIST}`);
    console.log(`SEO routes configured: ${Object.keys(seoRoutes).join(', ')}`);
    console.log('Ready to handle requests!');
});
