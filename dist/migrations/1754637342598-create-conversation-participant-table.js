"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateConversationParticipantTable1754637342598 = void 0;
const enums_1 = require("../common/enums");
const typeorm_1 = require("typeorm");
class CreateConversationParticipantTable1754637342598 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
            name: "conversation_participants",
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
                    isNullable: false,
                },
                {
                    name: "type",
                    type: "enum",
                    enum: [...Object.values(enums_1.ActorTypeEnum)],
                    default: `'${enums_1.ActorTypeEnum.CUSTOMER}'`,
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
        await queryRunner.createForeignKey("conversation_participants", new typeorm_1.TableForeignKey({
            columnNames: ["conversationId"],
            referencedTableName: "conversations",
            referencedColumnNames: ["id"],
            onDelete: "CASCADE",
            name: "FK_ConversationParticipant_Conversation",
        }));
    }
    async down(queryRunner) {
        await queryRunner.dropForeignKey("conversation_participants", "FK_ConversationParticipant_Conversation");
        await queryRunner.dropTable("conversation_participants");
    }
}
exports.CreateConversationParticipantTable1754637342598 = CreateConversationParticipantTable1754637342598;
