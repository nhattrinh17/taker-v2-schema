"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateGroupRolePermissionTable1752737039385 = void 0;
const typeorm_1 = require("typeorm");
class CreateGroupRolePermissionTable1752737039385 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
            name: 'group_role_permissions',
            columns: [
                {
                    name: 'id',
                    type: 'varchar(36)',
                    isPrimary: true,
                },
                {
                    name: 'groupRoleId',
                    type: 'varchar(36)',
                },
                {
                    name: 'sysPermissionActionId',
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
        await queryRunner.createForeignKey('group_role_permissions', new typeorm_1.TableForeignKey({
            columnNames: ['groupRoleId'],
            referencedTableName: 'group_roles',
            referencedColumnNames: ['id'],
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
        }));
        await queryRunner.createForeignKey('group_role_permissions', new typeorm_1.TableForeignKey({
            columnNames: ['sysPermissionActionId'],
            referencedTableName: 'sys_permission_actions',
            referencedColumnNames: ['id'],
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
        }));
    }
    async down(queryRunner) {
        await queryRunner.dropTable('group_role_permissions');
    }
}
exports.CreateGroupRolePermissionTable1752737039385 = CreateGroupRolePermissionTable1752737039385;
//# sourceMappingURL=1752737039385-create-group-role-permission-table.js.map