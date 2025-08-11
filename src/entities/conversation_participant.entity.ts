import { Column, Entity, ManyToOne, JoinColumn } from "typeorm";
import { BaseEntity } from "./base.entity";
import { ActorTypeEnum } from "@common/enums";
import { Conversation } from "./conversation.entity";

@Entity({ name: "conversation_participants" })
export class ConversationParticipant extends BaseEntity {
  @Column()
  conversationId: string;

  @Column()
  userId: string;

  @Column({
    type: "enum",
    enum: ActorTypeEnum,
    default: ActorTypeEnum.CUSTOMER,
  })
  type: ActorTypeEnum;

  @ManyToOne(() => Conversation, (conversation) => conversation.participants, {
    onDelete: "CASCADE",
  })
  @JoinColumn({ name: "conversationId" })
  conversation: Conversation;
}
