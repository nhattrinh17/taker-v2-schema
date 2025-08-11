import { ActorTypeEnum } from "@common/enums";
import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from "typeorm";

export class CreateConversationParticipantTable1754637342598
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "conversation_participants",
        columns: [
          {
            name: "id",
            type: "varchar(36)",
            isPrimary: true,
          },
          {
            name: "conversationId",
            type: "varchar(36)",
            isNullable: false,
          },
          {
            name: "userId",
            type: "varchar(36)",
            isNullable: false,
          },
          {
            name: "type",
            type: "enum",
            enum: [...Object.values(ActorTypeEnum)],
            default: `'${ActorTypeEnum.CUSTOMER}'`,
          },
          {
            name: "createdAt",
            type: "datetime(6)",
            default: "CURRENT_TIMESTAMP(6)",
          },
          {
            name: "updatedAt",
            type: "datetime(6)",
            default: "CURRENT_TIMESTAMP(6)",
            onUpdate: "CURRENT_TIMESTAMP(6)",
          },
          {
            name: "deletedAt",
            type: "datetime(6)",
            isNullable: true,
          },
        ],
      })
    );

    await queryRunner.createForeignKey(
      "conversation_participants",
      new TableForeignKey({
        columnNames: ["conversationId"],
        referencedTableName: "conversations",
        referencedColumnNames: ["id"],
        onDelete: "CASCADE",
        name: "FK_ConversationParticipant_Conversation",
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey(
      "conversation_participants",
      "FK_ConversationParticipant_Conversation"
    );
    await queryRunner.dropTable("conversation_participants");
  }
}
