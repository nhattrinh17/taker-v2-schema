import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
  TableIndex,
} from "typeorm";

export class CreateAddressesTable1752826000001 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "addresses",
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
            name: "partnerId",
            type: "varchar(36)",
            isNullable: true,
          },
          {
            name: "address",
            type: "varchar",
            isNullable: false,
          },
          {
            name: "location",
            type: "text",
            isNullable: true,
            comment: "JSON string containing location details",
          },
          {
            name: "latLongToCell",
            type: "varchar(255)",
            isNullable: true,
            comment: "Latitude and longitude cell identifier",
          },
          {
            name: "isDefault",
            type: "boolean",
            default: false,
            comment: "Is this the default address for the user",
          },
          {
            name: "label",
            type: "varchar(100)",
            isNullable: true,
            comment: "Address label like 'Home', 'Work', 'Shop', etc.",
          },
          {
            name: "fullName",
            type: "varchar",
            isNullable: true,
            comment: "Name of the person to receive at this address",
          },
          {
            name: "phone",
            type: "varchar",
            isNullable: true,
            comment: "Phone number of the person to receive at this address",
          },
          {
            name: "isPickupAddress",
            type: "boolean",
            default: false,
          },
          {
            name: "isReturnAddress",
            type: "boolean",
            default: false,
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
      }),
      true
    );

    // Create indexes for better performance
    await queryRunner.createIndex(
      "addresses",
      new TableIndex({
        name: "IDX_ADDRESS_IsDefault",
        columnNames: ["isDefault"],
      })
    );

    //create foreign keys
    await queryRunner.createForeignKey(
      "addresses",
      new TableForeignKey({
        name: "FK_Address_Customer",
        columnNames: ["customerId"],
        referencedColumnNames: ["id"],
        referencedTableName: "customers",
        onDelete: "CASCADE",
      })
    );

    await queryRunner.createForeignKey(
      "addresses",
      new TableForeignKey({
        name: "FK_Address_Partner",
        columnNames: ["partnerId"],
        referencedColumnNames: ["id"],
        referencedTableName: "partners",
        onDelete: "CASCADE",
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    // Drop foreign keys first
    await queryRunner.dropForeignKey("addresses", "FK_Address_Customer");
    await queryRunner.dropForeignKey("addresses", "FK_Address_Partner");

    // Drop indexes
    await queryRunner.dropIndex("addresses", "IDX_ADDRESS_IsDefault");
    
    // Drop the addresses table
    await queryRunner.dropTable("addresses", true, true, true);
  }
}
