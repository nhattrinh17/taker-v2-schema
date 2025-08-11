import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { BaseRepositoryAbstract } from "../../base/base.abstract.repository";
import { Rating } from "../../entities/rating.entity";
import { RatingRepositoryInterface } from "../interface/rating.interface";
import { PaginationDto } from "@common/decorators";

@Injectable()
export class RatingRepository
  extends BaseRepositoryAbstract<Rating>
  implements RatingRepositoryInterface
{
  constructor(
    @InjectRepository(Rating)
    private readonly ratingRepository: Repository<Rating>
  ) {
    super(ratingRepository);
  }

  async getRatingAverage(partnerId: string): Promise<any> {
    const query = await this.ratingRepository
      .createQueryBuilder("rating")
      .leftJoinAndSelect("rating.shoeBooking", "shoeBooking")
      .select("AVG(rating.rating)", "averageRating")
      .where("shoeBooking.partnerId = :partnerId", { partnerId })
      .getRawOne();

    return query?.averageRating;
  }

  async findAllCustom(condition: any, pagination: PaginationDto): Promise<any> {
    const queryBuilder = this.ratingRepository
      .createQueryBuilder("rating")
      .leftJoinAndSelect("rating.shoeBooking", "shoeBooking")
      .leftJoinAndSelect("rating.customer", "customer")
      .leftJoinAndSelect("shoeBooking.partner", "partner")
      .where("shoeBooking.partnerId = :partnerId", {
        partnerId: condition.partnerId,
      })
      .select([
        "rating.id",
        "rating.rating",
        "rating.comment",
        "shoeBooking.id",
        "customer.fullName",
        "customer.avatar",
        "customer.phone",
        "partner.name",
        "partner.avatar",
        "partner.phone",
      ])
      .skip(pagination.offset)
      .take(pagination.limit)
      .orderBy(
        `rating.${pagination.sort || "createdAt"}`,
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
