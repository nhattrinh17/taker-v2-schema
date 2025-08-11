import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { BaseRepositoryAbstract } from "../../base/base.abstract.repository";
import { ShoeBookingLog } from "../../entities/shoe_booking_log.entity";
import { ShoeBookingLogRepositoryInterface } from "../interface/shoe_booking_log.interface";
import { PaginationDto } from "@common/decorators";

@Injectable()
export class ShoeBookingLogRepository
  extends BaseRepositoryAbstract<ShoeBookingLog>
  implements ShoeBookingLogRepositoryInterface
{
  constructor(
    @InjectRepository(ShoeBookingLog)
    private readonly shoeBookingLogRepository: Repository<ShoeBookingLog>
  ) {
    super(shoeBookingLogRepository);
  }
}
