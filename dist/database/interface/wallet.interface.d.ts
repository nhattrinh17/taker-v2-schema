import { PaginationDto } from '@common/decorators';
import { Wallet } from '@entities/wallet.entity';
import { BaseRepositoryInterface } from '../../base/base.interface.repository';
export interface WalletRepositoryInterface extends BaseRepositoryInterface<Wallet> {
    customFind(condition: any, pagination: PaginationDto): Promise<any>;
}
