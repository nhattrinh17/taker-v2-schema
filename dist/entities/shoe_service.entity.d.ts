import { BaseEntity } from "./base.entity";
import { ShoeBooking } from "./shoe_booking.entity";
export declare class ShoeService extends BaseEntity {
    name: string;
    price?: number;
    description: string;
    shoeBookings: ShoeBooking[];
}
