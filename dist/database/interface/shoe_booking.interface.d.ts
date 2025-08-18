import { PaginationDto } from "@common/decorators";
import { BaseRepositoryInterface } from "../../base/base.interface.repository";
import { ShoeBooking } from "@entities/shoe_booking.entity";
export interface ShoeBookingRepositoryInterface extends BaseRepositoryInterface<ShoeBooking> {
    getAllShoeBookings(query: any, pagination: PaginationDto): any;
}
