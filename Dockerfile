FROM node:16.13.2-alpine

WORKDIR /app
ADD server ./
ADD client ./

WORKDIR /app/client
RUN npm install
RUN npm run build

WORKDIR /app/server
RUN npm install
CMD npm start