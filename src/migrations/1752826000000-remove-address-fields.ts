import { BASE_OPERATING_HOURS } from "@common/constants/app.constant";
import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class RemoveAddressFields1752826000000 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    // Remove address field from customers table
    await queryRunner.dropColumn("customers", "address");

    // Remove address-related fields from partners table
    await queryRunner.dropColumn("partners", "address");
    await queryRunner.dropColumn("partners", "location");
    await queryRunner.dropColumn("partners", "latLongToCell");
    await queryRunner.dropColumn("partners", "operatingHours");

    await queryRunner.addColumn(
      "partners",
      new TableColumn({
        name: "referralCode",
        type: "varchar",
        isNullable: true,
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    // Add back address field to customers table
    await queryRunner.addColumn(
      "customers",
      new TableColumn({
        name: "address",
        type: "varchar",
        isNullable: true,
      })
    );

    // Add back address-related fields to partners table
    await queryRunner.addColumn(
      "partners",
      new TableColumn({
        name: "address",
        type: "varchar",
        isNullable: true,
      })
    );

    await queryRunner.addColumn(
      "partners",
      new TableColumn({
        name: "location",
        type: "text",
        isNullable: true,
      })
    );

    await queryRunner.addColumn(
      "partners",
      new TableColumn({
        name: "latLongToCell",
        type: "varchar(255)",
        isNullable: true,
      })
    );

    await queryRunner.addColumn(
      "partners",
      new TableColumn({
        name: "operatingHours",
        type: "varchar(255)",
        isNullable: true,
        default: `'${JSON.stringify(BASE_OPERATING_HOURS)}'`,
      })
    );

    await queryRunner.dropColumn("partners", "referralCode");
  }
}
