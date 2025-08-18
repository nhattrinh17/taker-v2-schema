import { BaseEntity } from "./base.entity";
import { ActorTypeEnum } from "@common/enums";
import { Conversation } from "./conversation.entity";
export declare class ConversationParticipant extends BaseEntity {
    conversationId: string;
    userId: string;
    type: ActorTypeEnum;
    conversation: Conversation;
}
