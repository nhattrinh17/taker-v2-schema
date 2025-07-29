import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BaseRepositoryAbstract } from '../../base/base.abstract.repository';
import { WalletLog } from '../../entities/wallet_log.entity';
import { WalletLogRepositoryInterface } from '../interface/wallet_log.interface';

@Injectable()
export class WalletLogRepository extends BaseRepositoryAbstract<WalletLog> implements WalletLogRepositoryInterface {
  constructor(
    @InjectRepository(WalletLog)
    private readonly walletLogRepository: Repository<WalletLog>
  ) {
    super(walletLogRepository);
  }
  // Add custom methods for WalletLog if needed
}
