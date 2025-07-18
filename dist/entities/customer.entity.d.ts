import { BaseEntity } from './base.entity';
import { StepEnum, UserStatusEnum } from '@common/enums';
export declare class Customer extends BaseEntity {
    phone: string;
    password: string;
    fullName: string;
    fcmToken: string;
    email: string;
    referralCode: string;
    lastLoginDate: Date;
    isLogin: boolean;
    isVerified: boolean;
    bankName: string;
    bankAccountNumber: string;
    bankAccountName: string;
    avatar: string;
    dateOfBirth: Date;
    address: string;
    status: UserStatusEnum;
    step: StepEnum;
    appleId: string;
    appleName: string;
    googleId: string;
    googleName: string;
}
