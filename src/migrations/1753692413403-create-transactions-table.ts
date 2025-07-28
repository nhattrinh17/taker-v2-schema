import { TransactionSource, TransactionStatus, TransactionType } from "@common/enums";
import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class CreateTransactionsTable1753692413403
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "transactions",
        columns: [
          {
            name: "id",
            type: "varchar(36)",
            isPrimary: true,
          },
          {
            name: "walletId",
            type: "varchar(36)",
            isNullable: true,
          },
          {
            name: "orderId",
            type: "varchar(36)",
            isNullable: true,
            isUnique: true,
          },
          {
            name: "amount",
            type: "double",
            default: 0,
          },
          {
            name: "description",
            type: "varchar",
            isNullable: true,
          },
          {
            name: "transactionDate",
            type: "datetime(6)",
            isNullable: true,
          },
          {
            name: "transactionType",
            type: "enum",
            enum: Object.values(TransactionType),
            default: `'${TransactionType.DEPOSIT}'`,
          },
          {
            name: "transactionSource",
            type: "enum",
            enum: Object.values(TransactionSource),
            default: `'${TransactionSource.WALLET}'`,
          },
          {
            name: "status",
            type: "enum",
            enum: Object.values(TransactionStatus),
            default: `'${TransactionStatus.PENDING}'`,
          },
          {
            name: "vnPayData",
            type: "longtext",
            isNullable: true,
          },
          {
            name: "ipRequest",
            type: "varchar",
            isNullable: true,
          },
          {
            name: "ipIpn",
            type: "varchar",
            isNullable: true,
          },
          {
            name: "isManual",
            type: "boolean",
            default: false,
          },
          {
            name: "evidence",
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
      }),
      true
    );

    await queryRunner.createForeignKey(
      "transactions",
      new TableForeignKey({
        name: "FK_transactions_walletId",
        columnNames: ["walletId"],
        referencedColumnNames: ["id"],
        referencedTableName: "wallets",
        onDelete: "SET NULL",
        onUpdate: "CASCADE",
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey(
      "transactions",
      "FK_transactions_walletId"
    );
    await queryRunner.dropTable("transactions");
  }
}
