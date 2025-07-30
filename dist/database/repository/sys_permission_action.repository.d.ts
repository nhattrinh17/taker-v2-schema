import { Repository } from 'typeorm';
import { BaseRepositoryAbstract } from '../../base/base.abstract.repository';
import { SysPermissionAction } from '../../entities/sys_permission_action.entity';
import { SysPermissionActionRepositoryInterface } from '../interface/sys_permission_action.interface';
import { PaginationDto } from '@common/decorators';
export declare class SysPermissionActionRepository extends BaseRepositoryAbstract<SysPermissionAction> implements SysPermissionActionRepositoryInterface {
    private readonly sysPermissionActionRepository;
    constructor(sysPermissionActionRepository: Repository<SysPermissionAction>);
    findAllCustom(dto: any, pagination: PaginationDto): Promise<any>;
}
