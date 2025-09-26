import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { BaseRepositoryAbstract } from "../../base/base.abstract.repository";
import { Conversation } from "../../entities/conversation.entity";
import { ConversationRepositoryInterface } from "../interface/conversation.interface";
import { PaginationDto } from "@common/decorators";
import { ActorTypeEnum, ConversationStatusEnum } from "@common/enums";
import { AppType } from "@common/constants/app.constant";

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
      .select(["conversation", "lastMessage"]);

    console.log(condition);

    if (condition.search) {
      queryBuilder.andWhere("conversation.title LIKE :search", {
        search: `%${condition.search}%`,
      });
    }

    if (condition.customerId) {
      queryBuilder
        .andWhere(
          "participants.userId = :customerId AND participants.type = :actorType",
          {
            customerId: condition.customerId,
            actorType: ActorTypeEnum.CUSTOMER,
          }
        )
        .andWhere("conversation.status = :status", {
          status: ConversationStatusEnum.ACTIVE,
        });
    } else if (condition.adminId) {
      if (condition.type == "onlyMe") {
        queryBuilder.andWhere(
          "participants.userId = :adminId AND participants.type = :actorType",
          { adminId: condition.adminId, actorType: ActorTypeEnum.ADMIN }
        );
      }
    }

    queryBuilder
      .take(pagination.limit || 10)
      .skip(pagination.offset || 0)
      .orderBy(
        "conversation." + (pagination.sort || "updatedAt"),
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

  async getValidConversationIds(userId: string, type: string) {
    let actorType: ActorTypeEnum;
    if (type === AppType.admins) {
      actorType = ActorTypeEnum.ADMIN;
    } else if (type === AppType.customers) {
      actorType = ActorTypeEnum.CUSTOMER;
    } else {
      throw new Error("Invalid user type");
    }

    const queryBuilder = this.conversationRepository
      .createQueryBuilder("conversation")
      .leftJoinAndSelect("conversation.participants", "participants")
      .select(["conversation.id"])
      .where("conversation.status = :status", {
        status: ConversationStatusEnum.ACTIVE,
      })
      .andWhere(
        "participants.userId = :userId AND participants.type = :actorType",
        { userId, actorType }
      );

    const conversations = await queryBuilder.getMany();
    return conversations.map((conv) => conv.id);
  }
}
