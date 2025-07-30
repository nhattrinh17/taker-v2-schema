"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateCustomerVoucherTable1753862041606 = void 0;
const typeorm_1 = require("typeorm");
class CreateCustomerVoucherTable1753862041606 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
            name: "customer_vouchers",
            columns: [
                {
                    name: "id",
                    type: "varchar(36)",
                    isPrimary: true,
                },
                {
                    name: "customerId",
                    type: "varchar",
                    length: "36",
                    isNullable: true,
                },
                {
                    name: "voucherId",
                    type: "varchar",
                    length: "36",
                },
                {
                    name: "timeUse",
                    type: "timestamp",
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
        await queryRunner.createForeignKey("customer_vouchers", new typeorm_1.TableForeignKey({
            columnNames: ["customerId"],
            referencedColumnNames: ["id"],
            referencedTableName: "customers",
            onDelete: "SET NULL",
        }));
        await queryRunner.createForeignKey("customer_vouchers", new typeorm_1.TableForeignKey({
            columnNames: ["voucherId"],
            referencedColumnNames: ["id"],
            referencedTableName: "vouchers",
            onDelete: "CASCADE",
        }));
    }
    async down(queryRunner) {
        await queryRunner.dropForeignKey("customer_vouchers", "FK_customerId");
        await queryRunner.dropForeignKey("customer_vouchers", "FK_voucherId");
        await queryRunner.dropTable("customer_vouchers");
    }
}
exports.CreateCustomerVoucherTable1753862041606 = CreateCustomerVoucherTable1753862041606;
