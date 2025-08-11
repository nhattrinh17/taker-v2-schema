import { Column, Entity, JoinColumn, OneToMany, OneToOne } from "typeorm";
import { BaseEntity } from "./base.entity";
import { ConversationParticipant } from "./conversation_participant.entity";
import { Message } from "./message.entity";
import { ConversationStatusEnum } from "@common/enums";

@Entity({ name: "conversations" })
export class Conversation extends BaseEntity {
  @Column({ nullable: true, length: 255 })
  title: string;

  @Column({ default: false })
  isGroup: boolean;

  @Column({
    enum: ConversationStatusEnum,
    default: ConversationStatusEnum.ACTIVE,
  })
  status: ConversationStatusEnum;

  @Column({ type: "varchar", length: 36, nullable: true })
  lastMessageId: string | null;

  @OneToMany(
    () => ConversationParticipant,
    (participant) => participant.conversation
  )
  participants: ConversationParticipant[];

  @OneToMany(() => Message, (message) => message.conversation)
  messages: Message[];

  @OneToOne(() => Message, { onDelete: "SET NULL", nullable: true })
  @JoinColumn({ name: "lastMessageId" })
  lastMessage: Message | null;
}
