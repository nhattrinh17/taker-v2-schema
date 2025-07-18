"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateSysPermissionActionTable1752736963864 = void 0;
const typeorm_1 = require("typeorm");
class CreateSysPermissionActionTable1752736963864 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
            name: 'sys_permission_actions',
            columns: [
                {
                    name: 'id',
                    type: 'varchar(36)',
                    isPrimary: true,
                },
                {
                    name: 'sysPermissionId',
                    type: 'varchar(36)',
                },
                {
                    name: 'actionId',
                    type: 'varchar(36)',
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
        await queryRunner.createForeignKey('sys_permission_actions', new typeorm_1.TableForeignKey({
            columnNames: ['sysPermissionId'],
            referencedTableName: 'sys_permissions',
            referencedColumnNames: ['id'],
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
        }));
        await queryRunner.createForeignKey('sys_permission_actions', new typeorm_1.TableForeignKey({
            columnNames: ['actionId'],
            referencedTableName: 'actions',
            referencedColumnNames: ['id'],
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
        }));
    }
    async down(queryRunner) {
        await queryRunner.dropTable('sys_permission_actions');
    }
}
exports.CreateSysPermissionActionTable1752736963864 = CreateSysPermissionActionTable1752736963864;
