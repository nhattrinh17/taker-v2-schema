import { Repository } from "typeorm";
import { BaseRepositoryAbstract } from "../../base/base.abstract.repository";
import { ConversationParticipant } from "../../entities/conversation_participant.entity";
import { ConversationParticipantRepositoryInterface } from "../interface/conversation_participant.interface";
export declare class ConversationParticipantRepository extends BaseRepositoryAbstract<ConversationParticipant> implements ConversationParticipantRepositoryInterface {
    private readonly conversationParticipantRepository;
    constructor(conversationParticipantRepository: Repository<ConversationParticipant>);
}
