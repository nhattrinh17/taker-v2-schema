import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BaseRepositoryAbstract } from '../../base/base.abstract.repository';
import { SysPermission } from '../../entities/sys_permission.entity';
import { SysPermissionRepositoryInterface } from '../interface/sys_permission.interface';

@Injectable()
export class SysPermissionRepository extends BaseRepositoryAbstract<SysPermission> implements SysPermissionRepositoryInterface {
  constructor(@InjectRepository(SysPermission) private readonly sysPermissionRepository: Repository<SysPermission>) {
    super(sysPermissionRepository);
  }
}
