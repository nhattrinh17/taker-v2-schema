import { BaseEntity } from "./base.entity";
import { ShoeBooking } from "./shoe_booking.entity";
import { Partner } from "./partner.entity";
import { Customer } from "./customer.entity";
import { Driver } from "./driver.entity";
export declare class CancelOrder extends BaseEntity {
    shoeBookingId: string;
    partnerId: string;
    customerId: string;
    driverId: string;
    reason: string;
    shoeBooking: ShoeBooking;
    partner: Partner;
    customer: Customer;
    driver: Driver;
}
