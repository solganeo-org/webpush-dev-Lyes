const express = require('express');

export const runApplication = async (): Promise<void> => {

  // Instance app
  const app = express();

  // Render Public Folder
  app.use(express.static('src/public'))

  app.get('/', (req: any, res: any) => {
      res.render("index")
  })

  // Start Server
  app.listen(process.env.PORT, () => {
      console.log(`Example app listening on port ${process.env.PORT}`)
  })

}


  