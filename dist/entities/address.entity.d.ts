import { BaseEntity } from './base.entity';
import { Customer } from './customer.entity';
import { Partner } from './partner.entity';
export declare class Address extends BaseEntity {
    customerId: string;
    partnerId: string;
    address: string;
    location: string;
    latLongToCell: string;
    isDefault: boolean;
    label: string;
    fullName: string;
    phone: string;
    isPickupAddress: boolean;
    isReturnAddress: boolean;
    customer: Customer;
    partner: Partner;
}
