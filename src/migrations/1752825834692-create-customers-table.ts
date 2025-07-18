import { StepEnum, UserStatusEnum } from "@common/enums";
import { MigrationInterface, QueryRunner, Table, TableIndex } from "typeorm";

export class CreateCustomersTable1752825834692 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "customers",
        columns: [
          {
            name: "id",
            type: "varchar(36)",
            isPrimary: true,
          },
          {
            name: "phone",
            type: "varchar",
            isUnique: true,
            isNullable: true,
          },
          {
            name: "password",
            type: "varchar",
            isNullable: true,
          },
          {
            name: "fullName",
            type: "varchar",
            isNullable: true,
          },
          {
            name: "fcmToken",
            type: "varchar",
            isNullable: true,
          },
          {
            name: "email",
            type: "varchar",
            isUnique: true,
            isNullable: true,
          },
          {
            name: "referralCode",
            type: "varchar",
            isNullable: true,
          },
          {
            name: "lastLoginDate",
            type: "datetime",
            isNullable: true,
          },
          {
            name: "isLogin",
            type: "boolean",
            default: false,
          },
          {
            name: "isVerified",
            type: "boolean",
            default: false,
          },
          {
            name: "bankName",
            type: "varchar",
            isNullable: true,
          },
          {
            name: "bankAccountNumber",
            type: "varchar",
            isNullable: true,
          },
          {
            name: "bankAccountName",
            type: "varchar",
            isNullable: true,
          },
          {
            name: "avatar",
            type: "varchar",
            isNullable: true,
          },
          {
            name: "dateOfBirth",
            type: "datetime",
            isNullable: true,
          },
          {
            name: "address",
            type: "varchar",
            isNullable: true,
          },
          {
            name: "status",
            type: "enum",
            enum: [...Object.values(UserStatusEnum)],
            default: `'${UserStatusEnum.PENDING}'`,
          },
          {
            name: "step",
            type: "enum",
            enum: [...Object.values(StepEnum)],
            default: `'${StepEnum.REGISTER_INFO}'`,
          },
          {
            name: "appleId",
            type: "varchar",
            length: "255",
            isNullable: true,
          },
          {
            name: "appleName",
            type: "varchar",
            length: "255",
            isNullable: true,
          },
          {
            name: "googleId",
            type: "varchar",
            length: "255",
            isNullable: true,
          },
          {
            name: "googleName",
            type: "varchar",
            length: "255",
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
      }),
      true
    );

    await queryRunner.createIndex(
      "customers",
      new TableIndex({
        name: "IDX_CUSTOMER_ReferralCode",
        columnNames: ["referralCode"],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    const table = await queryRunner.getTable("customers");
    const index = table.indices.find(
      (index) => index.columnNames.indexOf("referralCode") !== -1
    );
    await queryRunner.dropIndex("customers", index);
    await queryRunner.dropTable("customers");
  }
}
