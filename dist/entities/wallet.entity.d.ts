import { BaseEntity } from './base.entity';
import { Partner } from './partner.entity';
import { Customer } from './customer.entity';
import { Transaction } from './transaction.entity';
import { WalletLog } from './wallet_log.entity';
export declare class Wallet extends BaseEntity {
    customer: Customer;
    customerId: string;
    partner: Partner;
    partnerId: string;
    balance: number;
    transactions: Transaction[];
    walletLogs: WalletLog[];
}
