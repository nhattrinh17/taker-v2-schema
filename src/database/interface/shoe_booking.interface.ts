import { PaginationDto } from "@common/decorators";
import { BaseRepositoryInterface } from "../../base/base.interface.repository";
import { ShoeBooking } from "@entities/shoe_booking.entity";
import { ShoeBookingStatusEnum } from "@common/enums";

export interface ShoeBookingRepositoryInterface
  extends BaseRepositoryInterface<ShoeBooking> {
  getAllShoeBookings(
    query: any,
    pagination: PaginationDto
  );
}
