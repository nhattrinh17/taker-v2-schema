import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BaseRepositoryAbstract } from '../../base/base.abstract.repository';
import { GroupRolePermission } from '../../entities/group_role_permission.entity';
import { GroupRolePermissionRepositoryInterface } from '../interface/group_role_permission.interface';
import { PaginationDto } from '@common/decorators';

@Injectable()
export class GroupRolePermissionRepository extends BaseRepositoryAbstract<GroupRolePermission> implements GroupRolePermissionRepositoryInterface {
  constructor(@InjectRepository(GroupRolePermission) private readonly groupRolePermissionRepository: Repository<GroupRolePermission>) {
    super(groupRolePermissionRepository);
  }

  async findAllCustom({search, groupRoleId, sysPermissionActionId}: any, pagination: PaginationDto): Promise<any> {
    const queryBuilder = this.groupRolePermissionRepository
      .createQueryBuilder('groupRolePermission')
      .leftJoinAndSelect('groupRolePermission.groupRole', 'groupRole')
      .leftJoinAndSelect('groupRolePermission.sysPermissionAction', 'sysPermissionAction')
      .leftJoinAndSelect('sysPermissionAction.sysPermission', 'sysPermission')
      .leftJoinAndSelect('sysPermissionAction.action', 'action')
      .select([
        'groupRolePermission',
        'groupRole.id',
        'groupRole.name',
        'groupRole.description',
        'sysPermissionAction.id',
        'sysPermissionAction.sysPermissionId',
        'sysPermissionAction.actionId',
        'sysPermission.name',
        'sysPermission.description',
        'action.name',
        'action.description',
      ])

    if (search) {
      queryBuilder.where('groupRole.name LIKE :search OR sysPermission.name LIKE :search OR action.name LIKE :search', {
        search: `%${search}%`,
      });
    }

    if (groupRoleId) {
      queryBuilder.andWhere('groupRolePermission.groupRoleId = :groupRoleId', { groupRoleId });
    }

    if (sysPermissionActionId) {
      queryBuilder.andWhere('groupRolePermission.sysPermissionActionId = :sysPermissionActionId', { sysPermissionActionId });
    }

    queryBuilder.take(pagination.limit).skip(pagination.offset);

    if (pagination.sort) {
      queryBuilder.orderBy(pagination.sort, pagination.typeSort || 'ASC');
    }

    const [data, total] = await queryBuilder.getManyAndCount();

    return {
      data,
      pagination: {
        total,
        ...pagination,
      },
    };
  }
}
