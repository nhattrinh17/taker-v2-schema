import { Repository } from "typeorm";
import { BaseRepositoryAbstract } from "../../base/base.abstract.repository";
import { Message } from "../../entities/message.entity";
import { MessageRepositoryInterface } from "../interface/message.interface";
export declare class MessageRepository extends BaseRepositoryAbstract<Message> implements MessageRepositoryInterface {
    private readonly messageRepository;
    constructor(messageRepository: Repository<Message>);
}
