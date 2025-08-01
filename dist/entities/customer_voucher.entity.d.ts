import { Customer } from './customer.entity';
import { Voucher } from './voucher.entity';
import { BaseEntity } from './base.entity';
import { ShoeBooking } from './shoe_booking.entity';
export declare class CustomerVoucher extends BaseEntity {
    customerId: string;
    voucherId: string;
    timeUse: Date;
    customer: Customer;
    voucher: Voucher;
    shoeBooking: ShoeBooking;
}
