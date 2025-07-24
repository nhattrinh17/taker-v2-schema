import { BaseEntity } from "./base.entity";
import { StepEnum, UserStatusEnum } from "../common/enums";
import { Address } from "./address.entity";
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
    status: UserStatusEnum;
    step: StepEnum;
    appleId: string;
    appleName: string;
    googleId: string;
    googleName: string;
    refreshToken: string;
    facebookId: string;
    facebookName: string;
    addresses: Address[];
}
