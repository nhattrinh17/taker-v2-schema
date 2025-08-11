import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository, MoreThan } from "typeorm";
import { BaseRepositoryAbstract } from "../../base/base.abstract.repository";
import { Message } from "../../entities/message.entity";
import { MessageRepositoryInterface } from "../interface/message.interface";

@Injectable()
export class MessageRepository
  extends BaseRepositoryAbstract<Message>
  implements MessageRepositoryInterface
{
  constructor(
    @InjectRepository(Message)
    private readonly messageRepository: Repository<Message>
  ) {
    super(messageRepository);
  }

}
