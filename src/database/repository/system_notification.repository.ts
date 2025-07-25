import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository, Between, LessThanOrEqual } from "typeorm";
import { BaseRepositoryAbstract } from "../../base/base.abstract.repository";
import { SystemNotification } from "../../entities/system_notification.entity";
import { SystemNotificationRepositoryInterface } from "../interface/system_notification.interface";
import { SystemNotificationRecipientEnum } from "@common/enums";
import { PaginationDto } from "@common/decorators";

@Injectable()
export class SystemNotificationRepository
  extends BaseRepositoryAbstract<SystemNotification>
  implements SystemNotificationRepositoryInterface
{
  constructor(
    @InjectRepository(SystemNotification)
    private readonly systemNotificationRepository: Repository<SystemNotification>
  ) {
    super(systemNotificationRepository);
  }
}
