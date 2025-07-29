"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateTransactionLogsTable1753692418768 = void 0;
const enums_1 = require("../common/enums");
const typeorm_1 = require("typeorm");
class CreateTransactionLogsTable1753692418768 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
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
                    enum: [...Object.values(enums_1.TransactionLogStatus)],
                    default: `'${enums_1.TransactionLogStatus.FAILED}'`,
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
        }));
        await queryRunner.createIndex("transaction_logs", new typeorm_1.TableIndex({
            name: "IDX_TRANSACTION_LOGS_DATE",
            columnNames: ["date"],
        }));
        await queryRunner.createForeignKey("transaction_logs", new typeorm_1.TableForeignKey({
            name: "FK_TRANSACTION_LOGS_TRANSACTION_ID",
            columnNames: ["transactionId"],
            referencedTableName: "transactions",
            referencedColumnNames: ["id"],
            onDelete: "SET NULL",
            onUpdate: "CASCADE",
        }));
    }
    async down(queryRunner) {
        await queryRunner.dropIndex("transaction_logs", "IDX_TRANSACTION_LOGS_DATE");
        await queryRunner.dropForeignKey("transaction_logs", "FK_TRANSACTION_LOGS_TRANSACTION_ID");
        await queryRunner.dropTable("transaction_logs");
    }
}
exports.CreateTransactionLogsTable1753692418768 = CreateTransactionLogsTable1753692418768;
