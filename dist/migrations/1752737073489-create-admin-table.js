"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateAdminTable1752737073489 = void 0;
const typeorm_1 = require("typeorm");
class CreateAdminTable1752737073489 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
            name: 'admins',
            columns: [
                {
                    name: 'id',
                    type: 'varchar(36)',
                    isPrimary: true,
                },
                {
                    name: 'userName',
                    type: 'varchar',
                    isUnique: true,
                },
                {
                    name: 'password',
                    type: 'varchar',
                },
                {
                    name: 'fcmToken',
                    type: 'varchar',
                    isNullable: true,
                },
                {
                    name: 'lastLoginDate',
                    type: 'datetime',
                    isNullable: true,
                },
                {
                    name: 'ipAddress',
                    type: 'varchar',
                    isNullable: true,
                },
                {
                    name: 'groupRoleId',
                    type: 'varchar(36)',
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
        await queryRunner.createForeignKey('admins', new typeorm_1.TableForeignKey({
            columnNames: ['groupRoleId'],
            referencedTableName: 'group_roles',
            referencedColumnNames: ['id'],
            onDelete: 'SET NULL',
            onUpdate: 'CASCADE',
        }));
    }
    async down(queryRunner) {
        await queryRunner.dropTable('admins');
    }
}
exports.CreateAdminTable1752737073489 = CreateAdminTable1752737073489;
