import { NotificationTypeEnum } from "@common/enums";
import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class CreateNotificationsTable1753413622093
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "notifications",
        columns: [
          {
            name: "id",
            type: "varchar(36)",
            isPrimary: true,
          },
          {
            name: "partnerId",
            type: "varchar(36)",
            isNullable: true,
          },
          {
            name: "customerId",
            type: "varchar(36)",
            isNullable: true,
          },
          {
            name: "adminId",
            type: "varchar(36)",
            isNullable: true,
          },
          {
            name: "systemNotificationId",
            type: "varchar(36)",
            isNullable: true,
          },
          {
            name: "title",
            type: "text",
          },
          {
            name: "content",
            type: "longtext",
          },
          {
            name: "data",
            type: "longtext",
            isNullable: true,
          },
          {
            name: "isRead",
            type: "boolean",
            default: false,
          },
          {
            name: "type",
            type: "enum",
            enum: [...Object.values(NotificationTypeEnum)],
            default: `'${NotificationTypeEnum.USER}'`,
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
      "notifications",
      new TableForeignKey({
        columnNames: ["customerId"],
        referencedColumnNames: ["id"],
        referencedTableName: "customers",
        onDelete: "CASCADE",
      })
    );

    await queryRunner.createForeignKey(
      "notifications",
      new TableForeignKey({
        columnNames: ["partnerId"],
        referencedColumnNames: ["id"],
        referencedTableName: "partners",
        onDelete: "CASCADE",
      })
    );

    await queryRunner.createForeignKey(
      "notifications",
      new TableForeignKey({
        name: "FK_Admin_Notification",
        columnNames: ["adminId"],
        referencedColumnNames: ["id"],
        referencedTableName: "admins",
        onDelete: "CASCADE",
      })
    );

    await queryRunner.createForeignKey(
      "notifications",
      new TableForeignKey({
        columnNames: ["systemNotificationId"],
        referencedColumnNames: ["id"],
        referencedTableName: "system_notifications",
        onDelete: "SET NULL",
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    const table = await queryRunner.getTable("notifications");
    const foreignKey = table.foreignKeys.find(
      (fk) => fk.columnNames.indexOf("customerId") !== -1
    );
    const foreignKey1 = table.foreignKeys.find(
      (fk) => fk.columnNames.indexOf("systemNotificationId") !== -1
    );
    const foreignKey2 = table.foreignKeys.find(
      (fk) => fk.columnNames.indexOf("partnerId") !== -1
    );

    await queryRunner.dropForeignKey("notifications", 'FK_Admin_Notification');
    await queryRunner.dropForeignKey("notifications", foreignKey);
    await queryRunner.dropForeignKey("notifications", foreignKey1);
    await queryRunner.dropForeignKey("notifications", foreignKey2);
    await queryRunner.dropTable("notifications");
  }
}
