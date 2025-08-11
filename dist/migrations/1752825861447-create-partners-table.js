"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreatePartnersTable1752825861447 = void 0;
const app_constant_1 = require("../common/constants/app.constant");
const enums_1 = require("../common/enums");
const typeorm_1 = require("typeorm");
class CreatePartnersTable1752825861447 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
            name: "partners",
            columns: [
                {
                    name: "id",
                    type: "varchar(36)",
                    isPrimary: true,
                },
                {
                    name: "name",
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
                    name: 'latLongToCell',
                    type: "varchar(255)",
                    isNullable: true,
                },
                {
                    name: "operatingHours",
                    type: "varchar(255)",
                    default: `'${JSON.stringify(app_constant_1.BASE_OPERATING_HOURS)}'`,
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
                    name: 'type',
                    type: 'enum',
                    enum: [...Object.values(enums_1.PartnerTypeEnum)],
                    isNullable: true,
                },
                {
                    name: "activeSince",
                    type: "int",
                },
                {
                    name: "appleId",
                    type: "varchar",
                    length: "255",
                    isNullable: true,
                },
                {
                    name: "appleName",
                    type: "varchar",
                    length: "255",
                    isNullable: true,
                },
                {
                    name: "googleId",
                    type: "varchar",
                    length: "255",
                    isNullable: true,
                },
                {
                    name: "googleName",
                    type: "varchar",
                    length: "255",
                    isNullable: true,
                },
                {
                    name: 'refreshToken',
                    type: 'varchar(512)',
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
        await queryRunner.dropTable("partners", true, true, true);
    }
}
exports.CreatePartnersTable1752825861447 = CreatePartnersTable1752825861447;
