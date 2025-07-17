"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateSysPermissionTable1752736957461 = void 0;
const typeorm_1 = require("typeorm");
class CreateSysPermissionTable1752736957461 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
            name: 'sys_permissions',
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
        await queryRunner.dropTable('sys_permissions');
    }
}
exports.CreateSysPermissionTable1752736957461 = CreateSysPermissionTable1752736957461;
