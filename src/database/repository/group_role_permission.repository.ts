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

  async findByGroupRoleAndPermission(groupRoleId: string, sysPermissionActionId: string): Promise<GroupRolePermission | null> {
    return await this.repository.findOne({
      where: { groupRoleId, sysPermissionActionId },
    });
  }

  async findByGroupRoleId(groupRoleId: string): Promise<GroupRolePermission[]> {
    return await this.repository.find({
      where: { groupRoleId },
      relations: ['sysPermissionAction', 'sysPermissionAction.sysPermission', 'sysPermissionAction.action'],
    });
  }

  async findByPermissionActionId(sysPermissionActionId: string): Promise<GroupRolePermission[]> {
    return await this.repository.find({
      where: { sysPermissionActionId },
      relations: ['groupRole'],
    });
  }

  async findWithDetails(id: string): Promise<GroupRolePermission | null> {
    return await this.repository.findOne({
      where: { id },
      relations: ['groupRole', 'sysPermissionAction', 'sysPermissionAction.sysPermission', 'sysPermissionAction.action'],
    });
  }
}
