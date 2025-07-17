import { Repository } from 'typeorm';
import { BaseRepositoryAbstract } from '../../base/base.abstract.repository';
import { GroupRole } from '../../entities/group_role.entity';
import { GroupRoleRepositoryInterface } from '../interface/group_role.interface.repository';

export class GroupRoleRepository extends BaseRepositoryAbstract<GroupRole> implements GroupRoleRepositoryInterface {
  constructor(groupRoleRepository: Repository<GroupRole>) {
    super(groupRoleRepository);
  }

  async findByName(name: string): Promise<GroupRole | null> {
    return await this.repository.findOne({
      where: { name },
    });
  }

  async findWithPermissions(id: string): Promise<GroupRole | null> {
    return await this.repository.findOne({
      where: { id },
      relations: ['groupRolePermissions', 'groupRolePermissions.sysPermissionAction', 'groupRolePermissions.sysPermissionAction.sysPermission', 'groupRolePermissions.sysPermissionAction.action'],
    });
  }

  async findWithAdmins(id: string): Promise<GroupRole | null> {
    return await this.repository.findOne({
      where: { id },
      relations: ['admins'],
    });
  }

  async findWithAllRelations(id: string): Promise<GroupRole | null> {
    return await this.repository.findOne({
      where: { id },
      relations: [
        'admins',
        'groupRolePermissions',
        'groupRolePermissions.sysPermissionAction',
        'groupRolePermissions.sysPermissionAction.sysPermission',
        'groupRolePermissions.sysPermissionAction.action'
      ],
    });
  }
}
