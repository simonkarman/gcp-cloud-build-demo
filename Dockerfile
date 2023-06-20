FROM node AS builder
WORKDIR /usr/src/app
COPY package-lock.json .
COPY package.json .
COPY tsconfig.json .
RUN npm install
COPY ./test ./test
COPY ./src ./src
RUN npm run build

FROM node:20-alpine
WORKDIR /usr/src/app
COPY package.json ./
COPY package-lock.json ./
RUN npm ci
COPY --from=builder /usr/src/app/dist/src ./dist/src
ENV PORT 8080
EXPOSE 8080
CMD npm start
