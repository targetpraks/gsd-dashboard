FROM nginx:1.27-alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY index.html /usr/share/nginx/html/index.html
COPY js/ /usr/share/nginx/html/js/
COPY inf-gsd-limited-edition.json /usr/share/nginx/html/inf-gsd-limited-edition.json
EXPOSE 80
