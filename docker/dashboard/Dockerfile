FROM node:lts-alpine as install

WORKDIR /app

COPY apps/dashboard ./

RUN npm install

FROM node:lts-alpine as build

WORKDIR /app

ARG SENTRY_AUTH_TOKEN=1234567890
ENV SENTRY_AUTH_TOKEN $SENTRY_AUTH_TOKEN
COPY shared/ /shared/
COPY --from=install /app ./

WORKDIR /shared
RUN npm install axios
RUN npm install form-data

WORKDIR /app
RUN npm run build

FROM node:lts-alpine as run

WORKDIR /app
COPY --from=build /app ./

EXPOSE 3000

CMD npm start
