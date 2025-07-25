import { SystemNotificationRecipientEnum } from "@common/enums";
import { BaseRepositoryInterface } from "../../base/base.interface.repository";
import { SystemNotification } from "../../entities/system_notification.entity";
import { PaginationDto } from "@common/decorators";

export interface SystemNotificationRepositoryInterface
  extends BaseRepositoryInterface<SystemNotification> {
  
}
