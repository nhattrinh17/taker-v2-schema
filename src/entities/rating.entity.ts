import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { BaseEntity } from "./base.entity";
import { Customer } from "./customer.entity";
import { Partner } from "./partner.entity";
import { ShoeBooking } from "./shoe_booking.entity";

@Entity({ name: "ratings" })
export class Rating extends BaseEntity {
  @Column({ type: "varchar", length: 36, nullable: true })
  customerId?: string;

  @Column({ type: "varchar", length: 36, nullable: true })
  shoeBookingId?: string;

  @Column({ type: "int", nullable: false })
  rating: number;

  @Column({ type: "text", nullable: true })
  comment?: string;

  // Relations
  @ManyToOne(() => Customer, (customer) => customer.ratings, {
    onDelete: "SET NULL",
  })
  @JoinColumn({ name: "customerId" })
  customer?: Customer;

  @ManyToOne(() => ShoeBooking, (shoeBooking) => shoeBooking.ratings, {
    onDelete: "SET NULL",
  })
  @JoinColumn({ name: "shoeBookingId" })
  shoeBooking?: ShoeBooking;
}
