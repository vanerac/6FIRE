FROM node:lts-alpine as install

WORKDIR /app

COPY apps/dashboard ./

RUN npm install

FROM node:lts-alpine as build

WORKDIR /app

COPY shared/config/tsconfig.json /shared/config/tsconfig.json
COPY --from=install /app ./

RUN npm run build

FROM node:lts-alpine as run

COPY --from=build /app ./

EXPOSE 3000

CMD npm start
