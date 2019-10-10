# Builds a Docker to deliver same env for developers
FROM node:10

MAINTAINER ajinkya.r.rajput@gmail.com


COPY package.json /ajinkya/

RUN cd /ajinkya && \
    npm install

WORKDIR /ajinkya

ENTRYPOINT ["npm", "start"]