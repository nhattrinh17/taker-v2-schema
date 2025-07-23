import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BaseRepositoryAbstract } from '../../base/base.abstract.repository';
import { SysPermissionAction } from '../../entities/sys_permission_action.entity';
import { SysPermissionActionRepositoryInterface } from '../interface/sys_permission_action.interface';
import { PaginationDto } from '@common/decorators';

@Injectable()
export class SysPermissionActionRepository extends BaseRepositoryAbstract<SysPermissionAction> implements SysPermissionActionRepositoryInterface {
  constructor(@InjectRepository(SysPermissionAction) private readonly sysPermissionActionRepository: Repository<SysPermissionAction>) {
    super(sysPermissionActionRepository);
  }

  async findAllCustom(dto: any, pagination: PaginationDto): Promise<any> {
    const queryBuilder = this.sysPermissionActionRepository
      .createQueryBuilder('sysPermissionAction')
      .leftJoinAndSelect('sysPermissionAction.sysPermission', 'sysPermission')
      .leftJoinAndSelect('sysPermissionAction.action', 'action')
      .orderBy('sysPermissionAction.createdAt', 'DESC');

    if (dto.search) {
      const search = dto.search;
      queryBuilder
        .where('sysPermission.name LIKE :search', { search: `%${search}%` })
        .orWhere('action.name LIKE :search', { search: `%${search}%` })
    }

    if (dto.sysPermissionId) {
      queryBuilder.andWhere('sysPermissionAction.sysPermissionId = :sysPermissionId', { sysPermissionId: dto.sysPermissionId });
    }

    if (dto.actionId) {
      queryBuilder.andWhere('sysPermissionAction.actionId = :actionId', { actionId: dto.actionId });
    }

    if (pagination) {
      queryBuilder.skip(pagination.offset).take(pagination.limit);
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
