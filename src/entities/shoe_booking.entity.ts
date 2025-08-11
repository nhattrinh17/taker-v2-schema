import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne } from "typeorm";
import { BaseEntity } from "./base.entity";
import { ExpectedDeliveryTimeEnum, ShoeBookingStatusEnum } from "@common/enums";
import { ShoeService } from "./shoe_service.entity";
import { Customer } from "./customer.entity";
import { Partner } from "./partner.entity";
import { Transaction } from "./transaction.entity";
import { CustomerVoucher } from "./customer_voucher.entity";
import { VehicleRegistry } from "./vehicle_registry.entity";
import { CancelOrder } from "./cancel_order.entity";
import { ShoeBookingLog } from "./shoe_booking_log.entity";
import { Rating } from "./rating.entity";

@Entity({ name: "shoe_bookings" })
export class ShoeBooking extends BaseEntity {
  @Column({ type: "varchar", length: 36, nullable: true })
  shoeServiceId?: string;

  @Column({ type: "varchar", length: 36, nullable: true })
  customerId?: string;

  @Column({ type: "varchar", length: 36, nullable: true })
  partnerId?: string;

  @Column({ type: "varchar", length: 36, nullable: true })
  transactionId?: string;

  @Column({ type: "varchar", length: 36, nullable: true })
  customerVoucherId?: string;

  @Column({ type: "varchar", length: 36, nullable: true })
  deliveryVehicleId?: string;

  @Column({ type: "varchar", length: 36, nullable: true })
  returnVehicleId?: string;

  @Column({ type: "text", nullable: true })
  shoeServiceDes?: string;

  @Column({ type: "datetime", nullable: true })
  bookingDate?: Date;

  @Column({
    type: "enum",
    enum: ShoeBookingStatusEnum,
    default: ShoeBookingStatusEnum.PENDING,
  })
  status: ShoeBookingStatusEnum;

  @Column({
    type: "enum",
    enum: ExpectedDeliveryTimeEnum,
    nullable: true,
  })
  expectedDeliveryTime?: ExpectedDeliveryTimeEnum;

  @Column({ type: "varchar", length: 255 })
  pickupAddress: string;

  @Column({ type: "varchar", length: 255 })
  deliveryAddress: string;

  @Column({ type: "varchar", length: 255 })
  returnAddress: string;

  @Column({ type: "varchar", length: 255, nullable: true })
  pickupLocation?: string;

  @Column({ type: "varchar", length: 255, nullable: true })
  deliveryLocation?: string;

  @Column({ type: "varchar", length: 255, nullable: true })
  returnLocation?: string;

  @Column({ type: "int", nullable: true })
  originalPrice?: number;

  @Column({ type: "int", nullable: true })
  totalPrice?: number;

  @Column({ type: "int", nullable: true })
  finalPrice?: number;

  @Column({ type: "int", default: 0 })
  partnerRevenue: number;

  @Column({ type: "text", nullable: true })
  note?: string;

  @Column({ type: "text", nullable: true })
  imageUrls?: string;

  @Column({ type: "text", nullable: true })
  processingImages?: string;

  @Column({ type: "text", nullable: true })
  completedImages?: string;

  @Column({ type: "varchar", length: 255, unique: true })
  orderId: string;

  // Relations
  @ManyToOne(() => ShoeService, (shoeService) => shoeService.shoeBookings, {
    nullable: true,
  })
  @JoinColumn({ name: "shoeServiceId" })
  shoeService?: ShoeService;

  @ManyToOne(() => Customer, (customer) => customer.shoeBookings, {
    nullable: true,
  })
  @JoinColumn({ name: "customerId" })
  customer?: Customer;

  @ManyToOne(() => Partner, (partner) => partner.shoeBookings, {
    nullable: true,
  })
  @JoinColumn({ name: "partnerId" })
  partner?: Partner;

  @OneToOne(() => Transaction, (transaction) => transaction.shoeBooking, {
    nullable: true,
  })
  @JoinColumn({ name: "transactionId" })
  transaction?: Transaction;

  @OneToOne(
    () => CustomerVoucher,
    (customerVoucher) => customerVoucher.shoeBooking,
    { nullable: true }
  )
  @JoinColumn({ name: "customerVoucherId" })
  customerVoucher?: CustomerVoucher;

  @ManyToOne(() => VehicleRegistry, (vehicleRegistry) => vehicleRegistry.deliveryBookings, {
    nullable: true,
  })
  @JoinColumn({ name: "deliveryVehicleId" })
  deliveryVehicle?: VehicleRegistry;

  @ManyToOne(() => VehicleRegistry, (vehicleRegistry) => vehicleRegistry.returnBookings, {
    nullable: true,
  })
  @JoinColumn({ name: "returnVehicleId" })
  returnVehicle?: VehicleRegistry;

  @OneToMany(() => CancelOrder, (cancelOrder) => cancelOrder.shoeBooking)
  cancelOrders: CancelOrder[];

  @OneToMany(() => ShoeBookingLog, (shoeBookingLog) => shoeBookingLog.shoeBooking)
  shoeBookingLogs: ShoeBookingLog[];

  @OneToMany(() => Rating, (rating) => rating.shoeBooking)
  ratings: Rating[];
}
