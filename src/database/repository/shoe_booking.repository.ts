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
}
