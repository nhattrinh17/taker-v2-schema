import { BaseEntity } from './base.entity';
import { SysPermissionAction } from './sys_permission_action.entity';
export declare class Action extends BaseEntity {
    name: string;
    description?: string;
    sysPermissionActions: SysPermissionAction[];
}
