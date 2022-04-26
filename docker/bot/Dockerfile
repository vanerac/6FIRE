FROM node:lts-alpine as install

WORKDIR /app

COPY package.json .
COPY package-lock.json .
COPY apps/bot ./apps/bot
COPY shared/config ./shared/config

RUN npm install
RUN npm install axios form-data apify-client

WORKDIR /app/apps/bot

RUN npm run build


FROM node:lts as run

WORKDIR /app

COPY --from=install /app/build/ ./apps/bot
COPY --from=install /app/apps/bot/package.json ./apps/bot/package.json

COPY shared/config/tsconfig.json ./shared/config/tsconfig.json

COPY apps/api/prisma ./apps/bot/prisma

WORKDIR /app/apps/bot

RUN npm install
RUN npm i axios form-data

RUN npx prisma generate --schema prisma/schema.prisma

CMD npx prisma db push && node src/index.js
