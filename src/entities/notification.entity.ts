import { NotificationTypeEnum } from '@common/enums';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { BaseEntity } from './base.entity';
import { Customer } from './customer.entity';
import { Admin, SystemNotification } from './index';
import { Partner } from './partner.entity';

@Entity({ name: 'notifications' })
export class Notification extends BaseEntity {
  @ManyToOne(() => Partner, { nullable: true, onDelete: 'CASCADE' })
  @JoinColumn({ name: 'partnerId' })
  partner: Partner;

  @Column({ nullable: true, type: 'varchar', length: 36 })
  partnerId: string;

  @ManyToOne(() => Customer, { nullable: true, onDelete: 'CASCADE' })
  @JoinColumn({ name: 'customerId' })
  customer: Customer;

  @Column({ nullable: true, type: 'varchar', length: 36 })
  customerId: string;

  @ManyToOne(() => Admin, { nullable: true, onDelete: 'CASCADE' })
  @JoinColumn({ name: 'adminId' })
  admin: Admin;

  @Column({ nullable: true, type: 'varchar', length: 36 })
  adminId: string;

  @ManyToOne(() => SystemNotification, { nullable: true, onDelete: 'SET NULL' })
  @JoinColumn({ name: 'systemNotificationId' })
  systemNotification: SystemNotification;

  @Column({ nullable: true })
  systemNotificationId: string;

  @Column()
  title: string;

  @Column({ type: 'longtext', nullable: true })
  content: string;

  @Column({ type: 'longtext', nullable: true })
  data: string;

  @Column({ type: 'boolean', default: false })
  isRead: boolean;

  @Column({
    type: 'enum',
    enum: NotificationTypeEnum,
    default: NotificationTypeEnum.USER,
  })
  type: NotificationTypeEnum;
}
