FROM node:lts-alpine as install

WORKDIR /app

COPY apps/dashboard ./

RUN npm install --legacy-peer-deps

FROM node:lts-alpine as build

WORKDIR /app

ARG SENTRY_AUTH_TOKEN=1234567890
ENV SENTRY_AUTH_TOKEN $SENTRY_AUTH_TOKEN
COPY shared/ /shared/
COPY --from=install /app ./

ARG AWS_ACCESS_KEY_ID=''
ARG AWS_SECRET_ACCESS_KEY=''
ARG SMS_API_KEY=''
ARG MOLLIE_API_KEY=''
ARG COINMARKETCAP_API_KEY=''
ARG SENTRY_DSN=''
ARG JWT_SECRET=''

WORKDIR /shared
RUN npm install axios@0.26.1 --legacy-peer-deps
RUN npm install form-data --legacy-peer-deps
RUN npm install universal-cookie --legacy-peer-deps
RUN npm install react-cookie --legacy-peer-deps
RUN npm i react react-dom
RUN npm i next

WORKDIR /app
RUN npm install react-cookie --legacy-peer-deps
RUN npm run build

FROM node:lts-alpine as run

WORKDIR /app
COPY --from=build /app ./

EXPOSE 3000

CMD npm start
