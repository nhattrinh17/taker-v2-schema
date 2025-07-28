import { Column, Entity, JoinColumn, OneToMany, OneToOne } from 'typeorm';
import { BaseEntity } from './base.entity';
import { Partner } from './partner.entity';
import { Customer } from './customer.entity';
import { Transaction } from './transaction.entity';
import { WalletLog } from './wallet_log.entity';

@Entity({ name: 'wallets' })
export class Wallet extends BaseEntity {
  @OneToOne(() => Customer, (customer) => customer.wallet, { nullable: true })
  @JoinColumn()
  customer: Customer;

  @Column({ nullable: true, length: 36 })
  customerId: string;

  @OneToOne(() => Partner,(partner) => partner.wallet, { nullable: true })
  @JoinColumn()
  partner: Partner;

  @Column({ nullable: true, length: 36 })
  partnerId: string;

  @Column({ default: 0, type: 'double' })
  balance: number;

  @OneToMany(() => Transaction, (transaction) => transaction.wallet)
  transactions: Transaction[];

  @OneToMany(() => WalletLog, (wallet) => wallet.wallet, { nullable: true })
  walletLogs: WalletLog[]; // Assuming this is a self-referential relationship, adjust as necessary
}
