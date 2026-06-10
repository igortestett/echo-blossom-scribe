# Estágio 1: build
FROM node:22-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
ENV GITHUB_PAGES=true
ENV VITE_SITE_URL=https://dramatica.blog
ENV CUSTOM_DOMAIN=dramatica.blog
RUN npm run build:github-pages

# Estágio 2: servir com Nginx
FROM nginx:alpine
COPY --from=builder /app/dist/client /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
