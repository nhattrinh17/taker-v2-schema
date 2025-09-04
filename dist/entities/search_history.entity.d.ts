import { SearchHistoryTypeEnum } from '@common/enums';
import { BaseEntity } from './base.entity';
import { Customer } from './customer.entity';
export declare class SearchHistory extends BaseEntity {
    customer: Customer;
    customerId: string;
    name: string;
    address: string;
    latitude: string;
    longitude: string;
    type: SearchHistoryTypeEnum;
}
