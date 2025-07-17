import { GroupRole } from './group_role.entity';
import { SysPermissionAction } from './sys_permission_action.entity';
import { BaseEntity } from './base.entity';
export declare class GroupRolePermission extends BaseEntity {
    groupRoleId: string;
    sysPermissionActionId: string;
    groupRole: GroupRole;
    sysPermissionAction: SysPermissionAction;
}
