import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Wallet } from './wallet.entity';
import { BaseEntity } from './base.entity';

@Entity('wallet_logs')
export class WalletLog extends BaseEntity {
  @Column({ type: 'varchar', nullable: true })
  walletId: string;

  @ManyToOne(() => Wallet, (wallet) => wallet.walletLogs, { onDelete: 'SET NULL' })
  @JoinColumn({ name: 'walletId' })
  wallet: Wallet;

  @Column({ type: 'double', default: 0 })
  previousBalance: number;

  @Column({ type: 'double', default: 0 })
  currentBalance: number;

  @Column({ type: 'double', default: 0 })
  amount: number;

  @Column({ type: 'varchar', nullable: true })
  description: string;

  @Column({ type: 'datetime', precision: 6, default: () => 'CURRENT_TIMESTAMP(6)' })
  transactionDate: Date;
}
