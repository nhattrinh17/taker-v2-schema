import { MigrationInterface, QueryRunner, TableColumn, TableForeignKey } from "typeorm";

export class UpdateVehicleColumnInShoeBookingTable1754296058816 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    // Add columns
    await queryRunner.addColumn("shoe_bookings", new TableColumn({
      name: "deliveryDriverId",
      type: "varchar(36)",
      isNullable: true,
    }));

    await queryRunner.addColumn("shoe_bookings", new TableColumn({
      name: "returnDriverId",
      type: "varchar(36)",
      isNullable: true,
    }));

    // Add foreign keys
    await queryRunner.createForeignKey("shoe_bookings", new TableForeignKey({
      columnNames: ["deliveryDriverId"],
      referencedTableName: "drivers",
      referencedColumnNames: ["id"],
      onDelete: "SET NULL",
    }));

    await queryRunner.createForeignKey("shoe_bookings", new TableForeignKey({
      columnNames: ["returnDriverId"],
      referencedTableName: "drivers",
      referencedColumnNames: ["id"],
      onDelete: "SET NULL",
    }));
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    // Drop foreign keys first
    const table = await queryRunner.getTable("shoe_bookings");

    const deliveryFk = table.foreignKeys.find(
      (fk) => fk.columnNames.includes("deliveryDriverId")
    );
    if (deliveryFk) await queryRunner.dropForeignKey("shoe_bookings", deliveryFk);

    const returnFk = table.foreignKeys.find(
      (fk) => fk.columnNames.includes("returnDriverId")
    );
    if (returnFk) await queryRunner.dropForeignKey("shoe_bookings", returnFk);

    // Then drop columns
    await queryRunner.dropColumn("shoe_bookings", "deliveryDriverId");
    await queryRunner.dropColumn("shoe_bookings", "returnDriverId");
  }
}
