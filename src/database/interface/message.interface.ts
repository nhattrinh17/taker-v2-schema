import { BaseRepositoryInterface } from "../../base/base.interface.repository";
import { Message } from "../../entities/message.entity";
import { PaginationDto } from "@common/decorators";
import { MessageTypeEnum } from "@common/enums";

export interface MessageRepositoryInterface
  extends BaseRepositoryInterface<Message> {
  
}
