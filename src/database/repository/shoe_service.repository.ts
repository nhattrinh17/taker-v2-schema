import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { BaseRepositoryAbstract } from "../../base/base.abstract.repository";
import { ShoeService } from "../../entities/shoe_service.entity";
import { ShoeServiceRepositoryInterface } from "../interface/shoe_service.interface";
import { PaginationDto } from "@common/decorators";

@Injectable()
export class ShoeServiceRepository
  extends BaseRepositoryAbstract<ShoeService>
  implements ShoeServiceRepositoryInterface
{
  constructor(
    @InjectRepository(ShoeService)
    private readonly shoeServiceRepository: Repository<ShoeService>
  ) {
    super(shoeServiceRepository);
  }

  async getAllShoeServices(
    query: any,
    pagination: PaginationDto
  ): Promise<any> {
    const queryBuilder = this.shoeServiceRepository
      .createQueryBuilder("shoeService")
      .leftJoinAndSelect("shoeService.customer", "customer");

    if (query.customerId) {
      queryBuilder.andWhere("shoeService.customerId = :customerId", {
        customerId: query.customerId,
      });
    }

    if (query.search) {
      queryBuilder.andWhere(
        "shoeService.name ILIKE :search OR shoeService.description ILIKE :search OR shoeService.price ILIKE :search",
        { search: `%${query.search}%` }
      );
    }

    if (query.isPublic === true) {
      // Dịch vụ công khai: không gắn với ai cả
      queryBuilder.andWhere("shoeService.customerId IS NULL");
    } else if (query.isPublic === false) {
      // Dịch vụ không công khai: thuộc về ai đó (có chủ sở hữu)
      queryBuilder.andWhere("shoeService.customerId IS NOT NULL");
    }

    queryBuilder
      .skip(pagination.offset)
      .take(pagination.limit)
      .orderBy(
        `shoeService.${pagination.sort || "createdAt"}`,
        pagination.typeSort || "DESC"
      );

    const [items, total] = await queryBuilder.getManyAndCount();

    return {
      data: items,
      pagination: {
        ...pagination,
        total,
      },
    };
  }
}
