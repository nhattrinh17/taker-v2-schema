import { PaginationDto } from "@common/decorators";
import { BaseRepositoryInterface } from "../../base/base.interface.repository";
import { ShoeBookingLog } from "@entities/shoe_booking_log.entity";

export interface ShoeBookingLogRepositoryInterface
  extends BaseRepositoryInterface<ShoeBookingLog> {
  // Add any specific methods for shoe booking log if needed
}
