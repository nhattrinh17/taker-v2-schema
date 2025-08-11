"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateConversationTable1754637313922 = void 0;
const enums_1 = require("../common/enums");
const typeorm_1 = require("typeorm");
class CreateConversationTable1754637313922 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
            name: "conversations",
            columns: [
                {
                    name: "id",
                    type: "varchar(36)",
                    isPrimary: true,
                },
                {
                    name: "title",
                    type: "varchar(255)",
                    isNullable: true,
                },
                {
                    name: "isGroup",
                    type: "boolean",
                    default: false,
                },
                {
                    name: "status",
                    type: "enum",
                    enum: [...Object.values(enums_1.ConversationStatusEnum)],
                    default: `'${enums_1.ConversationStatusEnum.ACTIVE}'`,
                },
                {
                    name: "lastMessageId",
                    type: "varchar(36)",
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
                {
                    name: "deletedAt",
                    type: "datetime(6)",
                    isNullable: true,
                },
            ],
        }));
    }
    async down(queryRunner) {
        await queryRunner.dropTable("conversations");
    }
}
exports.CreateConversationTable1754637313922 = CreateConversationTable1754637313922;
