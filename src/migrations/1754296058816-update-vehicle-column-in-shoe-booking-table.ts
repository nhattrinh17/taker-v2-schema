import { MigrationInterface, QueryRunner, TableColumn, TableForeignKey } from "typeorm";

export class UpdateVehicleColumnInShoeBookingTable1754296058816 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    // Add columns
    await queryRunner.addColumn("shoe_bookings", new TableColumn({
      name: "deliveryVehicleId",
      type: "varchar(36)",
      isNullable: true,
    }));

    await queryRunner.addColumn("shoe_bookings", new TableColumn({
      name: "returnVehicleId",
      type: "varchar(36)",
      isNullable: true,
    }));

    // Add foreign keys
    await queryRunner.createForeignKey("shoe_bookings", new TableForeignKey({
      columnNames: ["deliveryVehicleId"],
      referencedTableName: "vehicle_registries",
      referencedColumnNames: ["id"],
      onDelete: "SET NULL",
    }));

    await queryRunner.createForeignKey("shoe_bookings", new TableForeignKey({
      columnNames: ["returnVehicleId"],
      referencedTableName: "vehicle_registries",
      referencedColumnNames: ["id"],
      onDelete: "SET NULL",
    }));
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    // Drop foreign keys first
    const table = await queryRunner.getTable("shoe_bookings");

    const deliveryFk = table.foreignKeys.find(
      (fk) => fk.columnNames.includes("deliveryVehicleId")
    );
    if (deliveryFk) await queryRunner.dropForeignKey("shoe_bookings", deliveryFk);

    const returnFk = table.foreignKeys.find(
      (fk) => fk.columnNames.includes("returnVehicleId")
    );
    if (returnFk) await queryRunner.dropForeignKey("shoe_bookings", returnFk);

    // Then drop columns
    await queryRunner.dropColumn("shoe_bookings", "deliveryVehicleId");
    await queryRunner.dropColumn("shoe_bookings", "returnVehicleId");
  }
}
