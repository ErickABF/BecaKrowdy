# syntax=docker/dockerfile:1
FROM node:alpine
WORKDIR /usr/src/app
COPY package*.json .
RUN yarn add nodemon
RUN yarn install --production
COPY . .
CMD ["node", "src/index.js"]
EXPOSE 3000
