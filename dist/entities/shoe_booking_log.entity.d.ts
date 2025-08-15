import { BaseEntity } from "./base.entity";
import { ActorTypeEnum, ShoeBookingStatusEnum } from "../common/enums";
import { ShoeBooking } from "./shoe_booking.entity";
export declare class ShoeBookingLog extends BaseEntity {
    shoeBookingId?: string;
    fromStatus?: ShoeBookingStatusEnum;
    toStatus?: ShoeBookingStatusEnum;
    actorId?: string;
    actorType: ActorTypeEnum;
    details?: string;
    shoeBooking?: ShoeBooking;
}
