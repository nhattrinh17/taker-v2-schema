import { TransactionLogStatus } from "@common/enums";
import { MigrationInterface, QueryRunner, Table, TableForeignKey, TableIndex } from "typeorm";

export class CreateTransactionLogsTable1753692418768
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "transaction_logs",
        columns: [
          {
            name: "id",
            type: "varchar(36)",
            isPrimary: true,
          },
          {
            name: "status",
            type: "enum",
            enum: [...Object.values(TransactionLogStatus)],
            default: `'${TransactionLogStatus.FAILED}'`,
          },
          {
            name: "vnPayData",
            type: "longtext",
            isNullable: true,
          },
          {
            name: "mbData",
            type: "longtext",
            isNullable: true,
          },
          {
            name: "referencenumberMb",
            type: "varchar",
            isNullable: true,
          },
          {
            name: "ipIpn",
            type: "varchar",
            isNullable: true,
          },
          {
            name: "date",
            type: "date",
            isNullable: true,
          },
          {
            name: "transactionId",
            type: "varchar",
            isNullable: true,
          },
          {
            name: "message",
            type: "varchar",
            isNullable: true,
          },
          {
            name: "deletedAt",
            type: "datetime(6)",
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
        ],
      })
    );

    await queryRunner.createIndex(
      "transaction_logs",
      new TableIndex({
        name: "IDX_TRANSACTION_LOGS_DATE",
        columnNames: ["date"],
      })
    );

    await queryRunner.createForeignKey(
      "transaction_logs",
      new TableForeignKey({
        name: "FK_TRANSACTION_LOGS_TRANSACTION_ID",
        columnNames: ["transactionId"],
        referencedTableName: "transactions",
        referencedColumnNames: ["id"],
        onDelete: "SET NULL",
        onUpdate: "CASCADE",
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropIndex(
      "transaction_logs",
      "IDX_TRANSACTION_LOGS_DATE"
    );
    await queryRunner.dropForeignKey(
      "transaction_logs",
      "FK_TRANSACTION_LOGS_TRANSACTION_ID"
    );
    await queryRunner.dropTable("transaction_logs");
  }
}
