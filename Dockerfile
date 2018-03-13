FROM node:8.2.1-alpine

WORKDIR /src/reactapp/

COPY . .
RUN npm install

CMD ["npm", "start"]
