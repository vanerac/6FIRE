FROM node:lts-alpine as install

WORKDIR /app

COPY apps/client ./

RUN npm install

FROM node:lts-alpine as build

WORKDIR /app

ARG SENTRY_AUTH_TOKEN=1234567890
ENV SENTRY_AUTH_TOKEN $SENTRY_AUTH_TOKEN

ARG AWS_ACCESS_KEY_ID=''
ARG AWS_SECRET_ACCESS_KEY=''
ARG SMS_API_KEY=''
ARG MOLLIE_API_KEY=''
ARG COINMARKETCAP_API_KEY=''
ARG SENTRY_DSN=''
ARG JWT_SECRET=''

COPY shared/ /shared/
COPY --from=install /app ./

WORKDIR /shared
RUN npm install axios@0.26.1
RUN npm install form-data
RUN npm install universal-cookie
RUN npm install react-cookie

WORKDIR /app
RUN npm install react-cookie
RUN npm run build

FROM node:lts-alpine as run


WORKDIR /app
COPY --from=build /app ./

EXPOSE 3000

CMD npm start
