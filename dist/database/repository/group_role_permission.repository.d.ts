import { Repository } from 'typeorm';
import { BaseRepositoryAbstract } from '../../base/base.abstract.repository';
import { GroupRolePermission } from '../../entities/group_role_permission.entity';
import { GroupRolePermissionRepositoryInterface } from '../interface/group_role_permission.interface.repository';
export declare class GroupRolePermissionRepository extends BaseRepositoryAbstract<GroupRolePermission> implements GroupRolePermissionRepositoryInterface {
    constructor(groupRolePermissionRepository: Repository<GroupRolePermission>);
    findByGroupRoleAndPermission(groupRoleId: string, sysPermissionActionId: string): Promise<GroupRolePermission | null>;
    findByGroupRoleId(groupRoleId: string): Promise<GroupRolePermission[]>;
    findByPermissionActionId(sysPermissionActionId: string): Promise<GroupRolePermission[]>;
    findWithDetails(id: string): Promise<GroupRolePermission | null>;
}
