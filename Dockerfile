FROM keymetrics/pm2:12-alpine

WORKDIR /app

COPY package.json /app/
ENV NPM_CONFIG_LOGLEVEL warn

RUN npm install

COPY . .

EXPOSE 3000
