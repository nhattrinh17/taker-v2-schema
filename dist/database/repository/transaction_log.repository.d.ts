import { Repository } from 'typeorm';
import { BaseRepositoryAbstract } from '../../base/base.abstract.repository';
import { TransactionLog } from '../../entities/transaction_log.entity';
import { TransactionLogRepositoryInterface } from '../interface/transaction_log.interface';
export declare class TransactionLogRepository extends BaseRepositoryAbstract<TransactionLog> implements TransactionLogRepositoryInterface {
    private readonly transactionLogRepository;
    constructor(transactionLogRepository: Repository<TransactionLog>);
}
