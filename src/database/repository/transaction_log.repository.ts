import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BaseRepositoryAbstract } from '../../base/base.abstract.repository';
import { TransactionLog } from '../../entities/transaction_log.entity';
import { TransactionLogRepositoryInterface } from '../interface/transaction_log.interface';

@Injectable()
export class TransactionLogRepository extends BaseRepositoryAbstract<TransactionLog> implements TransactionLogRepositoryInterface {
  constructor(
    @InjectRepository(TransactionLog)
    private readonly transactionLogRepository: Repository<TransactionLog>
  ) {
    super(transactionLogRepository);
  }
  // Add custom methods for TransactionLog if needed
}
