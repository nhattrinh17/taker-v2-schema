import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class CreateAdminTable1752737073489 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
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
            }),
        );

        await queryRunner.createForeignKey(
            'admins',
            new TableForeignKey({
                columnNames: ['groupRoleId'],
                referencedTableName: 'group_roles',
                referencedColumnNames: ['id'],
                onDelete: 'SET NULL',
                onUpdate: 'CASCADE',
            }),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('admins');
    }

}
