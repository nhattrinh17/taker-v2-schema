import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class CreateGroupRolePermissionTable1752737039385 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
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
            }),
        );

        await queryRunner.createForeignKey(
            'group_role_permissions',
            new TableForeignKey({
                columnNames: ['groupRoleId'],
                referencedTableName: 'group_roles',
                referencedColumnNames: ['id'],
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE',
            }),
        );

        await queryRunner.createForeignKey(
            'group_role_permissions',
            new TableForeignKey({
                columnNames: ['sysPermissionActionId'],
                referencedTableName: 'sys_permission_actions',
                referencedColumnNames: ['id'],
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE',
            }),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('group_role_permissions');
    }

}
