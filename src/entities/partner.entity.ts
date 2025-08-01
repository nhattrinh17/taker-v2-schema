import { Column, Entity, OneToMany, OneToOne } from "typeorm";
import { BaseEntity } from "./base.entity";
import { PartnerTypeEnum, StepEnum, UserStatusEnum } from "@common/enums";
import { BASE_OPERATING_HOURS } from "@common/constants/app.constant";
import { Address } from "./address.entity";
import { Wallet } from "./wallet.entity";
import { ShoeService } from "./shoe_service.entity";
import { ShoeBooking } from "./shoe_booking.entity";

@Entity({ name: "partners" })
export class Partner extends BaseEntity {
  @Column()
  name: string;

  @Column({ unique: true })
  email: string;

  @Column({ unique: true, nullable: true })
  phone: string;

  @Column({ nullable: true })
  fcmToken: string;

  @Column({ nullable: true })
  password: string;

  @Column({ default: false })
  isLogin: boolean;

  @Column({ default: false })
  isVerified: boolean;

  @Column({ nullable: true })
  bankName: string;

  @Column({ length: 255, default: JSON.stringify(BASE_OPERATING_HOURS) })
  operatingHours: string;

  @Column({ nullable: true })
  bankAccountNumber: string;

  @Column({ nullable: true })
  bankAccountName: string;

  @Column({ nullable: true })
  avatar: string;

  @Column({
    type: "enum",
    enum: UserStatusEnum,
    default: UserStatusEnum.PENDING,
  })
  status: UserStatusEnum;

  @Column({
    type: "enum",
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

  @Column({ length: 512, nullable: true })
  refreshToken: string;

  @Column({ length: 255, nullable: true })
  facebookId: string;

  @Column({ length: 255, nullable: true })
  facebookName: string;

  @Column({ nullable: true })
  referralCode: string;

  @Column({ enum: PartnerTypeEnum, nullable: true })
  type: PartnerTypeEnum;

  // Relations
  @OneToMany(() => Address, (address) => address.partner)
  addresses: Address[];

  @OneToOne(() => Wallet, (wallet) => wallet.partner, { nullable: true })
  wallet: Wallet;

  @OneToMany(() => ShoeBooking, (shoeBooking) => shoeBooking.partner)
  shoeBookings: ShoeBooking[];
}
