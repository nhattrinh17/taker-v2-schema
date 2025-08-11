import { ActorTypeEnum, MessageTypeEnum } from "@common/enums";
import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class CreateMessageTable1754637372963 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "messages",
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
            isNullable: true,
          },
          {
            name: "userType",
            type: "enum",
            enum: [...Object.values(ActorTypeEnum)],
            default: `'${ActorTypeEnum.CUSTOMER}'`,
          },
          {
            name: "type",
            type: "enum",
            enum: [...Object.values(MessageTypeEnum)],
            default: `'${MessageTypeEnum.TEXT}'`,
          },
          {
            name: "payload",
            type: "json",
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

    await queryRunner.createForeignKey(
      "messages",
      new TableForeignKey({
        columnNames: ["conversationId"],
        referencedTableName: "conversations",
        referencedColumnNames: ["id"],
        onDelete: "CASCADE",
        name: "FK_Message_Conversation",
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey(
      "messages",
      "FK_Message_Conversation"
    );
    await queryRunner.dropTable("messages");
  }
}
