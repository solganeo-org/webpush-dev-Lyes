import express from 'express';
import {AppStateManager} from "./utils";
import {runConsumer} from  "./controllers/receive"
import { RabbitClient } from "./utils/rabbit-client";
import {vars} from "./config"

export const runApplication = async (): Promise<void> => {

  const rabbitClient = RabbitClient.getInstance()

  await rabbitClient.connect()

  if(vars.get('env') === 'development'){
    await rabbitClient.initializeConsumer('consumer', 'test')
  }

  const appStateManager = new AppStateManager();
  appStateManager.saveClosableDependecy(rabbitClient)

  rabbitClient.consume('consumer', 'test');

};


// export const runApplication = async (): Promise<void> => {
//   // Instance app
//   const app = express();

//   // Render Public Folder
//   app.use(express.static('src/public'));

//   app.get('/', (req: any, res: any) => {
//     res.render('index');
//   });

//   // Start Server
//   app.listen(process.env.PORT, () => {
//     console.log(`Example app listening on port ${process.env.PORT}`);
//   });
// };
