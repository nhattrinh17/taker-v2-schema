"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateForeignKeyLastMessageColumnInConversationTable1754645412604 = void 0;
const typeorm_1 = require("typeorm");
class UpdateForeignKeyLastMessageColumnInConversationTable1754645412604 {
    async up(queryRunner) {
        await queryRunner.createForeignKey("conversations", new typeorm_1.TableForeignKey({
            columnNames: ["lastMessageId"],
            referencedColumnNames: ["id"],
            referencedTableName: "messages",
            onDelete: "SET NULL",
            name: "FK_conversations_lastMessage",
        }));
    }
    async down(queryRunner) {
        await queryRunner.dropForeignKey("conversations", "FK_conversations_lastMessage");
    }
}
exports.UpdateForeignKeyLastMessageColumnInConversationTable1754645412604 = UpdateForeignKeyLastMessageColumnInConversationTable1754645412604;
