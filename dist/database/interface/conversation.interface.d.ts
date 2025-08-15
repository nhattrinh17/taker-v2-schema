import { BaseRepositoryInterface } from "../../base/base.interface.repository";
import { Conversation } from "../../entities/conversation.entity";
import { PaginationDto } from "../../common/decorators";
export interface ConversationRepositoryInterface extends BaseRepositoryInterface<Conversation> {
    findAllConversation(condition: any, pagination: PaginationDto): any;
}
