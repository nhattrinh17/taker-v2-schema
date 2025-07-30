"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateVoucherTable1753862031052 = void 0;
const enums_1 = require("../common/enums");
const typeorm_1 = require("typeorm");
class CreateVoucherTable1753862031052 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
            name: "vouchers",
            columns: [
                {
                    name: "id",
                    type: "varchar(36)",
                    isPrimary: true,
                },
                {
                    name: "name",
                    type: "varchar(255)",
                },
                {
                    name: "description",
                    type: "text",
                },
                {
                    name: "code",
                    type: "varchar",
                    isNullable: true,
                },
                {
                    name: "paymentMethod",
                    type: "varchar",
                    isNullable: true,
                },
                {
                    name: "discount",
                    type: "double",
                },
                {
                    name: "typeDiscount",
                    type: "enum",
                    enum: [...Object.values(enums_1.VoucherTypeDiscountEnum)],
                    default: `'${enums_1.VoucherTypeDiscountEnum.PERCENT}'`,
                },
                {
                    name: "discountToUp",
                    type: "double",
                    isNullable: true,
                },
                {
                    name: "minimumOrder",
                    type: "int",
                    isNullable: true,
                },
                {
                    name: "totalUse",
                    type: "int",
                    default: 0,
                },
                {
                    name: "quantity",
                    type: "int",
                    isNullable: true,
                },
                {
                    name: "icon",
                    type: "varchar",
                    isNullable: true,
                },
                {
                    name: "startTime",
                    type: "datetime",
                    isNullable: true,
                },
                {
                    name: "endTime",
                    type: "datetime",
                    isNullable: true,
                },
                {
                    name: "type",
                    type: "varchar",
                },
                {
                    name: "isGlobal",
                    type: "boolean",
                    default: false,
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
        await queryRunner.createIndex("vouchers", new typeorm_1.TableIndex({
            name: "IDX_VOUCHER_TYPE",
            columnNames: ["type"],
        }));
        await queryRunner.createIndex("vouchers", new typeorm_1.TableIndex({
            name: "IDX_VOUCHER_CODE",
            columnNames: ["code"],
        }));
    }
    async down(queryRunner) {
        await queryRunner.dropIndex("vouchers", "IDX_VOUCHER_TYPE");
        await queryRunner.dropIndex("vouchers", "IDX_VOUCHER_CODE");
        await queryRunner.dropTable("vouchers");
    }
}
exports.CreateVoucherTable1753862031052 = CreateVoucherTable1753862031052;
