import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateActionTable1752736940132 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
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
            }),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('actions');
    }

}
