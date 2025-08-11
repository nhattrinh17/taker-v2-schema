import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { BaseRepositoryAbstract } from "../../base/base.abstract.repository";
import { CancelOrder } from "../../entities/cancel_order.entity";
import { CancelOrderRepositoryInterface } from "../interface/cancel_order.interface";
import { PaginationDto } from "@common/decorators";

@Injectable()
export class CancelOrderRepository
  extends BaseRepositoryAbstract<CancelOrder>
  implements CancelOrderRepositoryInterface
{
  constructor(
    @InjectRepository(CancelOrder)
    private readonly cancelOrderRepository: Repository<CancelOrder>
  ) {
    super(cancelOrderRepository);
  }

}
