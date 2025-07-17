import { BaseRepositoryInterface } from '../../base/base.interface.repository';
import { SysPermissionAction } from '../../entities/sys_permission_action.entity';

export interface SysPermissionActionRepositoryInterface extends BaseRepositoryInterface<SysPermissionAction> {
  findByPermissionAndAction(sysPermissionId: string, actionId: string): Promise<SysPermissionAction | null>;
  findByPermissionId(sysPermissionId: string): Promise<SysPermissionAction[]>;
  findByActionId(actionId: string): Promise<SysPermissionAction[]>;
  findWithDetails(id: string): Promise<SysPermissionAction | null>;
}
