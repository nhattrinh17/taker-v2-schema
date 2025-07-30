import { PaginationDto } from "@common/decorators";
import { BaseRepositoryInterface } from "../../base/base.interface.repository";
import { SysPermissionAction } from "../../entities/sys_permission_action.entity";
export interface SysPermissionActionRepositoryInterface extends BaseRepositoryInterface<SysPermissionAction> {
    findAllCustom(dto: any, pagination: PaginationDto): Promise<any>;
}
