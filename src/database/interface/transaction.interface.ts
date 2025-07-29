import { BaseRepositoryInterface } from '../../base/base.interface.repository';
import { Transaction } from '../../entities/transaction.entity';

export interface TransactionRepositoryInterface extends BaseRepositoryInterface<Transaction> {
  // Add custom methods for Transaction if needed
}
