import { Column, Entity } from 'typeorm';
import { BaseEntity } from './base.entity';
import { StepEnum, UserStatusEnum } from '@common/enums';
import { BASE_OPERATING_HOURS } from '@common/constants/app.constant';

@Entity({ name: 'shops' })
export class Shop extends BaseEntity {
  @Column()
  name: string;

  @Column({ unique: true })
  email: string;

  @Column({ unique: true, nullable: true })
  phone: string;

  @Column({ nullable: true })
  address: string;

  @Column({ type: 'text', nullable: true })
  location: string;

  @Column({ length: 255, nullable: true })
  latLongToCell: string;

  @Column({ 
    length: 255,
    default: JSON.stringify(BASE_OPERATING_HOURS)
  })
  operatingHours: string;

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
