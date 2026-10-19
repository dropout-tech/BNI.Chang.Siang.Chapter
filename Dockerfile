# Build stage
FROM node:22-slim AS builder

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci --no-audit --no-fund

COPY . .
# Vite build only: scripts/prerender-routes.mjs (part of `npm run build`, for Cloudflare Pages) rewrites
# dist/index.html with '/' meta, but server.js needs the untouched template to inject per-route meta itself.
RUN npx vite build && test -f dist/index.html

# Production stage — server.js only uses Node built-ins, so no npm install is needed
FROM node:22-slim

WORKDIR /app

COPY --from=builder /app/dist ./dist
COPY --from=builder /app/public ./public
COPY server.js seo-render.js seo-routes.js package.json ./

ENV PORT=8080
ENV NODE_ENV=production

EXPOSE 8080

USER node

CMD ["node", "server.js"]
