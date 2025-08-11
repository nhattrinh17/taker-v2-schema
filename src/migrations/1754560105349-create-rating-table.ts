import { MigrationInterface, QueryRunner, Table, TableIndex } from "typeorm";

export class CreateRatingTable1754560105349 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "ratings",
        columns: [
          {
            name: "id",
            type: "varchar(36)",
            isPrimary: true,
          },
          {
            name: "customerId",
            type: "varchar(36)",
            isNullable: true,
          },
          {
            name: "shoeBookingId",
            type: "varchar(36)",
            isNullable: true,
          },
          {
            name: "rating",
            type: "int",
            isNullable: false,
          },
          {
            name: "comment",
            type: "text",
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
          {
            name: "deletedAt",
            type: "datetime(6)",
            isNullable: true,
          },
        ],
        foreignKeys: [
          {
            columnNames: ["customerId"],
            referencedTableName: "customers",
            referencedColumnNames: ["id"],
            onDelete: "SET NULL",
            name: "FK_Rating_Customer",
          },
          {
            columnNames: ["shoeBookingId"],
            referencedTableName: "shoe_bookings",
            referencedColumnNames: ["id"],
            onDelete: "SET NULL ",
            name: "FK_Rating_ShoeBooking",
          },
        ],
      }),
      true
    );

    await queryRunner.createIndex(
      "ratings",
      new TableIndex({
        name: "IDX_Rating_CustomerId",
        columnNames: ["customerId"],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey("ratings", "FK_Rating_Customer");
    await queryRunner.dropForeignKey("ratings", "FK_Rating_ShoeBooking");
    await queryRunner.dropIndex("ratings", "IDX_Rating_CustomerId");
    await queryRunner.dropTable("ratings");
  }
}
