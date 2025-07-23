import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { BaseRepositoryAbstract } from "../../base/base.abstract.repository";
import { Partner } from "../../entities/partner.entity";
import { PartnerRepositoryInterface } from "../interface/partner.interface";
import { StepEnum, UserStatusEnum } from "@common/enums";
import { PaginationDto } from "@common/decorators";

@Injectable()
export class PartnerRepository
  extends BaseRepositoryAbstract<Partner>
  implements PartnerRepositoryInterface
{
  constructor(
    @InjectRepository(Partner)
    private readonly partnerRepository: Repository<Partner>
  ) {
    super(partnerRepository);
  }

  async findAllPartners(
    condition: {
      search?: string;
      status?: UserStatusEnum;
      step?: StepEnum;
    },
    pagination: PaginationDto
  ) {
    const { search, status, step } = condition;
    const { page, offset, limit, sort, typeSort } = pagination;
    const queryBuilder = this.partnerRepository
      .createQueryBuilder("partner")
      .skip(offset)
      .take(limit);
    if (search) {
      queryBuilder.where(
        "partner.name ILIKE :search OR partner.email ILIKE :search OR partner.phone ILIKE :search",
        {
          search: `%${search}%`,
        }
      );
    }

    if (status) {
      queryBuilder.andWhere("partner.status = :status", { status });
    }

    if (step) {
      queryBuilder.andWhere("partner.step = :step", { step });
    }

    if (sort) {
      queryBuilder.orderBy(
        `partner.${sort || "createdAt"}`,
        typeSort || "DESC"
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
}
