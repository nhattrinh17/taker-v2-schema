import { PaginationDto } from "@common/decorators";
import { CustomerVoucher } from "@entities/index";
import { BaseRepositoryInterface } from "../../base/base.interface.repository";
export interface CustomerVoucherAdminRepositoryInterface extends BaseRepositoryInterface<CustomerVoucher> {
    insertManyVoucherForCustomer(dto: {
        customerId: string;
        voucherId: string;
    }[]): Promise<any>;
    revokeAllVoucherById(voucherId: string): Promise<any>;
    findAllAndJoin(condition: object, pagination: PaginationDto): Promise<any>;
    getVouchers(condition: object, pagination: PaginationDto): Promise<any>;
}
