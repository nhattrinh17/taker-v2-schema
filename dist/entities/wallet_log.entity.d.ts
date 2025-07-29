import { Wallet } from './wallet.entity';
import { BaseEntity } from './base.entity';
export declare class WalletLog extends BaseEntity {
    walletId: string;
    wallet: Wallet;
    previousBalance: number;
    currentBalance: number;
    amount: number;
    description: string;
    transactionDate: Date;
}
