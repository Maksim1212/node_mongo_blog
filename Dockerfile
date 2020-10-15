FROM node:12-alpine

WORKDIR /app

COPY package*.json ./

COPY migrate-mongo-config.ts ./

RUN npm install

COPY . . 

EXPOSE 3000

CMD [ "npm", "start" ]
