import { BASE_OPERATING_HOURS } from "@common/constants/app.constant";
import { StepEnum, UserStatusEnum } from "@common/enums";
import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateShopsTable1752825861447 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "shops",
        columns: [
          {
            name: "id",
            type: "varchar(36)",
            isPrimary: true,
          },
          {
            name: "name",
            type: "varchar",
            isNullable: false,
          },
          {
            name: "email",
            type: "varchar",
            isUnique: true,
            isNullable: false,
          },
          {
            name: "phone",
            type: "varchar",
            isUnique: true,
            isNullable: true,
          },
          {
            name: "address",
            type: "varchar",
            isNullable: true,
          },
          {
            name: "location",
            type: "text",
            isNullable: true,
          },
          {
            name: 'latLongToCell',
            type: "varchar(255)",
            isNullable: true,
          },
          {
            name: "operatingHours",
            type: "varchar(255)",
            default: `'${JSON.stringify(BASE_OPERATING_HOURS)}'`,
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
            type: "datetime",
            default: "CURRENT_TIMESTAMP",
          },
          {
            name: "updatedAt",
            type: "datetime",
            default: "CURRENT_TIMESTAMP",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("shops", true, true, true);
  }
}
