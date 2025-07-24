"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateFbColumn1753347656906 = void 0;
const typeorm_1 = require("typeorm");
class UpdateFbColumn1753347656906 {
    async up(queryRunner) {
        await queryRunner.addColumn("partners", new typeorm_1.TableColumn({
            name: "facebookId",
            type: "varchar",
            isNullable: true,
            length: "255",
            comment: "Facebook ID of the partner for social login",
        }));
        await queryRunner.addColumn("partners", new typeorm_1.TableColumn({
            name: "facebookName",
            type: "varchar",
            isNullable: true,
            length: "255",
            comment: "Facebook of the partner for social login",
        }));
        await queryRunner.addColumn("customers", new typeorm_1.TableColumn({
            name: "facebookId",
            type: "varchar",
            isNullable: true,
            length: "255",
            comment: "Facebook ID of the customer for social login",
        }));
        await queryRunner.addColumn("customers", new typeorm_1.TableColumn({
            name: "facebookName",
            type: "varchar",
            isNullable: true,
            length: "255",
            comment: "Facebook of the customer for social login",
        }));
    }
    async down(queryRunner) {
        await queryRunner.dropColumn("partners", "facebookId");
        await queryRunner.dropColumn("partners", "facebookName");
        await queryRunner.dropColumn("customers", "facebookId");
        await queryRunner.dropColumn("customers", "facebookName");
    }
}
exports.UpdateFbColumn1753347656906 = UpdateFbColumn1753347656906;
