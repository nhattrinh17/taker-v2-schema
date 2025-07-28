import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, OneToMany, ManyToOne, JoinColumn, BeforeInsert } from 'typeorm';
import { TransactionSource, TransactionStatus, TransactionType } from '@common/enums';
import { TransactionLog } from './transaction_log.entity';
import { BaseEntity } from './base.entity';
import { Wallet } from './wallet.entity';

@Entity('transactions')
export class Transaction extends BaseEntity {
  @ManyToOne(() => Wallet, (Wallet) => Wallet.transactions)
  @JoinColumn({ name: 'walletId' })
  wallet: Wallet;

  @Column({ type: 'varchar', nullable: true })
  walletId: string;

  @Column({ type: 'varchar', nullable: true, unique: true })
  orderId: string;

  @Column({ type: 'double', default: 0 })
  amount: number;

  @Column({ type: 'varchar', nullable: true })
  description: string;

  @Column({ type: 'datetime', precision: 6, nullable: true })
  transactionDate: Date;

  @Column({
    type: 'enum',
    enum: TransactionType,
    default: TransactionType.DEPOSIT,
  })
  transactionType: TransactionType;

  @Column({
    type: 'enum',
    enum: TransactionSource,
    default: TransactionSource.WALLET,
  })
  transactionSource: TransactionSource;

  @Column({
    type: 'enum',
    enum: TransactionStatus,
    default: TransactionStatus.PENDING,
  })
  status: TransactionStatus;

  @Column({ nullable: true, type: 'longtext' })
  vnPayData: string;

  @Column({ nullable: true })
  ipRequest: string;

  @Column({ nullable: true })
  ipIpn: string;

  @Column({ type: 'boolean', default: false })
  isManual: boolean;

  @Column({ nullable: true })
  evidence: string;

  @OneToMany(() => TransactionLog, (transactionLog) => transactionLog.transaction)
  logs: TransactionLog[];

  @BeforeInsert()
  async generateOrderId() {
    this.transactionDate = new Date();
  }
}
