<<<<<<< HEAD
const express = require('express');
require('dotenv').config();

const app = express();

app.use(express.static('src/public'));

app.get('/', (req, res) => {
  res.render('index');
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`);
});
=======
const express = require('express');
require('dotenv').config();

const app = express();

app.use(express.static('src/public'))

app.get('/', (req: any, res: any) => {
    res.render("index")
})
  
app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${process.env.PORT}`)
})
  
>>>>>>> 1db9d6c7d98216f5a47c358bf3adb1a79f58709b
