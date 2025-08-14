import { BaseEntity } from "./base.entity";
import { ShoeBooking } from "./shoe_booking.entity";
export declare class ShoeService extends BaseEntity {
    name: string;
    price?: number;
    simpleDes: string;
    description: string;
    shoeBookings: ShoeBooking[];
}
