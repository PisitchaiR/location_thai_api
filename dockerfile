FROM node:16
COPY . ./app
WORKDIR /app
RUN npm i -g pnpm
RUN pnpm i

COPY . .

RUN pnpm prisma generate
RUN pnpm build

CMD [ "pnpm", "start" ]