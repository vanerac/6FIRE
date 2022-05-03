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

ARG AWS_ACCESS_KEY_ID=''
ENV AWS_ACCESS_KEY_ID $AWS_ACCESS_KEY_ID

ARG AWS_SECRET_ACCESS_KEY=''
ENV AWS_SECRET_ACCESS_KEY $AWS_SECRET_ACCESS_KEY

ARG SMS_API_KEY=''
ENV SMS_API_KEY $SMS_API_KEY

ARG MOLLIE_API_KEY=''
ENV MOLLIE_API_KEY $MOLLIE_API_KEY

ARG COINMARKETCAP_API_KEY=''
ENV COINMARKETCAP_API_KEY $COINMARKETCAP_API_KEY

ARG SENTRY_DSN=''
ENV SENTRY_DSN $SENTRY_DSN

ARG JWT_SECRET=''
ENV JWT_SECRET $JWT_SECRET

COPY --from=install /app/build/apps/api ./apps/api
COPY --from=install /app/apps/api/package.json ./apps/api/package.json
COPY --from=install /app/apps/api/package-lock.json ./apps/api/package-lock.json
COPY apps/api/src/templates/email/order_confirmation/email.html ./apps/api/src/templates/email/order_confirmation/email.html
COPY apps/api/src/templates/email/password_reset/email.html ./apps/api/src/templates/email/password_reset/email.html
COPY apps/api/src/templates/email/verify_email/email.html ./apps/api/src/templates/email/verify_email/email.html

COPY --from=install /app/build/shared ./shared
COPY shared/config/tsconfig.json ./shared/config/tsconfig.json
COPY shared/generated/openapi-v1.json ./shared/generated/openapi-v1.json

COPY apps/api/prisma ./apps/api/prisma

ENV OPENAPI_SPEC /app/shared/generated/openapi-v1.json

WORKDIR /app/apps/api

RUN npm install

RUN npx prisma generate --schema prisma/schema.prisma

# Note: Added migration to launch
# --accept-data-loss --force-reset
CMD npx prisma db push  && node src/index.js
