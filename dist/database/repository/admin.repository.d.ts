import { Repository } from 'typeorm';
import { BaseRepositoryAbstract } from '../../base/base.abstract.repository';
import { Admin } from '../../entities/admin.entity';
import { AdminRepositoryInterface } from '../interface/admin.interface.repository';
export declare class AdminRepository extends BaseRepositoryAbstract<Admin> implements AdminRepositoryInterface {
    private readonly adminRepository;
    constructor(adminRepository: Repository<Admin>);
    getRolesByUserId(userId: string): Promise<any>;
}
