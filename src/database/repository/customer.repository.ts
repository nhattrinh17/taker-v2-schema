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
    const queryBuilder = this.customerRepository
      .createQueryBuilder("customer")
      .skip(offset)
      .take(limit);

    if (status) {
      queryBuilder.andWhere("customer.status = :status", { status });
    }

    if (step) {
      queryBuilder.andWhere("customer.step = :step", { step });
    }

    if (sort) {
      queryBuilder.orderBy(`customer.${sort || 'createdAt'}`, typeSort || "DESC");
    }

    if (search) {
      queryBuilder.andWhere(
        "customer.fullName LIKE :search OR customer.email LIKE :search OR customer.phone LIKE :search",
        {
          search: `%${search}%`,
        }
      );
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

  getIdAllCustomer(filter?: object): Promise<Customer[]> {
    return this.customerRepository.find({
      select: ['id'],
      where: filter,
    });
  }
}
