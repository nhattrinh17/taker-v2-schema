import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { BaseEntity } from './base.entity';
import { Customer } from './customer.entity';
import { Partner } from './partner.entity';

@Entity({ name: 'addresses' })
@Index(['isDefault'])
export class Address extends BaseEntity {
  @Column({ nullable: true })
  customerId: string;

  @Column({ nullable: true })
  partnerId: string;

  @Column()
  address: string;

  @Column({ type: 'text', nullable: true, comment: 'location details' })
  location: string;

  @Column({ length: 255, nullable: true, comment: 'Latitude and longitude cell identifier' })
  latLongToCell: string;

  @Column({ default: false, comment: 'Is this the default address for the user' })
  @Index()
  isDefault: boolean;

  @Column({ length: 100, nullable: true, comment: 'Address label like Home, Work, Shop, etc.' })
  label: string;

  @Column({ nullable: true, comment: 'Name of the person to receive at this address' })
  fullName: string;

  @Column({ nullable: true, comment: 'Phone number of the person to receive at this address' })
  phone: string;

  @Column({ default: false })
  isPickupAddress: boolean;

  @Column({ default: false })
  isReturnAddress: boolean;

  // Relations
  @ManyToOne(() => Customer, (customer) => customer.addresses, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'customerId' })
  customer: Customer;

  @ManyToOne(() => Partner, (partner) => partner.addresses, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'partnerId' })
  partner: Partner;
}
