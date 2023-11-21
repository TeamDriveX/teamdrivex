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



## Production Workflow
# FROM node:20-alpine3.18 as dependencies
# WORKDIR /app


# COPY package.json ./
# RUN npm install


# FROM node:20-alpine3.18 as build
# WORKDIR /app
# COPY --from=dependencies /app/node_modules ./node_modules
# COPY . .


# RUN npx prisma generate
# RUN npm run build


# FROM node:18-alpine AS deploy

# WORKDIR /app

# ENV NODE_ENV production

# COPY --from=build /app/public ./public
# COPY --from=build /app/package.json ./package.json
# COPY --from=build /app/.next/standalone ./
# COPY --from=build /app/.next/static ./.next/static

# EXPOSE 3000

# ENV PORT 3000

# CMD ["node", "server.js"]