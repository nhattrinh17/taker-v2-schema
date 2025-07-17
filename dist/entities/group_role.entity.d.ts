import { BaseEntity } from './base.entity';
import { GroupRolePermission } from './group_role_permission.entity';
import { Admin } from './admin.entity';
export declare class GroupRole extends BaseEntity {
    name: string;
    description?: string;
    groupRolePermissions: GroupRolePermission[];
    admins: Admin[];
}
