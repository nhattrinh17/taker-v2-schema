"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateTransactionsTable1753692413403 = void 0;
const enums_1 = require("../common/enums");
const typeorm_1 = require("typeorm");
class CreateTransactionsTable1753692413403 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
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
                    enum: Object.values(enums_1.TransactionType),
                    default: `'${enums_1.TransactionType.DEPOSIT}'`,
                },
                {
                    name: "transactionSource",
                    type: "varchar(255)",
                    isNullable: true,
                },
                {
                    name: "status",
                    type: "enum",
                    enum: Object.values(enums_1.TransactionStatus),
                    default: `'${enums_1.TransactionStatus.PENDING}'`,
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
        }), true);
        await queryRunner.createForeignKey("transactions", new typeorm_1.TableForeignKey({
            name: "FK_transactions_walletId",
            columnNames: ["walletId"],
            referencedColumnNames: ["id"],
            referencedTableName: "wallets",
            onDelete: "SET NULL",
            onUpdate: "CASCADE",
        }));
    }
    async down(queryRunner) {
        await queryRunner.dropForeignKey("transactions", "FK_transactions_walletId");
        await queryRunner.dropTable("transactions");
    }
}
exports.CreateTransactionsTable1753692413403 = CreateTransactionsTable1753692413403;
