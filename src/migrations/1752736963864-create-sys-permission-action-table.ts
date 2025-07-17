import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class CreateSysPermissionActionTable1752736963864 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
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
            }),
        );

        await queryRunner.createForeignKey(
            'sys_permission_actions',
            new TableForeignKey({
                columnNames: ['sysPermissionId'],
                referencedTableName: 'sys_permissions',
                referencedColumnNames: ['id'],
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE',
            }),
        );

        await queryRunner.createForeignKey(
            'sys_permission_actions',
            new TableForeignKey({
                columnNames: ['actionId'],
                referencedTableName: 'actions',
                referencedColumnNames: ['id'],
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE',
            }),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('sys_permission_actions');
    }

}
