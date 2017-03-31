## docker build --rm -t daggerok/angular4 -f config/nginx/Dockerfile .
## docker tag daggerok/angular4 daggerok/angular4:latest
## docker push daggerok/angular4:latest
## docker run -d -p 80:80 --name daggerok-angular4 daggerok/angular4:latest

FROM nginx:1.10.3-alpine
COPY dist /usr/share/nginx/html
COPY nginx/default.conf /etc/nginx/conf.d/default.conf
