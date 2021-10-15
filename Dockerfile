FROM node:16.10.0-alpine3.11

WORKDIR /opt/pokedex

COPY . .

RUN npm install && npm run build

EXPOSE 3000

CMD npm run start
