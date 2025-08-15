import { BaseEntity } from "./base.entity";
import { StepEnum, UserStatusEnum } from "../common/enums";
import { VehicleRegistry } from "./vehicle_registry.entity";
import { CancelOrder } from "./cancel_order.entity";
export declare class Driver extends BaseEntity {
    fullName: string;
    fcmToken: string;
    email: string;
    phone: string;
    password: string;
    address: string;
    location: string;
    latLongToCell: string;
    isLogin: boolean;
    isVerified: boolean;
    bankName: string;
    bankAccountNumber: string;
    bankAccountName: string;
    avatar: string;
    status: UserStatusEnum;
    step: StepEnum;
    refreshToken: string;
    vehicleRegistries: VehicleRegistry[];
    cancelOrders: CancelOrder[];
}
