# syntax=docker/dockerfile:1
FROM node:14
RUN apk add --no-cache python2 g++ make
WORKDIR /app
COPY . .
RUN yarn install
CMD ["yarn", "run", "serve"]
EXPOSE 3000
