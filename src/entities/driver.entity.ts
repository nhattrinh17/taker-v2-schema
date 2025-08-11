import { Column, Entity, OneToMany } from "typeorm";
import { BaseEntity } from "./base.entity";
import { StepEnum, UserStatusEnum } from "@common/enums";
import { VehicleRegistry } from "./vehicle_registry.entity";
import { CancelOrder } from "./cancel_order.entity";

@Entity({ name: "drivers" })
export class Driver extends BaseEntity {
  @Column()
  fullName: string;

  @Column({ nullable: true })
  fcmToken: string;

  @Column({ unique: true })
  email: string;

  @Column({ unique: true, nullable: true })
  phone: string;

  @Column({ nullable: true })
  password: string;

  @Column({ nullable: true })
  address: string;

  @Column({ type: "text", nullable: true })
  location: string;

  @Column({ length: 255, nullable: true })
  latLongToCell: string;

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

  @Column({ length: 512, nullable: true })
  refreshToken: string;

  // Relations
  @OneToMany(() => VehicleRegistry, (vehicleRegistry) => vehicleRegistry.driver)
  vehicleRegistries: VehicleRegistry[];

  @OneToMany(() => CancelOrder, (cancelOrder) => cancelOrder.driver)
  cancelOrders: CancelOrder[];
}
