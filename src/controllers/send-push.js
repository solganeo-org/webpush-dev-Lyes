const webpush = require('web-push');
var argv = require('minimist')(process.argv.slice(2));

require('dotenv').config();

if (!process.env.ENDPOINT || !process.env.P256DH || !process.env.AUTH) {
  console.log('missing some required parameters');
}

const sendNotification = (e) => {

  let lastClient = clients[clients.length - 1]
  console.log(lastClient.endpoint)

  const vapidDetails = {
    mailto: 'mailto:l.rahbi@solganeo.com',
    publicKey:'BNrknLI66MNnJC5gFrzOOuDKGeK5K3S2jzRSOHeSPqIVqwIzVwjRbNvGbfsBfXc_Yvcgxf5eMTz9P2WcgGXgEws',
    privateKey:'ctPxjAFkFQiMFeIy1Pu-5uXqQYtAkFf79CHjbarg0fw',
  }
  let pushSubscription = {
    endpoint: 'https://fcm.googleapis.com/fcm/send/fdblYfZcHNc:APA91bFAxJldnA_EtJZTCQm9gZxsV7Sx7fuPbhilTyakKsH6gPSTHcE-1dJ3wT1pa5PKuypQQtXnSZ8ey5kfbSzvFEuBKa1SkMDLgPWiBDY-5MLHTmgtLUmF9HxLNBKjoS0S68sdR8D1',
    keys: {
      p256dh: '',
      auth: '',
    },
  }
  const payload = JSON.stringify({
    title: 'TESTT',
    body: 'test123',
    icon: 'https://drive.google.com/file/d/1HPH-xIeDWhUB9O2-Fc6anfPU-QdeYPJk/view?usp=sharing',
    url1: 'http://google.com/',
    url2: 'https://www.yahoo.com/',
    actionName: 'archive',
    actiontitle: 'LOL',
  })

}

//Email Public Key, Privite Key 
webpush.setVapidDetails(
  process.env.SUBJECT,
  process.env.PUBLIC_KEY,
  process.env.PRIVATE_KEY
);

const pushSubscription = {
  endpoint: process.env.ENDPOINT,
  keys: {
    auth: process.env.AUTH,
    p256dh: process.env.P256DH,

  }
};

const payload = JSON.stringify({ title: "Test", body: 'Test Notification ',icon:'https://img.icons8.com/pastel-glyph/2x/brain--v2.png',url1:'http://localhost:8888/', url2:'https://www.yahoo.com/Oma',actionName:'archive',actiontitle:'Test_Action' });
webpush.sendNotification(pushSubscription, payload);

console.log("Sent")