FROM strapi/base

WORKDIR /backend/

COPY ./package.json ./

RUN npm install

COPY . .

RUN npm run build

EXPOSE 1337

CMD ["npm", "start"]