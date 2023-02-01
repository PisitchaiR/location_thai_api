FROM node:16
COPY . ./app
WORKDIR /app
RUN npm i -g pnpm
RUN pnpm i
CMD [ "pnpm", "start" ]