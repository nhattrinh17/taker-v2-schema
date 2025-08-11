"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateMessageTable1754637372963 = void 0;
const enums_1 = require("../common/enums");
const typeorm_1 = require("typeorm");
class CreateMessageTable1754637372963 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
            name: "messages",
            columns: [
                {
                    name: "id",
                    type: "varchar(36)",
                    isPrimary: true,
                },
                {
                    name: "conversationId",
                    type: "varchar(36)",
                    isNullable: false,
                },
                {
                    name: "userId",
                    type: "varchar(36)",
                    isNullable: true,
                },
                {
                    name: "userType",
                    type: "enum",
                    enum: [...Object.values(enums_1.ActorTypeEnum)],
                    default: `'${enums_1.ActorTypeEnum.CUSTOMER}'`,
                },
                {
                    name: "type",
                    type: "enum",
                    enum: [...Object.values(enums_1.MessageTypeEnum)],
                    default: `'${enums_1.MessageTypeEnum.TEXT}'`,
                },
                {
                    name: "payload",
                    type: "json",
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
        await queryRunner.createForeignKey("messages", new typeorm_1.TableForeignKey({
            columnNames: ["conversationId"],
            referencedTableName: "conversations",
            referencedColumnNames: ["id"],
            onDelete: "CASCADE",
            name: "FK_Message_Conversation",
        }));
    }
    async down(queryRunner) {
        await queryRunner.dropForeignKey("messages", "FK_Message_Conversation");
        await queryRunner.dropTable("messages");
    }
}
exports.CreateMessageTable1754637372963 = CreateMessageTable1754637372963;
