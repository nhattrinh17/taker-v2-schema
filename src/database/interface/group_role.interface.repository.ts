import { BaseRepositoryInterface } from '../../base/base.interface.repository';
import { GroupRole } from '../../entities/group_role.entity';

export interface GroupRoleRepositoryInterface extends BaseRepositoryInterface<GroupRole> {
  findByName(name: string): Promise<GroupRole | null>;
  findWithPermissions(id: string): Promise<GroupRole | null>;
  findWithAdmins(id: string): Promise<GroupRole | null>;
  findWithAllRelations(id: string): Promise<GroupRole | null>;
}
