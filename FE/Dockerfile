# frontend/Dockerfile

# Этап сборки (builder)
FROM node:18-alpine AS build
WORKDIR /app
COPY package.json ./
RUN yarn install --frozen-lockfile -f
COPY . .
RUN yarn build

# Этап production
FROM nginx:stable-alpine
COPY --from=build /app/build /usr/share/nginx/html
# Опционально, если нужно настроить gzip, кеш и т.д.
# Можно добавить свой nginx.conf и заменить дефолтный
EXPOSE 80
HEALTHCHECK --interval=30s --timeout=5s --retries=3 \
  CMD wget -qO- http://localhost:80 || exit 1
CMD ["nginx", "-g", "daemon off;"]
