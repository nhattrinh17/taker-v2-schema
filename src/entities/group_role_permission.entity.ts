import {
  Entity,
  PrimaryColumn,
  Column,
  ManyToOne,
  JoinColumn,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
} from 'typeorm';
import { GroupRole } from './group_role.entity';
import { SysPermissionAction } from './sys_permission_action.entity';
import { BaseEntity } from './base.entity';

@Entity('group_role_permissions')
export class GroupRolePermission extends BaseEntity {
  @Column('varchar', { length: 36 })
  groupRoleId: string;

  @Column('varchar', { length: 36 })
  sysPermissionActionId: string;

  @ManyToOne(() => GroupRole, (groupRole) => groupRole.groupRolePermissions, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
  @JoinColumn({ name: 'groupRoleId' })
  groupRole: GroupRole;

  @ManyToOne(() => SysPermissionAction, (sysPermissionAction) => sysPermissionAction.groupRolePermissions, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
  @JoinColumn({ name: 'sysPermissionActionId' })
  sysPermissionAction: SysPermissionAction;
}