import { BaseEntity } from './base.entity';
import { StepEnum, UserStatusEnum } from '../common/enums';
export declare class Partner extends BaseEntity {
    name: string;
    email: string;
    phone: string;
    fcmToken: string;
    password: string;
    address: string;
    location: string;
    latLongToCell: string;
    operatingHours: string;
    isLogin: boolean;
    isVerified: boolean;
    bankName: string;
    bankAccountNumber: string;
    bankAccountName: string;
    avatar: string;
    status: UserStatusEnum;
    step: StepEnum;
    appleId: string;
    appleName: string;
    googleId: string;
    googleName: string;
    refreshToken: string;
}
