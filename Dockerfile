FROM node:22-alpine

WORKDIR /app

ENV NODE_ENV=production
ENV HOST=0.0.0.0
ENV PORT=3000

COPY --chown=node:node .output ./.output

EXPOSE 3000

USER node

CMD ["node", ".output/server/index.mjs"]
