import { BaseRepositoryInterface } from "../../base/base.interface.repository";
import { CancelOrder } from "../../entities/cancel_order.entity";
import { PaginationDto } from "@common/decorators";

export interface CancelOrderRepositoryInterface
  extends BaseRepositoryInterface<CancelOrder> {
  
}
