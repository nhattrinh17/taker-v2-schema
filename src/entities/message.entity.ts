import { Column, Entity, ManyToOne, JoinColumn, OneToOne } from "typeorm";
import { BaseEntity } from "./base.entity";
import { ActorTypeEnum, MessageTypeEnum } from "@common/enums";
import { Conversation } from "./conversation.entity";
import { MessagePayload } from "@common/constants/interface.constant";

@Entity({ name: "messages" })
export class Message extends BaseEntity {
  @Column()
  conversationId: string;

  @Column({ nullable: true })
  userId: string;

  @Column({
    type: "enum",
    enum: ActorTypeEnum,
    default: ActorTypeEnum.CUSTOMER,
  })
  userType: ActorTypeEnum;

  @Column({
    type: "enum",
    enum: MessageTypeEnum,
    default: MessageTypeEnum.TEXT,
  })
  type: MessageTypeEnum;

  @Column({ type: "json", nullable: true })
  payload: MessagePayload;

  @ManyToOne(() => Conversation, (conversation) => conversation.messages, {
    onDelete: "CASCADE",
  })
  @JoinColumn({ name: "conversationId" })
  conversation: Conversation;
}
