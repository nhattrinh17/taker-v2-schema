import { BaseEntity } from "./base.entity";
import { VehicleRegistryStatusEnum, VehicleTypeEnum } from "@common/enums";
import { Driver } from "./driver.entity";
import { ShoeBooking } from "./shoe_booking.entity";
export declare class VehicleRegistry extends BaseEntity {
    driverId: string;
    licensePlate: string;
    licenseImage: string;
    licenseImageBack: string;
    image: string;
    brand: string;
    model: string;
    year: number;
    color: string;
    seat: number;
    status: VehicleRegistryStatusEnum;
    activeTime: Date;
    type: VehicleTypeEnum;
    driver: Driver;
    deliveryBookings: ShoeBooking[];
    returnBookings: ShoeBooking[];
}
