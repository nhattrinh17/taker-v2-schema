"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateSystemNotificationsTable1753413614107 = void 0;
const enums_1 = require("../common/enums");
const typeorm_1 = require("typeorm");
class CreateSystemNotificationsTable1753413614107 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
            name: "system_notifications",
            columns: [
                {
                    name: "id",
                    type: "varchar(36)",
                    isPrimary: true,
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
                    name: "isSent",
                    type: "boolean",
                    default: false,
                },
                {
                    name: "sentTime",
                    type: "datetime",
                    isNullable: true,
                },
                {
                    name: "scheduleTime",
                    type: "bigint",
                    isNullable: true,
                },
                {
                    name: "receiver",
                    type: "enum",
                    enum: [...Object.values(enums_1.SystemNotificationRecipientEnum)],
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
    }
    async down(queryRunner) {
        await queryRunner.dropTable("system_notifications");
    }
}
exports.CreateSystemNotificationsTable1753413614107 = CreateSystemNotificationsTable1753413614107;
