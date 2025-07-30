import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from "typeorm";

export class CreateShoeServicesTable1753850247550
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "shoe_services",
        columns: [
          {
            name: "id",
            type: "varchar(36)",
            isPrimary: true,
          },
          {
            name: "name",
            type: "varchar(255)",
          },
          {
            name: "price",
            type: "int",
          },
          {
            name: "description",
            type: "text",
            isNullable: true,
          },
          {
            name: "customerId",
            type: "varchar(36)",
            isNullable: true, // nullable nếu dùng cho cả public & private
          },
          {
            name: "deletedAt",
            type: "datetime(6)",
            isNullable: true,
          },
          {
            name: "createdAt",
            type: "datetime(6)",
            default: "CURRENT_TIMESTAMP(6)",
          },
          {
            name: "updatedAt",
            type: "datetime(6)",
            default: "CURRENT_TIMESTAMP(6)",
            onUpdate: "CURRENT_TIMESTAMP(6)",
          },
        ],
      })
    );

    await queryRunner.createForeignKey(
      "shoe_services",
      new TableForeignKey({
        name: "FK_ShoeServices_Partner",
        columnNames: ["customerId"],
        referencedColumnNames: ["id"],
        referencedTableName: "customers",
        onDelete: "CASCADE", // nếu customer bị xóa thì set customerId thành null
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey(
      "shoe_services",
      "FK_ShoeServices_Partner"
    );
    await queryRunner.dropTable("shoe_services");
  }
}
