import { BaseRepositoryInterface } from '../../base/base.interface.repository';
import { SysPermission } from '../../entities/sys_permission.entity';

export interface SysPermissionRepositoryInterface extends BaseRepositoryInterface<SysPermission> {
  findByName(name: string): Promise<SysPermission | null>;
  findByNames(names: string[]): Promise<SysPermission[]>;
  findWithActions(id: string): Promise<SysPermission | null>;
}
