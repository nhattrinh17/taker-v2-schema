import { Repository } from "typeorm";
import { BaseRepositoryAbstract } from "../../base/base.abstract.repository";
import { ShoeBooking } from "../../entities/shoe_booking.entity";
import { ShoeBookingRepositoryInterface } from "../interface/shoe_booking.interface";
import { PaginationDto } from "../../common/decorators";
import { ShoeBookingStatusEnum } from "../../common/enums";
export declare class ShoeBookingRepository extends BaseRepositoryAbstract<ShoeBooking> implements ShoeBookingRepositoryInterface {
    private readonly shoeBookingRepository;
    constructor(shoeBookingRepository: Repository<ShoeBooking>);
    getAllShoeBookings(query: {
        customerId?: string;
        status?: ShoeBookingStatusEnum;
    }, pagination: PaginationDto): Promise<{
        data: ShoeBooking[];
        pagination: {
            total: number;
            page: number;
            limit: number;
            offset: number;
            sort?: string;
            typeSort?: "ASC" | "DESC";
        };
    }>;
}
