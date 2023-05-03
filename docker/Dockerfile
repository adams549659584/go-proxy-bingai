FROM golang:alpine AS builder
WORKDIR /app
COPY . .
RUN go build -ldflags="-s -w" -tags netgo -trimpath -o go-proxy-bingai main.go

FROM alpine
WORKDIR /app
COPY --from=builder /app/go-proxy-bingai .

EXPOSE 8080
CMD ["/app/go-proxy-bingai"]