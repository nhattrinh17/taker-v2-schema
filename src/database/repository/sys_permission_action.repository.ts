import { Repository } from 'typeorm';
import { BaseRepositoryAbstract } from '../../base/base.abstract.repository';
import { SysPermissionAction } from '../../entities/sys_permission_action.entity';
import { SysPermissionActionRepositoryInterface } from '../interface/sys_permission_action.interface.repository';

export class SysPermissionActionRepository extends BaseRepositoryAbstract<SysPermissionAction> implements SysPermissionActionRepositoryInterface {
  constructor(sysPermissionActionRepository: Repository<SysPermissionAction>) {
    super(sysPermissionActionRepository);
  }

  async findByPermissionAndAction(sysPermissionId: string, actionId: string): Promise<SysPermissionAction | null> {
    return await this.repository.findOne({
      where: { sysPermissionId, actionId },
    });
  }

  async findByPermissionId(sysPermissionId: string): Promise<SysPermissionAction[]> {
    return await this.repository.find({
      where: { sysPermissionId },
      relations: ['action'],
    });
  }

  async findByActionId(actionId: string): Promise<SysPermissionAction[]> {
    return await this.repository.find({
      where: { actionId },
      relations: ['sysPermission'],
    });
  }

  async findWithDetails(id: string): Promise<SysPermissionAction | null> {
    return await this.repository.findOne({
      where: { id },
      relations: ['sysPermission', 'action'],
    });
  }
}
