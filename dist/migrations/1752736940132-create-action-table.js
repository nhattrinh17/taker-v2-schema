"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateActionTable1752736940132 = void 0;
const typeorm_1 = require("typeorm");
class CreateActionTable1752736940132 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
            name: 'actions',
            columns: [
                {
                    name: 'id',
                    type: 'varchar(36)',
                    isPrimary: true,
                },
                {
                    name: 'name',
                    type: 'varchar(100)',
                    isUnique: true,
                },
                {
                    name: 'description',
                    type: 'varchar(255)',
                    isNullable: true,
                },
                {
                    name: 'deletedAt',
                    type: 'datetime(6)',
                    isNullable: true,
                },
                {
                    name: 'createdAt',
                    type: 'datetime(6)',
                    default: 'CURRENT_TIMESTAMP(6)',
                },
                {
                    name: 'updatedAt',
                    type: 'datetime(6)',
                    default: 'CURRENT_TIMESTAMP(6)',
                    onUpdate: 'CURRENT_TIMESTAMP(6)',
                },
            ],
        }));
    }
    async down(queryRunner) {
        await queryRunner.dropTable('actions');
    }
}
exports.CreateActionTable1752736940132 = CreateActionTable1752736940132;
