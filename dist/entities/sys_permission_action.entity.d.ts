import { SysPermission } from './sys_permission.entity';
import { Action } from './action.entity';
import { BaseEntity } from './base.entity';
import { GroupRolePermission } from './group_role_permission.entity';
export declare class SysPermissionAction extends BaseEntity {
    sysPermissionId: string;
    actionId: string;
    sysPermission: SysPermission;
    action: Action;
    groupRolePermissions: GroupRolePermission[];
}
