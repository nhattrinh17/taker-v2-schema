import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { BaseEntity } from "./base.entity";
import { ActorTypeEnum, ShoeBookingStatusEnum } from "@common/enums";
import { ShoeBooking } from "./shoe_booking.entity";

@Entity({ name: "shoe_booking_logs" })
export class ShoeBookingLog extends BaseEntity {
  @Column({ type: "varchar", length: 36, nullable: true })
  shoeBookingId?: string;

  @Column({
    type: "enum",
    enum: ShoeBookingStatusEnum,
    nullable: true,
  })
  fromStatus?: ShoeBookingStatusEnum;

  @Column({
    type: "enum",
    enum: ShoeBookingStatusEnum,
    nullable: true,
  })
  toStatus?: ShoeBookingStatusEnum;

  @Column({ type: "varchar", length: 36, nullable: true })
  actorId?: string;

  @Column({
    type: "enum",
    enum: ActorTypeEnum,
    default: ActorTypeEnum.SYSTEM,
  })
  actorType: ActorTypeEnum;

  @Column({ type: "text", nullable: true })
  details?: string;

  // Relations
  @ManyToOne(() => ShoeBooking, (shoeBooking) => shoeBooking.shoeBookingLogs, {
    nullable: true,
  })
  @JoinColumn({ name: "shoeBookingId" })
  shoeBooking?: ShoeBooking;
}
