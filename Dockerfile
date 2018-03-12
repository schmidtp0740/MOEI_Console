FROM node:8.2.1-alpine

WORKDIR /usr/src/app


COPY package*.json ./
RUN npm install

COPY . .

CMD ["npm", "start"]
