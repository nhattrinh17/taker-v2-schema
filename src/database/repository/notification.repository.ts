import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository, LessThan } from "typeorm";
import { BaseRepositoryAbstract } from "../../base/base.abstract.repository";
import { Notification } from "../../entities/notification.entity";
import { NotificationRepositoryInterface } from "../interface/notification.interface";
import { NotificationTypeEnum } from "@common/enums";
import { PaginationDto } from "@common/decorators";

@Injectable()
export class NotificationRepository
  extends BaseRepositoryAbstract<Notification>
  implements NotificationRepositoryInterface
{
  constructor(
    @InjectRepository(Notification)
    private readonly notificationRepository: Repository<Notification>
  ) {
    super(notificationRepository);
  }

}
