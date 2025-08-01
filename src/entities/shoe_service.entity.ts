import { Column, Entity, Index, JoinColumn, ManyToOne, OneToMany } from "typeorm";
import { BaseEntity } from "./base.entity";
import { Customer } from "./customer.entity";
import { ShoeBooking } from "./shoe_booking.entity";

@Entity({ name: "shoe_services" })
export class ShoeService extends BaseEntity {
  @Column()
  name: string;

  @Column({ type: "int", nullable: true })
  price?: number;

  @Column({ type: "text", nullable: true })
  description: string;

  @OneToMany(() => ShoeBooking, (shoeBooking) => shoeBooking.shoeService)
  shoeBookings: ShoeBooking[];
}
