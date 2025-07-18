import { Column, Entity } from 'typeorm';
import { BaseEntity } from './base.entity';
import { StepEnum, UserStatusEnum } from '@common/enums';

@Entity({ name: 'customers' })
export class Customer extends BaseEntity {
  @Column({ unique: true, nullable: true })
  phone: string;

  @Column({ nullable: true })
  password: string;

  @Column({ nullable: true })
  fullName: string;

  @Column({ nullable: true })
  fcmToken: string;

  @Column({ unique: true, nullable: true })
  email: string;

  @Column({ nullable: true })
  referralCode: string;

  @Column({ nullable: true })
  lastLoginDate: Date;

  @Column({ default: false })
  isLogin: boolean;

  @Column({ default: false })
  isVerified: boolean;

  @Column({ nullable: true })
  bankName: string;

  @Column({ nullable: true })
  bankAccountNumber: string;

  @Column({ nullable: true })
  bankAccountName: string;

  @Column({ nullable: true })
  avatar: string;

  @Column({ nullable: true })
  dateOfBirth: Date;

  @Column({ nullable: true })
  address: string;

  @Column({
    type: 'enum',
    enum: UserStatusEnum,
    default: UserStatusEnum.PENDING,
  })
  status: UserStatusEnum;

  @Column({
    type: 'enum',
    enum: StepEnum,
    default: StepEnum.REGISTER_INFO,
  })
  step: StepEnum;

  @Column({ length: 255, nullable: true })
  appleId: string;

  @Column({ length: 255, nullable: true })
  appleName: string;

  @Column({ length: 255, nullable: true })
  googleId: string;

  @Column({ length: 255, nullable: true })
  googleName: string;
}
