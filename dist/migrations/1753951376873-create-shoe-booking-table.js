"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateShoeBookingTable1753951376873 = void 0;
const enums_1 = require("../common/enums");
const typeorm_1 = require("typeorm");
class CreateShoeBookingTable1753951376873 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
            name: "shoe_bookings",
            columns: [
                {
                    name: "id",
                    type: "varchar(36)",
                    isPrimary: true,
                },
                {
                    name: "shoeServiceId",
                    type: "varchar(36)",
                    isNullable: true,
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
                    name: "transactionId",
                    type: "varchar(36)",
                    isNullable: true,
                },
                {
                    name: "customerVoucherId",
                    type: "varchar(36)",
                    isNullable: true,
                },
                {
                    name: "shoeServiceDes",
                    type: "text",
                    isNullable: true,
                },
                {
                    name: "bookingDate",
                    type: "datetime(6)",
                    isNullable: true,
                },
                {
                    name: "status",
                    type: "enum",
                    enum: [...Object.values(enums_1.ShoeBookingStatusEnum)],
                    default: `'${enums_1.ShoeBookingStatusEnum.PENDING}'`,
                },
                {
                    name: "expectedDeliveryTime",
                    enum: [...Object.values(enums_1.ExpectedDeliveryTimeEnum)],
                    default: `'${enums_1.ExpectedDeliveryTimeEnum.HOUR_0_24}'`,
                    type: "enum",
                },
                {
                    name: "pickupAddress",
                    type: "varchar",
                    length: "255",
                },
                {
                    name: "deliveryAddress",
                    type: "varchar",
                    length: "255",
                },
                {
                    name: "returnAddress",
                    type: "varchar",
                    length: "255",
                },
                {
                    name: "pickupLocation",
                    type: "varchar",
                    length: "255",
                    isNullable: true,
                },
                {
                    name: "deliveryLocation",
                    type: "varchar",
                    length: "255",
                    isNullable: true,
                },
                {
                    name: "returnLocation",
                    type: "varchar",
                    length: "255",
                    isNullable: true,
                },
                {
                    name: "originalPrice",
                    type: "int",
                    isNullable: true,
                },
                {
                    name: "totalPrice",
                    type: "int",
                    isNullable: true,
                },
                {
                    name: "finalPrice",
                    type: "int",
                    isNullable: true,
                },
                {
                    name: "partnerRevenue",
                    type: "int",
                    default: 0,
                },
                {
                    name: "note",
                    type: "text",
                    isNullable: true,
                },
                {
                    name: "imageUrls",
                    type: "text",
                    isNullable: true,
                },
                {
                    name: "processingImages",
                    type: "text",
                    isNullable: true,
                    comment: "JSON string of image URLs during the cleaning/repairing process",
                },
                {
                    name: "completedImages",
                    type: "text",
                    isNullable: true,
                    comment: "JSON string of image URLs after completion",
                },
                {
                    name: "orderId",
                    type: "varchar",
                    length: "255",
                    isUnique: true,
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
        await queryRunner.createForeignKey("shoe_bookings", new typeorm_1.TableForeignKey({
            name: "FK_ShoeService_ShoeBooking",
            columnNames: ["shoeServiceId"],
            referencedColumnNames: ["id"],
            referencedTableName: "shoe_services",
            onDelete: "SET NULL",
        }));
        await queryRunner.createForeignKey("shoe_bookings", new typeorm_1.TableForeignKey({
            name: "FK_Customer_ShoeBooking",
            columnNames: ["customerId"],
            referencedColumnNames: ["id"],
            referencedTableName: "customers",
            onDelete: "SET NULL",
        }));
        await queryRunner.createForeignKey("shoe_bookings", new typeorm_1.TableForeignKey({
            name: "FK_Partner_ShoeBooking",
            columnNames: ["partnerId"],
            referencedColumnNames: ["id"],
            referencedTableName: "partners",
            onDelete: "SET NULL",
        }));
        await queryRunner.createForeignKey("shoe_bookings", new typeorm_1.TableForeignKey({
            name: "FK_Transaction_ShoeBooking",
            columnNames: ["transactionId"],
            referencedColumnNames: ["id"],
            referencedTableName: "transactions",
            onDelete: "SET NULL",
        }));
        await queryRunner.createForeignKey("shoe_bookings", new typeorm_1.TableForeignKey({
            name: "FK_Voucher_ShoeBooking",
            columnNames: ["customerVoucherId"],
            referencedColumnNames: ["id"],
            referencedTableName: "customer_vouchers",
            onDelete: "SET NULL",
        }));
    }
    async down(queryRunner) {
        const table = await queryRunner.getTable("shoe_bookings");
        const foreignKeys = table.foreignKeys;
        for (const foreignKey of foreignKeys) {
            await queryRunner.dropForeignKey("shoe_bookings", foreignKey);
        }
        await queryRunner.dropTable("shoe_bookings");
    }
}
exports.CreateShoeBookingTable1753951376873 = CreateShoeBookingTable1753951376873;
