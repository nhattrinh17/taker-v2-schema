import { BaseEntity } from "./base.entity";
import { ActorTypeEnum, MessageTypeEnum } from "../common/enums";
import { Conversation } from "./conversation.entity";
import { MessagePayload } from "../common/constants/interface.constant";
export declare class Message extends BaseEntity {
    conversationId: string;
    userId: string;
    userType: ActorTypeEnum;
    type: MessageTypeEnum;
    payload: MessagePayload;
    conversation: Conversation;
}
