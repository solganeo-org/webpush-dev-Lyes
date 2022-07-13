import {AppStateManager} from "./utils";
import { RabbitClient } from "./utils/rabbit-client";
import express, { Express } from 'express'

import {vars} from "./config"

const runApplication = async (): Promise<void> => {

  const rabbitClient = RabbitClient.getInstance()

  await rabbitClient.connect()

  if(vars.get('ENV') === 'development'){
    await rabbitClient.initializeConsumer('consumer', vars.get('QUEUE'))
  }

  const appStateManager = new AppStateManager();
  appStateManager.saveClosableDependecy(rabbitClient)

  rabbitClient.consume('consumer', vars.get('QUEUE'));

  const app: Express = express()
  const port = process.env.PORT || 3000

  app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at Port: ${port}`)
  })

};

runApplication();