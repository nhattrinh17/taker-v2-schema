import { Repository } from "typeorm";
import { BaseRepositoryAbstract } from "../../base/base.abstract.repository";
import { SystemNotification } from "../../entities/system_notification.entity";
import { SystemNotificationRepositoryInterface } from "../interface/system_notification.interface";
export declare class SystemNotificationRepository extends BaseRepositoryAbstract<SystemNotification> implements SystemNotificationRepositoryInterface {
    private readonly systemNotificationRepository;
    constructor(systemNotificationRepository: Repository<SystemNotification>);
}
