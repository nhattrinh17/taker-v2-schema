import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { BaseRepositoryAbstract } from "../../base/base.abstract.repository";
import { Customer } from "../../entities/customer.entity";
import { CustomerRepositoryInterface } from "../interface/customer.interface";
import { StepEnum, UserStatusEnum } from "@common/enums";
import { PaginationDto } from "@common/decorators";

@Injectable()
export class CustomerRepository
  extends BaseRepositoryAbstract<Customer>
  implements CustomerRepositoryInterface
{
  constructor(
    @InjectRepository(Customer)
    private readonly customerRepository: Repository<Customer>
  ) {
    super(customerRepository);
  }

  async findAllCustomers(
    condition: {
      search?: string;
      status?: UserStatusEnum;
      step?: StepEnum;
    },
    pagination: PaginationDto
  ) {
    const { search, status, step } = condition;
    const { page, offset, limit, sort, typeSort } = pagination;
    const queryBuilder = this.repository
      .createQueryBuilder("customer")
      .skip(offset)
      .take(limit);
    if (search) {
      queryBuilder.where(
        "customer.fullName ILIKE :search OR customer.email ILIKE :search OR customer.phone ILIKE :search",
        {
          search: `%${search}%`,
        }
      );
    }

    if (status) {
      queryBuilder.andWhere("customer.status = :status", { status });
    }

    if (step) {
      queryBuilder.andWhere("customer.step = :step", { step });
    }

    if (sort) {
      queryBuilder.orderBy(`customer.${sort || 'createdAt'}`, typeSort || "DESC");
    }

    const [data, total] = await queryBuilder.getManyAndCount();
    return {
      data,
      pagination: {
        ...pagination,
        total,
      },
    };
  }
}
