FROM node:14.18

WORKDIR /code

EXPOSE 3000

ENV MONGO_URL="mongodb://mongo:27017/recommender"

COPY client/package*.json ./

RUN npm install

COPY /client/. .

RUN npm run build

CMD ["npx", "serve", "-s", "build"]