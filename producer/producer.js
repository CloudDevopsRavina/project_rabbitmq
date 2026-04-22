const express = require('express');
const amqp = require('amqplib');

const app = express();
app.use(express.json());

let channel;

async function connect() {
  const conn = await amqp.connect('amqp://admin:admin@rabbitmq:5672');
  channel = await conn.createChannel();
  await channel.assertQueue('orders');
}

connect();

app.post('/order', async (req, res) => {
  const order = req.body;
  channel.sendToQueue('orders', Buffer.from(JSON.stringify(order)));
  res.send('Order sent!');
});

app.listen(3000, () => console.log('Producer running on 3000'));
