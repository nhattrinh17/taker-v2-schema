import { BaseEntity } from './base.entity';
import { StepEnum, UserStatusEnum } from '../common/enums';
import { Address } from './address.entity';
import { Wallet } from './wallet.entity';
export declare class Partner extends BaseEntity {
    name: string;
    email: string;
    phone: string;
    fcmToken: string;
    password: string;
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
    facebookId: string;
    facebookName: string;
    referralCode: string;
    addresses: Address[];
    wallet: Wallet;
}
