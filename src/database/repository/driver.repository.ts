import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { BaseRepositoryAbstract } from "../../base/base.abstract.repository";
import { Driver } from "../../entities/driver.entity";
import { DriverRepositoryInterface } from "../interface/driver.interface";
import { StepEnum, UserStatusEnum } from "@common/enums";
import { PaginationDto } from "@common/decorators";

@Injectable()
export class DriverRepository
  extends BaseRepositoryAbstract<Driver>
  implements DriverRepositoryInterface
{
  constructor(
    @InjectRepository(Driver)
    private readonly driverRepository: Repository<Driver>
  ) {
    super(driverRepository);
  }

  async findAllCustom(query: any, pagination: PaginationDto) {
    const queryBuilder = this.driverRepository.createQueryBuilder("driver");

    if (query.search) {
      queryBuilder.where(
        "driver.fullName LIKE :search OR driver.phone LIKE :search",
        {
          search: `%${query.search}%`,
        }
      );
    }

    if (query.status) {
      queryBuilder.andWhere("driver.status = :status", {
        status: query.status,
      });
    }

    queryBuilder
      .skip(pagination.offset)
      .take(pagination.limit)
      .orderBy(
        "driver." + pagination.sort || "createdAt",
        pagination.typeSort || "DESC"
      );

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
