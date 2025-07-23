import { BaseEntity } from './base.entity';
import { GroupRole } from './group_role.entity';
export declare class Admin extends BaseEntity {
    userName: string;
    password: string;
    fcmToken: string;
    refreshToken: string;
    lastLoginDate: Date;
    ipAddress: string;
    groupRoleId: string;
    groupRole: GroupRole;
}
