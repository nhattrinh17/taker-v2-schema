"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateShoeServicesTable1753850247550 = void 0;
const typeorm_1 = require("typeorm");
class CreateShoeServicesTable1753850247550 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
            name: "shoe_services",
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
                    name: "price",
                    type: "int",
                    isNullable: true,
                },
                {
                    name: "description",
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
    }
    async down(queryRunner) {
        await queryRunner.dropTable("shoe_services");
    }
}
exports.CreateShoeServicesTable1753850247550 = CreateShoeServicesTable1753850247550;
