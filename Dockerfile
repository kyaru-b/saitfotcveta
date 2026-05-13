FROM node:24-alpine AS deps

WORKDIR /app
RUN corepack enable

COPY package.json pnpm-lock.yaml* ./
RUN pnpm install --frozen-lockfile


FROM node:24-alpine AS builder

WORKDIR /app
RUN corepack enable

COPY --from=deps /app/node_modules ./node_modules
COPY . .

RUN pnpm build


FROM node:24-alpine AS runner

WORKDIR /app
RUN corepack enable

ENV NODE_ENV=production

COPY --from=builder /app/.output ./.output
COPY --from=builder /app/package.json ./package.json

EXPOSE 3000

CMD ["node", ".output/server/index.mjs"]