const amqp = require('amqplib');

async function consume() {
  const conn = await amqp.connect('amqp://admin:admin@rabbitmq:5672');
  const channel = await conn.createChannel();

  await channel.assertQueue('orders');

  console.log("Waiting for messages...");

  channel.consume('orders', (msg) => {
    const data = JSON.parse(msg.content.toString());
    console.log("Processing order:", data);

    // simulate work
    setTimeout(() => {
      console.log("Done:", data);
      channel.ack(msg);
    }, 1000);
  });
}

consume();
