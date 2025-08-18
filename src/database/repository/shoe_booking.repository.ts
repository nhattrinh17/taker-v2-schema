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

  async getAllShoeBookings(query: any, pagination: PaginationDto) {
    const queryBuilder = this.shoeBookingRepository
      .createQueryBuilder("shoeBooking")
      .leftJoinAndSelect("shoeBooking.customer", "customer")
      .leftJoinAndSelect("shoeBooking.shoeService", "shoeService")
      .leftJoinAndSelect("shoeBooking.partner", "partner");

    if (query.customerId) {
      queryBuilder.where("shoeBooking.customerId = :customerId", {
        customerId: query.customerId,
      })
    } else if (query.partnerId) {
      queryBuilder.where("shoeBooking.partnerId = :partnerId", {
        partnerId: query.partnerId,
      });
    }

    if( query.orderId) {
      queryBuilder.andWhere("shoeBooking.orderId = :orderId", {
        orderId: query.orderId,
      });
    }

    if (query.status) {
      queryBuilder.andWhere("shoeBooking.status = :status", {
        status: query.status,
      });
    }

    if (query.fromDate && query.toDate) {
      queryBuilder.andWhere(
        "shoeBooking.createdAt BETWEEN :fromDate AND :toDate",
        {
          fromDate: query.fromDate,
          toDate: query.toDate,
        }
      );
    }

    if (query.shoeServiceName) {
      queryBuilder.andWhere("shoeService.name LIKE :shoeServiceName", {
        shoeServiceName: `%${query.shoeServiceName}%`,
      });
    }

    queryBuilder
      .take(pagination.limit)
      .skip(pagination.offset)
      .orderBy(
        "shoeBooking." + (pagination.sort || "createdAt"),
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
