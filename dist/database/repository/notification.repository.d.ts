import { Repository } from "typeorm";
import { BaseRepositoryAbstract } from "../../base/base.abstract.repository";
import { Notification } from "../../entities/notification.entity";
import { NotificationRepositoryInterface } from "../interface/notification.interface";
export declare class NotificationRepository extends BaseRepositoryAbstract<Notification> implements NotificationRepositoryInterface {
    private readonly notificationRepository;
    constructor(notificationRepository: Repository<Notification>);
}
