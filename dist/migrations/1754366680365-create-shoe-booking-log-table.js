"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateShoeBookingLogTable1754366680365 = void 0;
const enums_1 = require("../common/enums");
const typeorm_1 = require("typeorm");
class CreateShoeBookingLogTable1754366680365 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
            name: "shoe_booking_logs",
            columns: [
                {
                    name: "id",
                    type: "varchar(36)",
                    isPrimary: true,
                },
                { name: "shoeBookingId", type: "varchar(36)", isNullable: true },
                {
                    name: "fromStatus",
                    type: "enum",
                    enum: [...Object.values(enums_1.ShoeBookingStatusEnum)],
                    isNullable: true,
                },
                {
                    name: "toStatus",
                    type: "enum",
                    enum: [...Object.values(enums_1.ShoeBookingStatusEnum)],
                    isNullable: true,
                },
                {
                    name: "actorId",
                    type: "varchar(36)",
                    isNullable: true,
                },
                {
                    name: "actorType",
                    type: "enum",
                    enum: [...Object.values(enums_1.ActorTypeEnum)],
                    default: `'${enums_1.ActorTypeEnum.SYSTEM}'`,
                },
                {
                    name: "details",
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
            foreignKeys: [
                {
                    columnNames: ["shoeBookingId"],
                    referencedTableName: "shoe_bookings",
                    referencedColumnNames: ["id"],
                    onDelete: "CASCADE",
                    onUpdate: "CASCADE",
                    name: "FK_ShoeBookingLog_ShoeBooking",
                },
            ],
        }));
    }
    async down(queryRunner) {
        await queryRunner.dropForeignKey("shoe_booking_logs", "FK_ShoeBookingLog_ShoeBooking");
        await queryRunner.dropTable("shoe_booking_logs");
    }
}
exports.CreateShoeBookingLogTable1754366680365 = CreateShoeBookingLogTable1754366680365;
