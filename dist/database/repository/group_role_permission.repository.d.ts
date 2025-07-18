import { Repository } from 'typeorm';
import { BaseRepositoryAbstract } from '../../base/base.abstract.repository';
import { GroupRolePermission } from '../../entities/group_role_permission.entity';
import { GroupRolePermissionRepositoryInterface } from '../interface/group_role_permission.interface';
export declare class GroupRolePermissionRepository extends BaseRepositoryAbstract<GroupRolePermission> implements GroupRolePermissionRepositoryInterface {
    private readonly groupRolePermissionRepository;
    constructor(groupRolePermissionRepository: Repository<GroupRolePermission>);
}
