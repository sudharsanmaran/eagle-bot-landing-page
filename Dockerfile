FROM node:14-alpine

WORKDIR /app

COPY eagle-bot-landing-page/package*.json ./

RUN npm install

COPY eagle-bot-landing-page/ ./

CMD ["npm", "start"]
