# syntax=docker/dockerfile:1
FROM node:14
WORKDIR /app
COPY . .
RUN yarn install
CMD ["yarn", "run", "serve"]
EXPOSE 3000
