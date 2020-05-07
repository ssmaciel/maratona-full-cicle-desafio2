FROM node:14.1-alpine
RUN apk add --no-cache bash

RUN touch /root/.bashrc | echo "PS1='\w\$ '" >> /root/.bashrc

WORKDIR /app
