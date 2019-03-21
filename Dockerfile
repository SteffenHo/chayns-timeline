FROM registry.gitlab.com/michael-braun/docker/lttp:latest

MAINTAINER Steffen Holtkamp
EXPOSE 8080/tcp

COPY /build/* /var/www/

CMD ["/usr/local/bin/lttp"]
