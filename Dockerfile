FROM node:14.9.0-alpine AS development
WORKDIR /usr/src/app
COPY ./package.json package-lock.json ./
RUN npm install
COPY ./ ./

FROM node:14.9.0-alpine AS production
ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}
WORKDIR /usr/src/app
COPY ./package.json package-lock.json ./
RUN npm install
COPY ./ ./
CMD ["node", "src/index"]