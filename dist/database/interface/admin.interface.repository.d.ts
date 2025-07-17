import { BaseRepositoryInterface } from '../../base/base.interface.repository';
import { Admin } from '../../entities/admin.entity';
export interface AdminRepositoryInterface extends BaseRepositoryInterface<Admin> {
    getRolesByUserId(userId: string): Promise<any>;
}
