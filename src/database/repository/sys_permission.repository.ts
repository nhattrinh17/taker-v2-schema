import { Repository } from 'typeorm';
import { BaseRepositoryAbstract } from '../../base/base.abstract.repository';
import { SysPermission } from '../../entities/sys_permission.entity';
import { SysPermissionRepositoryInterface } from '../interface/sys_permission.interface.repository';

export class SysPermissionRepository extends BaseRepositoryAbstract<SysPermission> implements SysPermissionRepositoryInterface {
  constructor(sysPermissionRepository: Repository<SysPermission>) {
    super(sysPermissionRepository);
  }

  async findByName(name: string): Promise<SysPermission | null> {
    return await this.repository.findOne({
      where: { name },
    });
  }

  async findByNames(names: string[]): Promise<SysPermission[]> {
    return await this.repository.find({
      where: names.map(name => ({ name })),
    });
  }

  async findWithActions(id: string): Promise<SysPermission | null> {
    return await this.repository.findOne({
      where: { id },
      relations: ['sysPermissionActions', 'sysPermissionActions.action'],
    });
  }
}
