import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { BaseEntity } from "./base.entity";
import { Customer } from "./customer.entity";

@Entity({ name: "shoe_services" })
export class ShoeService extends BaseEntity {
  @Column()
  name: string;

  @Column({ type: "int", nullable: true })
  price?: number;

  @Column({ type: "text", nullable: true })
  description: string;
}
