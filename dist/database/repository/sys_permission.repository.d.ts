import { Repository } from 'typeorm';
import { BaseRepositoryAbstract } from '../../base/base.abstract.repository';
import { SysPermission } from '../../entities/sys_permission.entity';
import { SysPermissionRepositoryInterface } from '../interface/sys_permission.interface.repository';
export declare class SysPermissionRepository extends BaseRepositoryAbstract<SysPermission> implements SysPermissionRepositoryInterface {
    constructor(sysPermissionRepository: Repository<SysPermission>);
    findByName(name: string): Promise<SysPermission | null>;
    findByNames(names: string[]): Promise<SysPermission[]>;
    findWithActions(id: string): Promise<SysPermission | null>;
}
