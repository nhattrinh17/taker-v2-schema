"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateWalletLogsTable1753692406098 = void 0;
const typeorm_1 = require("typeorm");
class CreateWalletLogsTable1753692406098 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
            name: "wallet_logs",
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
                    name: "previousBalance",
                    type: "double",
                    default: 0,
                },
                {
                    name: "currentBalance",
                    type: "double",
                    default: 0,
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
                    default: "CURRENT_TIMESTAMP(6)",
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
            foreignKeys: [
                {
                    name: "FK_WalletLog_Wallet",
                    columnNames: ["walletId"],
                    referencedTableName: "wallets",
                    referencedColumnNames: ["id"],
                    onDelete: "SET NULL",
                },
            ],
        }), true);
        await queryRunner.createIndex("wallet_logs", new typeorm_1.TableIndex({
            name: "IDX_WALLET_LOGS_TRANSACTION_DATE",
            columnNames: ["transactionDate"],
        }));
    }
    async down(queryRunner) {
        await queryRunner.dropForeignKey("wallet_logs", "FK_WalletLog_Wallet");
        await queryRunner.dropIndex("wallet_logs", "IDX_WALLET_LOGS_TRANSACTION_DATE");
        await queryRunner.dropTable("wallet_logs");
    }
}
exports.CreateWalletLogsTable1753692406098 = CreateWalletLogsTable1753692406098;
