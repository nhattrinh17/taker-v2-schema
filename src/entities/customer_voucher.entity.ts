import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, CreateDateColumn, UpdateDateColumn, OneToOne } from 'typeorm';
import { Customer } from './customer.entity';
import { Voucher } from './voucher.entity';
import { BaseEntity } from './base.entity';
import { ShoeBooking } from './shoe_booking.entity';

@Entity('customer_vouchers')
export class CustomerVoucher extends BaseEntity {
  @Column({ type: 'varchar', length: 36, nullable: true })
  customerId: string;

  @Column({ type: 'varchar', length: 36 })
  voucherId: string;

  @Column({ type: 'timestamp', nullable: true })
  timeUse: Date;

  @ManyToOne(() => Customer, (customer) => customer.customerVouchers, {
    onDelete: 'SET NULL',
  })
  @JoinColumn({ name: 'customerId' })
  customer: Customer;

  @ManyToOne(() => Voucher, (voucher) => voucher.customerVouchers, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'voucherId' })
  voucher: Voucher;

  @OneToOne(() => ShoeBooking, (shoeBooking) => shoeBooking.customerVoucher)
  shoeBooking: ShoeBooking;
}
