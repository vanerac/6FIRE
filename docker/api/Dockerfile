FROM node:lts-alpine as install

WORKDIR /app

COPY package.json .
COPY package-lock.json .
COPY apps/api ./apps/api
COPY shared ./shared

RUN npm install

WORKDIR /app/apps/api

RUN npm run build


FROM node:lts as run

WORKDIR /app

COPY --from=install /app/build/apps/api ./apps/api
COPY --from=install /app/apps/api/package.json ./apps/api/package.json
COPY --from=install /app/apps/api/package-lock.json ./apps/api/package-lock.json

COPY --from=install /app/build/shared ./shared
COPY shared/config/tsconfig.json ./shared/config/tsconfig.json
COPY shared/generated/openapi-v1.json ./shared/generated/openapi-v1.json

COPY apps/api/prisma ./apps/api/prisma

ENV OPENAPI_SPEC /app/shared/generated/openapi-v1.json

WORKDIR /app/apps/api

RUN npm install

RUN npx prisma generate --schema prisma/schema.prisma

# Note: Added migration to launch
CMD npx prisma db push && node src/index.js
