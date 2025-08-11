import { BaseEntity } from "./base.entity";
import { Customer } from "./customer.entity";
import { ShoeBooking } from "./shoe_booking.entity";
export declare class Rating extends BaseEntity {
    customerId?: string;
    shoeBookingId?: string;
    rating: number;
    comment?: string;
    customer?: Customer;
    shoeBooking?: ShoeBooking;
}
