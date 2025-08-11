import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { BaseEntity } from "./base.entity";
import { ShoeBooking } from "./shoe_booking.entity";
import { Partner } from "./partner.entity";
import { Customer } from "./customer.entity";
import { Driver } from "./driver.entity";

@Entity({ name: "cancel_orders" })
export class CancelOrder extends BaseEntity {
  @Column({ type: "varchar", length: 36, nullable: true })
  shoeBookingId: string;

  @Column({ type: "varchar", length: 36, nullable: true })
  partnerId: string;

  @Column({ type: "varchar", length: 36, nullable: true })
  customerId: string;

  @Column({ type: "varchar", length: 36, nullable: true })
  driverId: string;

  @Column({ type: "text", nullable: true })
  reason: string;

  // Relations
  @ManyToOne(() => ShoeBooking, (shoeBooking) => shoeBooking.cancelOrders, {
    onDelete: "CASCADE",
  })
  @JoinColumn({ name: "shoeBookingId" })
  shoeBooking: ShoeBooking;

  @ManyToOne(() => Partner, (partner) => partner.cancelOrders, {
    onDelete: "CASCADE",
  })
  @JoinColumn({ name: "partnerId" })
  partner: Partner;

  @ManyToOne(() => Customer, (customer) => customer.cancelOrders, {
    onDelete: "CASCADE",
  })
  @JoinColumn({ name: "customerId" })
  customer: Customer;

  @ManyToOne(() => Driver, (driver) => driver.cancelOrders, {
    onDelete: "SET NULL",
  })
  @JoinColumn({ name: "driverId" })
  driver: Driver;
}
