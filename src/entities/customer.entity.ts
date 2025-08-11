import { Column, Entity, OneToMany, OneToOne } from "typeorm";
import { BaseEntity } from "./base.entity";
import { StepEnum, UserStatusEnum } from "@common/enums";
import { Address } from "./address.entity";
import { Wallet } from "./wallet.entity";
import { ShoeService } from "./shoe_service.entity";
import { CustomerVoucher } from "./customer_voucher.entity";
import { ShoeBooking } from "./shoe_booking.entity";
import { CancelOrder } from "./cancel_order.entity";
import { Rating } from "./rating.entity";

@Entity({ name: "customers" })
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

  // Relations
  @OneToMany(() => Address, (address) => address.customer)
  addresses: Address[];

  @OneToOne(() => Wallet, (wallet) => wallet.customer, { nullable: true })
  wallet: Wallet;

  @OneToMany(() => ShoeBooking, (shoeBooking) => shoeBooking.customer)
  shoeBookings: ShoeBooking[];

  @OneToMany(() => CustomerVoucher, (customerVoucher) => customerVoucher.customer)
  customerVouchers: CustomerVoucher[];

  @OneToMany(() => CancelOrder, (cancelOrder) => cancelOrder.customer)
  cancelOrders: CancelOrder[];

  @OneToMany(() => Rating, (rating) => rating.customer)
  ratings: Rating[];
}
