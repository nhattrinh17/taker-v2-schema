import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { BaseRepositoryAbstract } from "../../base/base.abstract.repository";
import { Conversation } from "../../entities/conversation.entity";
import { ConversationRepositoryInterface } from "../interface/conversation.interface";
import { PaginationDto } from "@common/decorators";
import { ActorTypeEnum, ConversationStatusEnum } from "@common/enums";

@Injectable()
export class ConversationRepository
  extends BaseRepositoryAbstract<Conversation>
  implements ConversationRepositoryInterface
{
  constructor(
    @InjectRepository(Conversation)
    private readonly conversationRepository: Repository<Conversation>
  ) {
    super(conversationRepository);
  }

  async findAllConversation(condition: any, pagination: PaginationDto) {
    const queryBuilder = this.conversationRepository
      .createQueryBuilder("conversation")
      .leftJoinAndSelect("conversation.participants", "participants")
      .leftJoinAndSelect("conversation.lastMessage", "lastMessage")
      .select(["conversation", "lastMessage"])
      .where("conversation.status = :status", {
        status: ConversationStatusEnum.ACTIVE,
      });

    if (condition.customerId) {
      queryBuilder.andWhere(
        "participants.userId = :customerId AND participants.type = : actorType",
        { customerId: condition.customerId, actorType: ActorTypeEnum.CUSTOMER }
      );
    } else if (condition.adminId) {
      queryBuilder.andWhere(
        "participants.userId = :adminId AND participants.type = : actorType",
        { adminId: condition.adminId, actorType: ActorTypeEnum.ADMIN }
      );
    }

    queryBuilder
      .take(pagination.limit || 10)
      .skip(pagination.offset || 0)
      .orderBy(
        "conversation." + (pagination.sort || "createdAt"),
        pagination.typeSort || "DESC"
      );

    const [conversations, total] = await queryBuilder.getManyAndCount();

    return {
      data: conversations,
      pagination: {
        total,
        ...pagination,
      },
    };
  }
}
