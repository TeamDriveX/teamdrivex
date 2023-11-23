# Development workflow

FROM node:20-alpine3.18
RUN mkdir /app
WORKDIR /app

COPY package*.json ./
RUN npm install
COPY . .

RUN npx prisma generate

EXPOSE 3000
CMD npm run dev
