import { ConversationStatusEnum } from "@common/enums";
import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateConversationTable1754637313922
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "conversations",
        columns: [
          {
            name: "id",
            type: "varchar(36)",
            isPrimary: true,
          },
          {
            name: "title",
            type: "varchar(255)",
            isNullable: true,
          },
          {
            name: "isGroup",
            type: "boolean",
            default: false,
          },
          {
            name: "status",
            type: "enum",
            enum: [...Object.values(ConversationStatusEnum)],
            default: `'${ConversationStatusEnum.ACTIVE}'`,
          },
          {
            name: "lastMessageId",
            type: "varchar(36)",
            isNullable: true,
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
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("conversations");
  }
}
