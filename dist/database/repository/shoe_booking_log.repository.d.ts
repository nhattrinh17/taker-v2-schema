import { Repository } from "typeorm";
import { BaseRepositoryAbstract } from "../../base/base.abstract.repository";
import { ShoeBookingLog } from "../../entities/shoe_booking_log.entity";
import { ShoeBookingLogRepositoryInterface } from "../interface/shoe_booking_log.interface";
export declare class ShoeBookingLogRepository extends BaseRepositoryAbstract<ShoeBookingLog> implements ShoeBookingLogRepositoryInterface {
    private readonly shoeBookingLogRepository;
    constructor(shoeBookingLogRepository: Repository<ShoeBookingLog>);
}
