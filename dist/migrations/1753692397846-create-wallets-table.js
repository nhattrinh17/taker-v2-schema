"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateWalletsTable1753692397846 = void 0;
const typeorm_1 = require("typeorm");
class CreateWalletsTable1753692397846 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
            name: "wallets",
            columns: [
                {
                    name: "id",
                    type: "varchar(36)",
                    isPrimary: true,
                },
                {
                    name: "customerId",
                    type: "varchar(36)",
                    isNullable: true,
                },
                {
                    name: "partnerId",
                    type: "varchar(36)",
                    isNullable: true,
                },
                {
                    name: "balance",
                    type: "double",
                    default: 0,
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
                    name: "FK_Wallet_Customer",
                    columnNames: ["customerId"],
                    referencedTableName: "customers",
                    referencedColumnNames: ["id"],
                    onDelete: "SET NULL",
                },
                {
                    name: "FK_Wallet_Partner",
                    columnNames: ["partnerId"],
                    referencedTableName: "partners",
                    referencedColumnNames: ["id"],
                    onDelete: "SET NULL",
                },
            ],
        }), true);
    }
    async down(queryRunner) {
        await queryRunner.dropForeignKey("wallets", "FK_Wallet_Customer");
        await queryRunner.dropForeignKey("wallets", "FK_Wallet_Partner");
        await queryRunner.dropTable("wallets");
    }
}
exports.CreateWalletsTable1753692397846 = CreateWalletsTable1753692397846;
