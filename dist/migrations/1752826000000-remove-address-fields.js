"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RemoveAddressFields1752826000000 = void 0;
const typeorm_1 = require("typeorm");
class RemoveAddressFields1752826000000 {
    async up(queryRunner) {
        await queryRunner.dropColumn("customers", "address");
        await queryRunner.dropColumn("partners", "address");
        await queryRunner.dropColumn("partners", "location");
        await queryRunner.dropColumn("partners", "latLongToCell");
        await queryRunner.addColumn("partners", new typeorm_1.TableColumn({
            name: "referralCode",
            type: "varchar",
            isNullable: true,
        }));
    }
    async down(queryRunner) {
        await queryRunner.addColumn("customers", new typeorm_1.TableColumn({
            name: "address",
            type: "varchar",
            isNullable: true,
        }));
        await queryRunner.addColumn("partners", new typeorm_1.TableColumn({
            name: "address",
            type: "varchar",
            isNullable: true,
        }));
        await queryRunner.addColumn("partners", new typeorm_1.TableColumn({
            name: "location",
            type: "text",
            isNullable: true,
        }));
        await queryRunner.addColumn("partners", new typeorm_1.TableColumn({
            name: "latLongToCell",
            type: "varchar(255)",
            isNullable: true,
        }));
        await queryRunner.dropColumn("partners", "referralCode");
    }
}
exports.RemoveAddressFields1752826000000 = RemoveAddressFields1752826000000;
