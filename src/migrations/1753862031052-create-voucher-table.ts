import { VoucherTypeDiscountEnum } from "@common/enums";
import { MigrationInterface, QueryRunner, Table, TableIndex } from "typeorm";

export class CreateVoucherTable1753862031052 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "vouchers",
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
            name: "description",
            type: "text",
          },
          {
            name: "code",
            type: "varchar",
            isNullable: true,
          },
          {
            name: "paymentMethod",
            type: "varchar",
            isNullable: true,
          },
          {
            name: "discount",
            type: "double",
          },
          {
            name: "typeDiscount",
            type: "enum",
            enum: [...Object.values(VoucherTypeDiscountEnum)],
            default: `'${VoucherTypeDiscountEnum.PERCENT}'`,
          },
          {
            name: "discountToUp",
            type: "double",
            isNullable: true,
          },
          {
            name: "minimumOrder",
            type: "int",
            isNullable: true,
          },
          {
            name: "totalUse",
            type: "int",
            default: 0,
          },
          {
            name: "quantity",
            type: "int",
            isNullable: true,
          },
          {
            name: "icon",
            type: "varchar",
            isNullable: true,
          },
          {
            name: "startTime",
            type: "datetime",
            isNullable: true,
          },
          {
            name: "endTime",
            type: "datetime",
            isNullable: true,
          },
          {
            name: "type",
            type: "varchar",
          },
          {
            name: "isGlobal",
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

    await queryRunner.createIndex(
      "vouchers",
      new TableIndex({
        name: "IDX_VOUCHER_TYPE",
        columnNames: ["type"],
      })
    );

    await queryRunner.createIndex(
      "vouchers",
      new TableIndex({
        name: "IDX_VOUCHER_CODE",
        columnNames: ["code"],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropIndex("vouchers", "IDX_VOUCHER_TYPE");
    await queryRunner.dropIndex("vouchers", "IDX_VOUCHER_CODE");
    await queryRunner.dropTable("vouchers");
  }
}
