FROM node:10-alpine as build-step

RUN mkdir -p /app

WORKDIR /app

COPY package.json /app

RUN npm install

COPY . /app

RUN npm run build

#NGINX

FROM nginx:latest

COPY --from=build-step /app/dist/angular /usr/share/nginx/html