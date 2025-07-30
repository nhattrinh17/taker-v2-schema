import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { BaseEntity } from "./base.entity";
import { Customer } from "./customer.entity";

@Entity({ name: "shoe_services" })
export class ShoeService extends BaseEntity {
  @Column({ nullable: true })
  customerId: string;

  @ManyToOne(() => Customer, (customer) => customer.shoeServices, {
    onDelete: "CASCADE",
  })
  @JoinColumn({ name: "customerId" })
  customer: Customer;

  @Column()
  name: string;

  @Column({ type: "int"})
  price: number;

  @Column({ type: "text", nullable: true })
  description: string;
}
