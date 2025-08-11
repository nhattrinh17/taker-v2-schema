import { MigrationInterface, QueryRunner, TableForeignKey } from "typeorm";

export class UpdateForeignKeyLastMessageColumnInConversationTable1754645412604
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createForeignKey(
      "conversations",
      new TableForeignKey({
        columnNames: ["lastMessageId"],
        referencedColumnNames: ["id"],
        referencedTableName: "messages",
        onDelete: "SET NULL",
        name: "FK_conversations_lastMessage", // optional, helps rollback
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey(
      "conversations",
      "FK_conversations_lastMessage"
    );
  }
}
