import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { BaseRepositoryAbstract } from "../../base/base.abstract.repository";
import { Transaction } from "../../entities/transaction.entity";
import { TransactionRepositoryInterface } from "../interface/transaction.interface";
import { PaginationDto } from "@common/decorators";

@Injectable()
export class TransactionRepository
  extends BaseRepositoryAbstract<Transaction>
  implements TransactionRepositoryInterface
{
  constructor(
    @InjectRepository(Transaction)
    private readonly transactionRepository: Repository<Transaction>
  ) {
    super(transactionRepository);
  }
  // Add custom methods for Transaction if needed
  async updateMultipleWidthCondition(
    condition: object,
    data: object
  ): Promise<any> {
    return this.transactionRepository
      .createQueryBuilder(Transaction.name)
      .update(Transaction.name)
      .set(data)
      .where(condition)
      .execute();
  }

  async findAllCustom(condition: any, pagination: PaginationDto) {
    const queryBuilder =
      this.transactionRepository.createQueryBuilder("transaction");

    if (condition.walletId) {
      queryBuilder.andWhere("transaction.walletId = :walletId", {
        walletId: condition.walletId,
      });
    }

    if (condition.status) {
      queryBuilder.andWhere("transaction.status = :status", {
        status: condition.status,
      });
    }

    if (condition.startDate && condition.endDate) {
      queryBuilder.andWhere(
        "transaction.createdAt BETWEEN :startDate AND :endDate",
        {
          startDate: new Date(condition.startDate),
          endDate: new Date(condition.endDate),
        }
      );
    }

    queryBuilder
      .take(pagination.limit || 10)
      .skip(pagination.offset || 0)
      .orderBy("transaction.createdAt", "DESC");

    const [data, total] = await queryBuilder.getManyAndCount();
    return {
      data,
      pagination: {
        total: total,
        ...pagination
      },
    }
  }
}
