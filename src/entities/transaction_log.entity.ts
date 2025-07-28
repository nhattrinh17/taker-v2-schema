import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, ManyToOne, JoinColumn } from 'typeorm';
import { TransactionLogStatus } from '@common/enums';
import { Transaction } from './transaction.entity';
import { BaseEntity } from './base.entity';

@Entity('transaction_logs')
export class TransactionLog extends BaseEntity {
  @Column({
    type: 'enum',
    enum: TransactionLogStatus,
    default: TransactionLogStatus.FAILED,
  })
  status: TransactionLogStatus;

  @Column({ type: 'longtext', nullable: true })
  vnPayData: string;

  @Column({ type: 'varchar', nullable: true })
  ipIpn: string;

  @Column({ nullable: true, type: 'longtext' })
  mbData: string;

  @Column({ nullable: true })
  referencenumberMb: string;

  @Column({ type: 'date', nullable: true })
  date: Date;

  @Column({ type: 'varchar', nullable: true })
  transactionId: string;

  @ManyToOne(() => Transaction, (transaction) => transaction.logs, {
    onDelete: 'SET NULL',
    onUpdate: 'CASCADE',
  })
  @JoinColumn({ name: 'transactionId' })
  transaction: Transaction;

  @Column({ type: 'varchar', nullable: true })
  message: string;
}
