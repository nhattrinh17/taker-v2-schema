import { TransactionSource, TransactionStatus, TransactionType } from '../common/enums';
import { TransactionLog } from './transaction_log.entity';
import { BaseEntity } from './base.entity';
import { Wallet } from './wallet.entity';
export declare class Transaction extends BaseEntity {
    wallet: Wallet;
    walletId: string;
    orderId: string;
    amount: number;
    description: string;
    transactionDate: Date;
    transactionType: TransactionType;
    transactionSource: TransactionSource;
    status: TransactionStatus;
    vnPayData: string;
    ipRequest: string;
    ipIpn: string;
    isManual: boolean;
    evidence: string;
    logs: TransactionLog[];
    generateOrderId(): Promise<void>;
}
