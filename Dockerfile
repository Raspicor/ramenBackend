FROM node:16-alpine

WORKDIR /ramenBackend

COPY package.json .
RUN npm install

COPY . .

WORKDIR /ramenBackend/ramen/build

CMD ["node", "/ramenBackend/server.js"]
