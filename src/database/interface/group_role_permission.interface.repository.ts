import { BaseRepositoryInterface } from '../../base/base.interface.repository';
import { GroupRolePermission } from '../../entities/group_role_permission.entity';

export interface GroupRolePermissionRepositoryInterface extends BaseRepositoryInterface<GroupRolePermission> {
  findByGroupRoleAndPermission(groupRoleId: string, sysPermissionActionId: string): Promise<GroupRolePermission | null>;
  findByGroupRoleId(groupRoleId: string): Promise<GroupRolePermission[]>;
  findByPermissionActionId(sysPermissionActionId: string): Promise<GroupRolePermission[]>;
  findWithDetails(id: string): Promise<GroupRolePermission | null>;
}
