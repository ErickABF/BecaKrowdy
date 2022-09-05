# syntax=docker/dockerfile:1
FROM node:14
WORKDIR /app
COPY . .
RUN yarn install
CMD ["nodemon", "src/index.js"]
EXPOSE 3000
