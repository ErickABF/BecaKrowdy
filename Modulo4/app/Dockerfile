# syntax=docker/dockerfile:1
FROM node:14
WORKDIR /app
COPY . .
RUN yarn install --production
CMD ["yarn", "node", "src/index.js"]
EXPOSE 3000
