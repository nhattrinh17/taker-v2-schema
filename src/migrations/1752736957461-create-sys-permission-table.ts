import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateSysPermissionTable1752736957461 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
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
            }),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('sys_permissions');
    }

}
