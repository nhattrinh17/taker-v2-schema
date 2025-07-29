import { Repository } from 'typeorm';
import { BaseRepositoryAbstract } from '../../base/base.abstract.repository';
import { WalletLog } from '../../entities/wallet_log.entity';
import { WalletLogRepositoryInterface } from '../interface/wallet_log.interface';
export declare class WalletLogRepository extends BaseRepositoryAbstract<WalletLog> implements WalletLogRepositoryInterface {
    private readonly walletLogRepository;
    constructor(walletLogRepository: Repository<WalletLog>);
}
