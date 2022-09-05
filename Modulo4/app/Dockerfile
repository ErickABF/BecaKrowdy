FROM node:12-alpine

RUN apk add --no-cache python2 g++ make

WORKDIR /usr/src/app

RUN yarn install --production

COPY . .

CMD ["node", "src/index.js"]

EXPOSE 3000
