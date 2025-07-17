import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BaseRepositoryAbstract } from '../../base/base.abstract.repository';
import { GroupRolePermission } from '../../entities/group_role_permission.entity';
import { GroupRolePermissionRepositoryInterface } from '../interface/group_role_permission.interface.repository';

@Injectable()
export class GroupRolePermissionRepository extends BaseRepositoryAbstract<GroupRolePermission> implements GroupRolePermissionRepositoryInterface {
  constructor(@InjectRepository(GroupRolePermission) private readonly groupRolePermissionRepository: Repository<GroupRolePermission>) {
    super(groupRolePermissionRepository);
  }
}
