# Базовый образ Nginx
FROM nginx:stable-alpine

# Копируем ваш конфигурационный файл
COPY default.conf /etc/nginx/conf.d/default.conf

# Копируем статические файлы фронтенда
# Предполагается, что файлы фронтенда находятся в папке build
COPY ./FE/build /usr/share/nginx/html

# Открываем порты
EXPOSE 80 443

# Запуск Nginx
CMD ["nginx", "-g", "daemon off;"]
