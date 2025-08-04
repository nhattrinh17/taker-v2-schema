import { VehicleRegistryStatusEnum, VehicleTypeEnum } from "@common/enums";
import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from "typeorm";

export class CreateVehicleRegistryTable1754296023930
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "vehicle_registries",
        columns: [
          {
            name: "id",
            type: "varchar(36)",
            isPrimary: true,
          },
          {
            name: "driverId",
            type: "varchar(36)",
          },
          {
            name: "licensePlate",
            type: "varchar(20)",
          },
          {
            name: "licenseImage",
            type: "varchar(255)",
            isNullable: true,
          },
          {
            name: "licenseImageBack",
            type: "varchar(255)",
            isNullable: true,
          },
          {
            name: "image",
            type: "varchar(255)",
            isNullable: true,
          },
          {
            name: "brand", // hãng xe
            type: "varchar(50)",
          },
          {
            name: "model", // dòng xe
            type: "varchar(50)",
          },
          {
            name: "year", // năm sản xuất
            type: "int",
          },
          {
            name: "color",
            type: "varchar(20)",
          },
          {
            name: "seat",
            type: "int",
          },
          {
            name: "status",
            type: "enum",
            enum: [...Object.values(VehicleRegistryStatusEnum)],
            default: `'${VehicleRegistryStatusEnum.PENDING}'`,
          },
          {
            name: "activeTime",
            type: "datetime(6)",
            isNullable: true,
          },
          {
            name: "type",
            type: "enum",
            enum: [...Object.values(VehicleTypeEnum)],
            default: `'${VehicleTypeEnum.BIKE}'`,
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
      "vehicle_registries",
      new TableForeignKey({
        name: "FK_VehicleRegistries_Partner",
        columnNames: ["driverId"],
        referencedColumnNames: ["id"],
        referencedTableName: "drivers",
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey(
      "vehicle_registries",
      "FK_VehicleRegistries_Partner"
    );
    await queryRunner.dropTable("vehicle_registries");
  }
}
