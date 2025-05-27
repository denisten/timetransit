# backend/Dockerfile

# Этап сборки
FROM golang:1.20-alpine AS build
ENV GOPROXY=https://goproxy.io,direct
WORKDIR /app
COPY go.mod go.sum ./
RUN go mod download
COPY . .
RUN go build -o main

# Этап production
FROM alpine:latest
WORKDIR /root/
COPY --from=build /app/main .
EXPOSE 8080
HEALTHCHECK --interval=30s --timeout=5s --retries=3 \
  CMD wget -qO- http://localhost:8080/api/health || exit 1
CMD ["./main"]