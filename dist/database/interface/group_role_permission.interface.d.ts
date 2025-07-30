import { PaginationDto } from "@common/decorators";
import { BaseRepositoryInterface } from "../../base/base.interface.repository";
import { GroupRolePermission } from "../../entities/group_role_permission.entity";
export interface GroupRolePermissionRepositoryInterface extends BaseRepositoryInterface<GroupRolePermission> {
    findAllCustom(dto: any, pagination: PaginationDto): Promise<any>;
}
