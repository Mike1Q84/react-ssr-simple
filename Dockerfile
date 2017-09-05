FROM node:8.4.0-alpine

RUN npm install -g yarn

COPY ./package.json code/

RUN cd code && yarn install

COPY . /code

WORKDIR code/

CMD ["npm","run","dev"]
EXPOSE 3000

