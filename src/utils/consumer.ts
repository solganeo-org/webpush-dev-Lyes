import amqp from 'amqplib/callback_api';

export function runConsumer(){
    amqp.connect('amqp://localhost', function(error0: any, connection: any) {
        if (error0) {
          throw error0;
        }
        connection.createChannel(function(error1: any, channel: any) {
          if (error1) {
            throw error1;
          }
          const queue = 'test';
      
          channel.assertQueue(queue, {
            durable: false
          });
      
          channel.consume(queue, (message: any) => {

            console.log(message.content.toString());

            channel.ack(message)

          })
        });
      });

}