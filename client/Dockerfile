FROM node:16

WORKDIR /usr/client/
COPY package.json yarn.lock ./

RUN yarn install

COPY . .

EXPOSE 4090
CMD ["yarn", "dev"]