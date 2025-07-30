import { INotificationPayload } from "@common/constants/app.constant";
export interface INotificationPayloadV2 {
    token: string;
    data?: {
        [key: string]: string;
    };
}
export declare class FirebaseService {
    private readonly logger;
    verifyIdToken(idToken: string): Promise<unknown>;
    sendToAdmin({ tokens, title, body, }: {
        tokens: string[];
        title: string;
        body: string;
        url?: string;
    }): Promise<unknown>;
    send({ token, title, body, data, sound }: INotificationPayload): Promise<unknown>;
    sends(payloads: INotificationPayload[]): Promise<unknown>;
    sendNotNotiPayload({ token, data }: INotificationPayloadV2): Promise<unknown>;
}
