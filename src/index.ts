import {AppStateManager} from "./utils";
import { RabbitClient } from "./utils/rabbit-client";
import express, { Express } from 'express'
import https from "https"

import {vars} from "./config"

const runApplication = async (): Promise<void> => {

  const rabbitClient = RabbitClient.getInstance()

  await rabbitClient.connect()

  await rabbitClient.initializeConsumer(vars.get('ENV') + '-webpush-consumer', vars.get('QUEUE'))

  const appStateManager = new AppStateManager();
  appStateManager.saveClosableDependecy(rabbitClient)

  rabbitClient.consume(vars.get('ENV') + '-webpush-consumer', vars.get('QUEUE'));

  const app: Express = express()
  const port = process.env.PORT || 3000

  app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at Port: ${port}`)
  })

  app.get('/', function(req, res) {
    res.send('Working 😁');
  });

  setInterval(function() {
    https.get(vars.get('DOMAIN'));
    console.log(vars.get('DOMAIN'))
}, 300000); // every 5 minutes (300000)

};

runApplication();