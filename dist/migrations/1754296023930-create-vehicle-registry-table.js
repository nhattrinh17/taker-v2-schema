"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateVehicleRegistryTable1754296023930 = void 0;
const enums_1 = require("../common/enums");
const typeorm_1 = require("typeorm");
class CreateVehicleRegistryTable1754296023930 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
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
                    name: "brand",
                    type: "varchar(50)",
                },
                {
                    name: "model",
                    type: "varchar(50)",
                },
                {
                    name: "year",
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
                    enum: [...Object.values(enums_1.VehicleRegistryStatusEnum)],
                    default: `'${enums_1.VehicleRegistryStatusEnum.PENDING}'`,
                },
                {
                    name: "activeTime",
                    type: "datetime(6)",
                    isNullable: true,
                },
                {
                    name: "type",
                    type: "enum",
                    enum: [...Object.values(enums_1.VehicleTypeEnum)],
                    default: `'${enums_1.VehicleTypeEnum.BIKE}'`,
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
        }));
        await queryRunner.createForeignKey("vehicle_registries", new typeorm_1.TableForeignKey({
            name: "FK_VehicleRegistries_Partner",
            columnNames: ["driverId"],
            referencedColumnNames: ["id"],
            referencedTableName: "drivers",
            onDelete: "CASCADE",
            onUpdate: "CASCADE",
        }));
    }
    async down(queryRunner) {
        await queryRunner.dropForeignKey("vehicle_registries", "FK_VehicleRegistries_Partner");
        await queryRunner.dropTable("vehicle_registries");
    }
}
exports.CreateVehicleRegistryTable1754296023930 = CreateVehicleRegistryTable1754296023930;
