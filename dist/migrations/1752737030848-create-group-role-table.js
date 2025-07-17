"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateGroupRoleTable1752737030848 = void 0;
const typeorm_1 = require("typeorm");
class CreateGroupRoleTable1752737030848 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
            name: 'group_roles',
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
        await queryRunner.dropTable('group_roles');
    }
}
exports.CreateGroupRoleTable1752737030848 = CreateGroupRoleTable1752737030848;
