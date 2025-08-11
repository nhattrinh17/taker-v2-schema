import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from "typeorm";
import { BaseEntity } from "./base.entity";
import { VehicleRegistryStatusEnum, VehicleTypeEnum } from "@common/enums";
import { Driver } from "./driver.entity";
import { ShoeBooking } from "./shoe_booking.entity";

@Entity({ name: "vehicle_registries" })
export class VehicleRegistry extends BaseEntity {
  @Column({ type: "varchar", length: 36 })
  driverId: string;

  @Column({ type: "varchar", length: 20 })
  licensePlate: string;

  @Column({ type: "varchar", length: 255, nullable: true })
  licenseImage: string;

  @Column({ type: "varchar", length: 255, nullable: true })
  licenseImageBack: string;

  @Column({ type: "varchar", length: 255, nullable: true })
  image: string;

  @Column({ type: "varchar", length: 50 })
  brand: string; // hãng xe

  @Column({ type: "varchar", length: 50 })
  model: string; // dòng xe

  @Column({ type: "int" })
  year: number; // năm sản xuất

  @Column({ type: "varchar", length: 20 })
  color: string;

  @Column({ type: "int" })
  seat: number;

  @Column({
    type: "enum",
    enum: VehicleRegistryStatusEnum,
    default: VehicleRegistryStatusEnum.PENDING,
  })
  status: VehicleRegistryStatusEnum;

  @Column({ type: "datetime", nullable: true })
  activeTime: Date;

  @Column({
    type: "enum",
    enum: VehicleTypeEnum,
    default: VehicleTypeEnum.BIKE,
  })
  type: VehicleTypeEnum;

  // Relations
  @ManyToOne(() => Driver, (driver) => driver.vehicleRegistries, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn({ name: "driverId" })
  driver: Driver;

  @OneToMany(() => ShoeBooking, (shoeBooking) => shoeBooking.deliveryVehicle)
  deliveryBookings: ShoeBooking[];

  @OneToMany(() => ShoeBooking, (shoeBooking) => shoeBooking.returnVehicle)
  returnBookings: ShoeBooking[];
}
