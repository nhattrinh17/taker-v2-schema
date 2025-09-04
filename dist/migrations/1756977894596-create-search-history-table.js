"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateSearchHistoryTable1756977894596 = void 0;
const typeorm_1 = require("typeorm");
class CreateSearchHistoryTable1756977894596 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
            name: "search_histories",
            columns: [
                {
                    name: "id",
                    type: "varchar(36)",
                    isPrimary: true,
                },
                {
                    name: "customerId",
                    type: "varchar(36)",
                },
                {
                    name: "name",
                    type: "text",
                    isNullable: true,
                },
                {
                    name: "address",
                    type: "text",
                    isNullable: true,
                },
                {
                    name: "latitude",
                    type: "varchar",
                    isNullable: true,
                },
                {
                    name: "longitude",
                    type: "varchar",
                    isNullable: true,
                },
                {
                    name: "type",
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
        await queryRunner.createForeignKey("search_histories", new typeorm_1.TableForeignKey({
            columnNames: ["customerId"],
            referencedColumnNames: ["id"],
            referencedTableName: "customers",
            onDelete: "CASCADE",
        }));
    }
    async down(queryRunner) {
        const table = await queryRunner.getTable("search_histories");
        const foreignKey = table.foreignKeys.find((fk) => fk.columnNames.indexOf("customerId") !== -1);
        await queryRunner.dropForeignKey("search_histories", foreignKey);
        await queryRunner.dropTable("search_histories");
    }
}
exports.CreateSearchHistoryTable1756977894596 = CreateSearchHistoryTable1756977894596;
