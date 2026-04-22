FROM node:18
WORKDIR /app
COPY . .
RUN npm install express amqplib
CMD ["node", "producer.js"]
