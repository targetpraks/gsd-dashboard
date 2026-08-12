FROM nginx:1.27-alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY index.html /usr/share/nginx/html/index.html
COPY js/ /usr/share/nginx/html/js/
COPY cerebro-v2.json /usr/share/nginx/html/cerebro-v2.json
EXPOSE 80
