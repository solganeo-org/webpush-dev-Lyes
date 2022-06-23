import webpush from 'web-push';
import { vars } from '../config';
import { NotificationPayload } from '../config';

export function sendWebPushNotification (notificationPayload: NotificationPayload): void {

    const publicKey     = String(vars.get('public_key'));
    const privateKey    = String(vars.get('private_key'));
    const subject       = String(vars.get('subject'));

    //Email Public Key, Privite Key 
    webpush.setVapidDetails(
        subject,
        publicKey,
        privateKey
    );

    console.log(notificationPayload)

    const pushSubscription = {
        endpoint: notificationPayload.endpoint,
        keys: {
          auth: notificationPayload.auth,
          p256dh: notificationPayload.p256dh,
        }
      };

    const payload = JSON.stringify({ title: "Test", body: notificationPayload.content ,icon:'https://img.icons8.com/pastel-glyph/2x/brain--v2.png',url1:'http://localhost:8888/', url2:'https://www.yahoo.com/Oma',actionName:'archive',actiontitle:'Test_Action' });
    webpush.sendNotification(pushSubscription, payload);

}