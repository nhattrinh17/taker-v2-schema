import { BaseRepositoryInterface } from "../../base/base.interface.repository";
import { Transaction } from "../../entities/transaction.entity";
export interface TransactionRepositoryInterface extends BaseRepositoryInterface<Transaction> {
    updateMultipleWidthCondition(condition: object, data: object): Promise<any>;
}
