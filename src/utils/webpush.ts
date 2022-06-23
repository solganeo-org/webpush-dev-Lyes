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

    const payload = JSON.stringify({ title: notificationPayload.actionTitle, body: notificationPayload.content ,icon:notificationPayload.icon,url1:notificationPayload.url1, url2:notificationPayload.url2,actionName:notificationPayload.actionName,actiontitle:notificationPayload.actionTitle });
    webpush.sendNotification(pushSubscription, payload);

}