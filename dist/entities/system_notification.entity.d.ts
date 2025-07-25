import { SystemNotificationRecipientEnum } from '../common/enums';
import { BaseEntity } from './base.entity';
import { Notification } from './index';
export declare class SystemNotification extends BaseEntity {
    title: string;
    content: string;
    isSent: boolean;
    sentTime: Date;
    scheduleTime: number;
    receiver: SystemNotificationRecipientEnum;
    notifications: Notification;
}
