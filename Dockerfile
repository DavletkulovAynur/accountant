FROM node:18.16.1

WORKDIR /app

COPY ["package.json", "package-lock.json*", "./"]

RUN npm install

COPY . .

ENV PORT 4200

EXPOSE $PORT

CMD ["npm", "start"]
