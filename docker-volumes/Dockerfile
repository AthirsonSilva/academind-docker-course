FROM node

WORKDIR /app

ARG NODE_ENV=production

COPY package.json .

RUN npm install

COPY . .

ENV PORT 80

EXPOSE ${PORT}

VOLUME [ "/app/feedback", "/app/node_modules", "$(pwd):/app:ro" ]

CMD ["npm", "start"]