"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateDriverTable1754295896452 = void 0;
const enums_1 = require("../common/enums");
const typeorm_1 = require("typeorm");
class CreateDriverTable1754295896452 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
            name: "drivers",
            columns: [
                {
                    name: "id",
                    type: "varchar(36)",
                    isPrimary: true,
                },
                {
                    name: "fullName",
                    type: "varchar",
                    isNullable: false,
                },
                {
                    name: "fcmToken",
                    type: "varchar",
                    isNullable: true,
                },
                {
                    name: "email",
                    type: "varchar",
                    isUnique: true,
                    isNullable: false,
                },
                {
                    name: "phone",
                    type: "varchar",
                    isUnique: true,
                    isNullable: true,
                },
                {
                    name: "password",
                    type: "varchar",
                    isNullable: true,
                },
                {
                    name: "address",
                    type: "varchar",
                    isNullable: true,
                },
                {
                    name: "location",
                    type: "text",
                    isNullable: true,
                },
                {
                    name: "latLongToCell",
                    type: "varchar(255)",
                    isNullable: true,
                },
                {
                    name: "isLogin",
                    type: "boolean",
                    default: false,
                },
                {
                    name: "isVerified",
                    type: "boolean",
                    default: false,
                },
                {
                    name: "bankName",
                    type: "varchar",
                    isNullable: true,
                },
                {
                    name: "bankAccountNumber",
                    type: "varchar",
                    isNullable: true,
                },
                {
                    name: "bankAccountName",
                    type: "varchar",
                    isNullable: true,
                },
                {
                    name: "avatar",
                    type: "varchar",
                    isNullable: true,
                },
                {
                    name: "status",
                    type: "enum",
                    enum: [...Object.values(enums_1.UserStatusEnum)],
                    default: `'${enums_1.UserStatusEnum.PENDING}'`,
                },
                {
                    name: "step",
                    type: "enum",
                    enum: [...Object.values(enums_1.StepEnum)],
                    default: `'${enums_1.StepEnum.REGISTER_INFO}'`,
                },
                {
                    name: "refreshToken",
                    type: "varchar(512)",
                    isNullable: true,
                },
                {
                    name: "deletedAt",
                    type: "datetime(6)",
                    isNullable: true,
                },
                {
                    name: "createdAt",
                    type: "datetime",
                    default: "CURRENT_TIMESTAMP",
                },
                {
                    name: "updatedAt",
                    type: "datetime",
                    default: "CURRENT_TIMESTAMP",
                },
            ],
        }));
    }
    async down(queryRunner) {
        await queryRunner.dropTable("drivers", true, true, true);
    }
}
exports.CreateDriverTable1754295896452 = CreateDriverTable1754295896452;
