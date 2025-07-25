import { NotificationTypeEnum } from "@common/enums";
import { BaseRepositoryInterface } from "../../base/base.interface.repository";
import { Notification } from "../../entities/notification.entity";
import { PaginationDto } from "@common/decorators";

export interface NotificationRepositoryInterface
  extends BaseRepositoryInterface<Notification> {
  
}
