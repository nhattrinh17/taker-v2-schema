import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { BaseRepositoryAbstract } from "../../base/base.abstract.repository";
import { Wallet } from "../../entities/wallet.entity";
import { WalletRepositoryInterface } from "../interface/wallet.interface";
import { PaginationDto } from "@common/decorators";

@Injectable()
export class WalletRepository
  extends BaseRepositoryAbstract<Wallet>
  implements WalletRepositoryInterface
{
  constructor(
    @InjectRepository(Wallet)
    private readonly walletRepository: Repository<Wallet>
  ) {
    super(walletRepository);
  }
  // Add custom methods for Wallet if needed

  async customFind(condition: any, pagination: PaginationDto): Promise<any> {
    const queryBuilder = this.walletRepository.createQueryBuilder("wallet");
    queryBuilder
      .leftJoinAndSelect("wallet.customer", "customer")
      .leftJoinAndSelect("wallet.partner", "partner")
      .select([
        "wallet",
        "partner.name",
        "partner.avatar",
        "partner.phone",
        "customer.fullName",
        "customer.avatar",
        "customer.phone",
      ])
      .orderBy("wallet.createdAt", "DESC");

    if (condition.search) {
      queryBuilder.andWhere(
        "(customer.fullName LIKE :search OR customer.phone LIKE :search OR partner.name LIKE :search OR partner.phone LIKE :search)",
        { search: `%${condition.search}%` }
      );
    }

    if (condition.balance) {
      if (condition.balanceCondition === "EQUAL") {
        queryBuilder.andWhere("wallet.balance = :balance", {
          balance: condition.balance,
        });
      }
      if (condition.balanceCondition === "GREATER_THAN") {
        queryBuilder.andWhere("wallet.balance > :balance", {
          balance: condition.balance,
        });
      }
      if (condition.balanceCondition === "LESS_THAN") {
        queryBuilder.andWhere("wallet.balance < :balance", {
          balance: condition.balance,
        });
      }
    }

    if (condition.partnerId === null) {
      queryBuilder.andWhere("wallet.partnerId IS NULL");
    }

    if (condition.customerId === null) {
      queryBuilder.andWhere("wallet.customerId IS NULL");
    }

    queryBuilder.take(pagination.limit).skip(pagination.offset);

    const [result, total] = await queryBuilder.getManyAndCount();

    return {
      pagination: {
        ...pagination,
        total,
      },
      data: result,
    };
  }
}
