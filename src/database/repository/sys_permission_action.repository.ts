import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BaseRepositoryAbstract } from '../../base/base.abstract.repository';
import { SysPermissionAction } from '../../entities/sys_permission_action.entity';
import { SysPermissionActionRepositoryInterface } from '../interface/sys_permission_action.interface';

@Injectable()
export class SysPermissionActionRepository extends BaseRepositoryAbstract<SysPermissionAction> implements SysPermissionActionRepositoryInterface {
  constructor(@InjectRepository(SysPermissionAction) private readonly sysPermissionActionRepository: Repository<SysPermissionAction>) {
    super(sysPermissionActionRepository);
  }
}
