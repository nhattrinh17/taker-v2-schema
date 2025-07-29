import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BaseRepositoryAbstract } from '../../base/base.abstract.repository';
import { Transaction } from '../../entities/transaction.entity';
import { TransactionRepositoryInterface } from '../interface/transaction.interface';

@Injectable()
export class TransactionRepository extends BaseRepositoryAbstract<Transaction> implements TransactionRepositoryInterface {
  constructor(
    @InjectRepository(Transaction)
    private readonly transactionRepository: Repository<Transaction>
  ) {
    super(transactionRepository);
  }
  // Add custom methods for Transaction if needed
}
