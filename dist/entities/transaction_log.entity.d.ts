import { TransactionLogStatus } from '@common/enums';
import { Transaction } from './transaction.entity';
import { BaseEntity } from './base.entity';
export declare class TransactionLog extends BaseEntity {
    status: TransactionLogStatus;
    vnPayData: string;
    ipIpn: string;
    mbData: string;
    referencenumberMb: string;
    date: Date;
    transactionId: string;
    transaction: Transaction;
    message: string;
}
