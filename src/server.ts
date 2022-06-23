import {AppStateManager, runConsumer} from "./utils";
import { RabbitClient } from "./utils/rabbit-client";
import {vars} from "./config"

export const runApplication = async (): Promise<void> => {

  const rabbitClient = RabbitClient.getInstance()

  await rabbitClient.connect()

  if(vars.get('env') === 'development'){
    await rabbitClient.initializeConsumer('consumer', vars.get('queue'))
  }

  const appStateManager = new AppStateManager();
  appStateManager.saveClosableDependecy(rabbitClient)

  rabbitClient.consume('consumer', vars.get('queue'));

};
