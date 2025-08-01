import { Repository } from "typeorm";
import { BaseRepositoryAbstract } from "../../base/base.abstract.repository";
import { ShoeBooking } from "../../entities/shoe_booking.entity";
import { ShoeBookingRepositoryInterface } from "../interface/shoe_booking.interface";
export declare class ShoeBookingRepository extends BaseRepositoryAbstract<ShoeBooking> implements ShoeBookingRepositoryInterface {
    private readonly shoeBookingRepository;
    constructor(shoeBookingRepository: Repository<ShoeBooking>);
}
