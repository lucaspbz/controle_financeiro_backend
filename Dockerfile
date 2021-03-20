FROM node:12.19.0

WORKDIR /home/api/service

COPY package.json ./

RUN yarn

COPY . .

RUN yarn build

EXPOSE 3333

CMD npm start
