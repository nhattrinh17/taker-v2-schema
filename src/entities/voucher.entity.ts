import { Entity, PrimaryColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany } from 'typeorm';
import { CustomerVoucher } from './customer_voucher.entity';
import { VoucherPaymentMethodEnum, VoucherTypeDiscountEnum, VoucherTypeEnum } from '@common/enums';
import { BaseEntity } from './base.entity';

@Entity('vouchers')
export class Voucher extends BaseEntity {
  @Column({ type: 'varchar', length: 255 })
  name: string;

  @Column({ type: 'text' })
  description: string;

  @Column({ type: 'varchar', unique: true })
  code: string;

  @Column({ type: 'enum', enum: VoucherPaymentMethodEnum, default: VoucherPaymentMethodEnum.BANK })
  paymentMethod: VoucherPaymentMethodEnum;

  @Column({ type: 'double' })
  discount: number;

  @Column({
    type: 'enum',
    enum: VoucherTypeDiscountEnum,
    default: VoucherTypeDiscountEnum.PERCENT,
  })
  typeDiscount: VoucherTypeDiscountEnum;

  @Column({ type: 'double', nullable: true })
  discountToUp: number;

  @Column({ type: 'int', nullable: true })
  minimumOrder: number;

  @Column({ type: 'int', default: 0 })
  totalUse: number;

  @Column({ type: 'int', nullable: true })
  quantity: number;

  @Column({ type: 'varchar', nullable: true })
  icon: string;

  @Column({ type: 'datetime', nullable: true })
  startTime: Date;

  @Column({ type: 'datetime', nullable: true })
  endTime: Date;

  @Column({ type: 'enum', enum: VoucherTypeEnum, default: VoucherTypeEnum.SHOE_CLEANING })
  type: VoucherTypeEnum;

  @Column({ type: 'boolean', default: false })
  isGlobal: boolean;

  @OneToMany(() => CustomerVoucher, (customerVoucher) => customerVoucher.voucher)
  customerVouchers: CustomerVoucher[];
}
