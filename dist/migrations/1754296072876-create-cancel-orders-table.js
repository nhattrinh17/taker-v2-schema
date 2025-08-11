"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateCancelOrdersTable1754296072876 = void 0;
const typeorm_1 = require("typeorm");
class CreateCancelOrdersTable1754296072876 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
            name: "cancel_orders",
            columns: [
                {
                    name: "id",
                    type: "varchar(36)",
                    isPrimary: true,
                },
                {
                    name: "shoeBookingId",
                    type: "varchar(36)",
                    isNullable: true,
                },
                {
                    name: "partnerId",
                    type: "varchar(36)",
                    isNullable: true,
                },
                {
                    name: "customerId",
                    type: "varchar(36)",
                    isNullable: true,
                },
                {
                    name: "driverId",
                    type: "varchar(36)",
                    isNullable: true,
                },
                {
                    name: "reason",
                    type: "text",
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
        await queryRunner.createForeignKey("cancel_orders", new typeorm_1.TableForeignKey({
            name: "FK_CancelOrders_ShoeBooking",
            columnNames: ["shoeBookingId"],
            referencedColumnNames: ["id"],
            referencedTableName: "shoe_bookings",
            onDelete: "CASCADE",
        }));
        await queryRunner.createForeignKey("cancel_orders", new typeorm_1.TableForeignKey({
            name: "FK_CancelOrders_Partner",
            columnNames: ["partnerId"],
            referencedColumnNames: ["id"],
            referencedTableName: "partners",
            onDelete: "CASCADE",
        }));
        await queryRunner.createForeignKey("cancel_orders", new typeorm_1.TableForeignKey({
            name: "FK_CancelOrders_Customer",
            columnNames: ["customerId"],
            referencedColumnNames: ["id"],
            referencedTableName: "customers",
            onDelete: "CASCADE",
        }));
        await queryRunner.createForeignKey("cancel_orders", new typeorm_1.TableForeignKey({
            name: "FK_CancelOrders_Driver",
            columnNames: ["driverId"],
            referencedColumnNames: ["id"],
            referencedTableName: "drivers",
            onDelete: "SET NULL",
        }));
    }
    async down(queryRunner) {
        await queryRunner.dropForeignKey("cancel_orders", "FK_CancelOrders_ShoeBooking");
        await queryRunner.dropForeignKey("cancel_orders", "FK_CancelOrders_Partner");
        await queryRunner.dropForeignKey("cancel_orders", "FK_CancelOrders_Customer");
        await queryRunner.dropForeignKey("cancel_orders", "FK_CancelOrders_Driver");
        await queryRunner.dropTable("cancel_orders");
    }
}
exports.CreateCancelOrdersTable1754296072876 = CreateCancelOrdersTable1754296072876;
