FROM usvc/website:latest
WORKDIR /var/www/html
COPY ./build /var/www/html
EXPOSE 8080
