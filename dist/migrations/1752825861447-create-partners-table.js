"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreatePartnersTable1752825861447 = void 0;
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
                    name: "shopName",
                    type: "varchar",
                    isNullable: false,
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
                    name: "address",
                    type: "varchar",
                    isNullable: true,
                },
                {
                    name: 'location',
                    type: 'text',
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
                }
            ],
        }));
    }
    async down(queryRunner) {
    }
}
exports.CreatePartnersTable1752825861447 = CreatePartnersTable1752825861447;
//# sourceMappingURL=1752825861447-create-partners-table.js.map