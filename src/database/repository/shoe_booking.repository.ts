import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { BaseRepositoryAbstract } from "../../base/base.abstract.repository";
import { ShoeBooking } from "../../entities/shoe_booking.entity";
import { ShoeBookingRepositoryInterface } from "../interface/shoe_booking.interface";
import { PaginationDto } from "@common/decorators";
import { ShoeBookingStatusEnum } from "@common/enums";

@Injectable()
export class ShoeBookingRepository
  extends BaseRepositoryAbstract<ShoeBooking>
  implements ShoeBookingRepositoryInterface
{
  constructor(
    @InjectRepository(ShoeBooking)
    private readonly shoeBookingRepository: Repository<ShoeBooking>
  ) {
    super(shoeBookingRepository);
  }

  async getAllShoeBookings(
    query: { customerId?: string; status?: ShoeBookingStatusEnum },
    pagination: PaginationDto
  ) {
    const queryBuilder = this.shoeBookingRepository
      .createQueryBuilder("shoeBooking")
      .leftJoinAndSelect("shoeBooking.customer", "customer")
      .leftJoinAndSelect("shoeBooking.shoeService", "shoeService")
      .where("shoeBooking.customerId = :customerId", {
        customerId: query.customerId,
      });

    if (query.status) {
      queryBuilder.andWhere("shoeBooking.status = :status", {
        status: query.status,
      });
    }

    queryBuilder
      .take(pagination.limit)
      .skip(pagination.offset)
      .orderBy(
        "shoeBooking." + pagination.sort || "createdAt",
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
