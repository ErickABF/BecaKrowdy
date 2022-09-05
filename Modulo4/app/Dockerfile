# syntax=docker/dockerfile:1
FROM node:12-alpine
WORKDIR /app
COPY . .
RUN yarn install --production
CMD ["yarn","run", "dev"]
EXPOSE 3000
