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

    if (query.search) {
      queryBuilder.andWhere(
        "shoeService.name LIKE :search OR shoeService.description LIKE :search OR shoeService.price LIKE :search",
        { search: `%${query.search}%` }
      );
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
