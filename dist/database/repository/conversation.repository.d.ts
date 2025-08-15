import { Repository } from "typeorm";
import { BaseRepositoryAbstract } from "../../base/base.abstract.repository";
import { Conversation } from "../../entities/conversation.entity";
import { ConversationRepositoryInterface } from "../interface/conversation.interface";
import { PaginationDto } from "../../common/decorators";
export declare class ConversationRepository extends BaseRepositoryAbstract<Conversation> implements ConversationRepositoryInterface {
    private readonly conversationRepository;
    constructor(conversationRepository: Repository<Conversation>);
    findAllConversation(condition: any, pagination: PaginationDto): Promise<{
        data: Conversation[];
        pagination: {
            page: number;
            limit: number;
            offset: number;
            sort?: string;
            typeSort?: "ASC" | "DESC";
            total: number;
        };
    }>;
}
