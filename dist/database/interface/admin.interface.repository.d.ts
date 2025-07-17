import { BaseRepositoryInterface } from '../../base/base.interface.repository';
import { Admin } from '../../entities/admin.entity';
export interface AdminRepositoryInterface extends BaseRepositoryInterface<Admin> {
    findByUserName(userName: string): Promise<Admin | null>;
    findByFcmToken(fcmToken: string): Promise<Admin | null>;
    findWithGroupRole(id: string): Promise<Admin | null>;
    findByGroupRoleId(groupRoleId: string): Promise<Admin[]>;
    updateLastLogin(id: string, ipAddress?: string): Promise<Admin | null>;
}
