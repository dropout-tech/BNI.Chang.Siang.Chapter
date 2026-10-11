# Build stage
FROM node:22-slim AS builder

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci --no-audit --no-fund

COPY . .
RUN npm run build && test -f dist/index.html

# Production stage — server.js only uses Node built-ins, so no npm install is needed
FROM node:22-slim

WORKDIR /app

COPY --from=builder /app/dist ./dist
COPY --from=builder /app/public ./public
COPY server.js seo-routes.js package.json ./

ENV PORT=8080
ENV NODE_ENV=production

EXPOSE 8080

USER node

CMD ["node", "server.js"]
