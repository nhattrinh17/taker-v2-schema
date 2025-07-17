import { Repository } from 'typeorm';
import { BaseRepositoryAbstract } from '../../base/base.abstract.repository';
import { Admin } from '../../entities/admin.entity';
import { AdminRepositoryInterface } from '../interface/admin.interface.repository';
export declare class AdminRepository extends BaseRepositoryAbstract<Admin> implements AdminRepositoryInterface {
    constructor(adminRepository: Repository<Admin>);
    findByUserName(userName: string): Promise<Admin | null>;
    findByFcmToken(fcmToken: string): Promise<Admin | null>;
    findWithGroupRole(id: string): Promise<Admin | null>;
    findByGroupRoleId(groupRoleId: string): Promise<Admin[]>;
    updateLastLogin(id: string, ipAddress?: string): Promise<Admin | null>;
}
