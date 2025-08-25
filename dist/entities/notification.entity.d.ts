import { NotificationTypeEnum } from '@common/enums';
import { BaseEntity } from './base.entity';
import { Customer } from './customer.entity';
import { Admin, SystemNotification } from './index';
import { Partner } from './partner.entity';
export declare class Notification extends BaseEntity {
    partner: Partner;
    partnerId: string;
    customer: Customer;
    customerId: string;
    admin: Admin;
    adminId: string;
    systemNotification: SystemNotification;
    systemNotificationId: string;
    title: string;
    content: string;
    data: string;
    isRead: boolean;
    type: NotificationTypeEnum;
}
