import { Repository } from 'typeorm';
import { BaseRepositoryAbstract } from '../../base/base.abstract.repository';
import { SysPermissionAction } from '../../entities/sys_permission_action.entity';
import { SysPermissionActionRepositoryInterface } from '../interface/sys_permission_action.interface.repository';
export declare class SysPermissionActionRepository extends BaseRepositoryAbstract<SysPermissionAction> implements SysPermissionActionRepositoryInterface {
    constructor(sysPermissionActionRepository: Repository<SysPermissionAction>);
    findByPermissionAndAction(sysPermissionId: string, actionId: string): Promise<SysPermissionAction | null>;
    findByPermissionId(sysPermissionId: string): Promise<SysPermissionAction[]>;
    findByActionId(actionId: string): Promise<SysPermissionAction[]>;
    findWithDetails(id: string): Promise<SysPermissionAction | null>;
}
