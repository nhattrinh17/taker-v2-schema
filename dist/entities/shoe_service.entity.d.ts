import { BaseEntity } from "./base.entity";
import { Customer } from "./customer.entity";
export declare class ShoeService extends BaseEntity {
    customerId: string;
    customer: Customer;
    name: string;
    price: number;
    description: string;
}
