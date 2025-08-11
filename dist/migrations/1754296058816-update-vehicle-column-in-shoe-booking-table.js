"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateVehicleColumnInShoeBookingTable1754296058816 = void 0;
const typeorm_1 = require("typeorm");
class UpdateVehicleColumnInShoeBookingTable1754296058816 {
    async up(queryRunner) {
        await queryRunner.addColumn("shoe_bookings", new typeorm_1.TableColumn({
            name: "deliveryVehicleId",
            type: "varchar(36)",
            isNullable: true,
        }));
        await queryRunner.addColumn("shoe_bookings", new typeorm_1.TableColumn({
            name: "returnVehicleId",
            type: "varchar(36)",
            isNullable: true,
        }));
        await queryRunner.createForeignKey("shoe_bookings", new typeorm_1.TableForeignKey({
            columnNames: ["deliveryVehicleId"],
            referencedTableName: "vehicle_registries",
            referencedColumnNames: ["id"],
            onDelete: "SET NULL",
        }));
        await queryRunner.createForeignKey("shoe_bookings", new typeorm_1.TableForeignKey({
            columnNames: ["returnVehicleId"],
            referencedTableName: "vehicle_registries",
            referencedColumnNames: ["id"],
            onDelete: "SET NULL",
        }));
    }
    async down(queryRunner) {
        const table = await queryRunner.getTable("shoe_bookings");
        const deliveryFk = table.foreignKeys.find((fk) => fk.columnNames.includes("deliveryVehicleId"));
        if (deliveryFk)
            await queryRunner.dropForeignKey("shoe_bookings", deliveryFk);
        const returnFk = table.foreignKeys.find((fk) => fk.columnNames.includes("returnVehicleId"));
        if (returnFk)
            await queryRunner.dropForeignKey("shoe_bookings", returnFk);
        await queryRunner.dropColumn("shoe_bookings", "deliveryVehicleId");
        await queryRunner.dropColumn("shoe_bookings", "returnVehicleId");
    }
}
exports.UpdateVehicleColumnInShoeBookingTable1754296058816 = UpdateVehicleColumnInShoeBookingTable1754296058816;
