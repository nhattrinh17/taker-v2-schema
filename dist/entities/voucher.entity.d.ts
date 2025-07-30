import { CustomerVoucher } from './customer_voucher.entity';
import { VoucherPaymentMethodEnum, VoucherTypeDiscountEnum, VoucherTypeEnum } from '@common/enums';
import { BaseEntity } from './base.entity';
export declare class Voucher extends BaseEntity {
    name: string;
    description: string;
    code: string;
    paymentMethod: VoucherPaymentMethodEnum;
    discount: number;
    typeDiscount: VoucherTypeDiscountEnum;
    discountToUp: number;
    minimumOrder: number;
    totalUse: number;
    quantity: number;
    icon: string;
    startTime: Date;
    endTime: Date;
    type: VoucherTypeEnum;
    isGlobal: boolean;
    customerVouchers: CustomerVoucher[];
}
