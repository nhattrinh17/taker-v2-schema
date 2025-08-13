import { Repository } from 'typeorm';
import { BaseRepositoryAbstract } from '../../base/base.abstract.repository';
import { Transaction } from '../../entities/transaction.entity';
import { TransactionRepositoryInterface } from '../interface/transaction.interface';
export declare class TransactionRepository extends BaseRepositoryAbstract<Transaction> implements TransactionRepositoryInterface {
    private readonly transactionRepository;
    constructor(transactionRepository: Repository<Transaction>);
    updateMultipleWidthCondition(condition: object, data: object): Promise<any>;
}
