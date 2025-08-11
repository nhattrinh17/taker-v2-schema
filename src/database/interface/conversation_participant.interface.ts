import { BaseRepositoryInterface } from "../../base/base.interface.repository";
import { ConversationParticipant } from "../../entities/conversation_participant.entity";
import { ActorTypeEnum } from "@common/enums";

export interface ConversationParticipantRepositoryInterface
  extends BaseRepositoryInterface<ConversationParticipant> {
  
}
