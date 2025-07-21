FROM node:20-alpine

WORKDIR /app/

COPY package.json .
COPY package-lock.json .
COPY next.config.mjs .
COPY public ./public
COPY src ./src
COPY styles ./styles
COPY .env .
COPY .env.local .
COPY .env.development .
COPY .env.production .

COPY .env.test .
COPY .env.staging .
COPY .env.production.local .
COPY .env.development.local .
COPY .env.local.development .
COPY .env.local.production .
COPY .env.local.staging .
COPY .env.local.test .
COPY .env.local.development.local .
COPY .env.local.production.local .
COPY .env.local.staging.local .
COPY .env.local.test.local .
COPY .env.development.local .
COPY .env.production.local .
COPY .env.staging.local .
COPY .env.test.local .
COPY .env.development.local .   

COPY . .
 RUN npm install --force

 EXPOSE 3000
CMD ["npm", "start"]