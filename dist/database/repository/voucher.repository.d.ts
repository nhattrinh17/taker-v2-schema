import { Voucher } from '../../entities/index';
import { BaseRepositoryAbstract } from 'src/base';
import { VoucherAdminRepositoryInterface } from '../interface/voucher.interface';
import { Repository } from 'typeorm';
export declare class VoucherAdminRepository extends BaseRepositoryAbstract<Voucher> implements VoucherAdminRepositoryInterface {
    private readonly voucherRepository;
    constructor(voucherRepository: Repository<Voucher>);
}
