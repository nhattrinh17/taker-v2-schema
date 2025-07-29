import { BaseRepositoryInterface } from '../../base/base.interface.repository';
import { TransactionLog } from '../../entities/transaction_log.entity';

export interface TransactionLogRepositoryInterface extends BaseRepositoryInterface<TransactionLog> {
  // Add custom methods for TransactionLog if needed
}
