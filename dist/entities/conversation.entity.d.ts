import { BaseEntity } from "./base.entity";
import { ConversationParticipant } from "./conversation_participant.entity";
import { Message } from "./message.entity";
import { ConversationStatusEnum } from "../common/enums";
export declare class Conversation extends BaseEntity {
    title: string;
    isGroup: boolean;
    status: ConversationStatusEnum;
    lastMessageId: string | null;
    participants: ConversationParticipant[];
    messages: Message[];
    lastMessage: Message | null;
}
