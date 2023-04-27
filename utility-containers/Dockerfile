FROM node:20-alpine

USER node

RUN mkdir /home/node/.npm-global

ENV PATH=/home/node/.npm-global/bin:$PATH

RUN npm config set prefix '/home/node/.npm-global'

WORKDIR /app

ENTRYPOINT [ "npm" ]