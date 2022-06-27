import test from "node:test";

var amqp = require('amqplib/callback_api');

export const runConsumer = async (): Promise<void> => {

    amqp.connect('amqp://localhost', function(error0: any, connection: { createChannel: (arg0: (error1: any, channel: any) => void) => void; }) {
    if (error0) {
        throw error0;
    }
    connection.createChannel(function(error1, channel) {
        if (error1) {
            throw error1;
        }

        var queue = 'test';

        channel.assertQueue(queue, {
            durable: false
        });

        channel.consume(queue, (message: any) => {

            console.log(JSON.parse(message.content));
            channel.ack(message)

          })
    });
});

};
