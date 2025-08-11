import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { BaseRepositoryAbstract } from "../../base/base.abstract.repository";
import { ConversationParticipant } from "../../entities/conversation_participant.entity";
import { ConversationParticipantRepositoryInterface } from "../interface/conversation_participant.interface";

@Injectable()
export class ConversationParticipantRepository
  extends BaseRepositoryAbstract<ConversationParticipant>
  implements ConversationParticipantRepositoryInterface
{
  constructor(
    @InjectRepository(ConversationParticipant)
    private readonly conversationParticipantRepository: Repository<ConversationParticipant>
  ) {
    super(conversationParticipantRepository);
  }

}
