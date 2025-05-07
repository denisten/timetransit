# Stage 1 — сборка
FROM node:18-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

# Stage 2 — продакшн-окружение
FROM node:18-alpine

ENV NODE_ENV production

WORKDIR /app

COPY --from=builder /app ./

# Устанавливаем только runtime-зависимости
RUN npm ci --omit=dev

EXPOSE 3000

CMD ["npm", "start"]
