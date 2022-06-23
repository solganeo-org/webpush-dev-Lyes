export interface RabbitConfig {

    url: string;

}

export interface NotificationPayload {

    endpoint: string,

    p256dh: string, 
    auth: string,

    content: string

}