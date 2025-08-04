import { CustomerVoucher } from "../../entities/index";
import { BaseRepositoryAbstract } from "src/base";
import { Repository } from "typeorm";
import { CustomerVoucherAdminRepositoryInterface } from "../interface/customer_voucher.interface";
import { PaginationDto } from "../../common/decorators";
export declare class CustomerVoucherAdminRepository extends BaseRepositoryAbstract<CustomerVoucher> implements CustomerVoucherAdminRepositoryInterface {
    private readonly customerVoucherRepository;
    constructor(customerVoucherRepository: Repository<CustomerVoucher>);
    insertManyVoucherForCustomer(dto: {
        customerId: string;
        voucherId: string;
    }[]): Promise<any>;
    revokeAllVoucherById(voucherId: string): Promise<any>;
    findAllAndJoin(condition: object, pagination: PaginationDto): Promise<any>;
    getVouchers(condition: object, pagination: PaginationDto): Promise<any>;
}
