# frontend/Dockerfile

# Этап сборки (builder)
FROM node:18-alpine AS build
WORKDIR /app
COPY package.json ./
RUN yarn install --frozen-lockfile
COPY . .
RUN yarn build

# Этап production
FROM nginx:stable-alpine
COPY --from=build /app/build /usr/share/nginx/html
# Опционально, если нужно настроить gzip, кеш и т.д.
# Можно добавить свой nginx.conf и заменить дефолтный
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
