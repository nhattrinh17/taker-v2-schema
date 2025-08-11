import { ActorTypeEnum, ShoeBookingStatusEnum } from "@common/enums";
import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateShoeBookingLogTable1754366680365
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "shoe_booking_logs",
        columns: [
          {
            name: "id",
            type: "varchar(36)",
            isPrimary: true,
          },
          { name: "shoeBookingId", type: "varchar(36)", isNullable: true },
          {
            name: "fromStatus",
            type: "enum",
            enum: [...Object.values(ShoeBookingStatusEnum)],
            isNullable: true,
          },
          {
            name: "toStatus",
            type: "enum",
            enum: [...Object.values(ShoeBookingStatusEnum)],
            isNullable: true,
          },
          {
            name: "actorId",
            type: "varchar(36)",
            isNullable: true,
          },
          {
            name: "actorType",
            type: "enum",
            enum: [...Object.values(ActorTypeEnum)],
            default: `'${ActorTypeEnum.SYSTEM}'`,
          },
          {
            name: "details",
            type: "text",
            isNullable: true,
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
        foreignKeys: [
          {
            columnNames: ["shoeBookingId"],
            referencedTableName: "shoe_bookings",
            referencedColumnNames: ["id"],
            onDelete: "CASCADE",
            onUpdate: "CASCADE",
            name: "FK_ShoeBookingLog_ShoeBooking",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey(
      "shoe_booking_logs",
      "FK_ShoeBookingLog_ShoeBooking"
    );
    await queryRunner.dropTable("shoe_booking_logs");
  }
}
