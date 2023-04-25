FROM node

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

EXPOSE 80

VOLUME [ "/app/feedback", "/app/node_modules", "$(pwd):/app" ]

CMD ["npm", "start"]