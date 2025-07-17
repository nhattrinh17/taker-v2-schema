import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, OneToMany } from 'typeorm';
import { SysPermission } from './sys_permission.entity';
import { Action } from './action.entity';
import { BaseEntity } from './base.entity';
import { GroupRolePermission } from './group_role_permission.entity';

@Entity('sys_permission_actions')
export class SysPermissionAction extends BaseEntity {
  @Column('varchar', { length: 36 })
  sysPermissionId: string;

  @Column('varchar', { length: 36 })
  actionId: string;

  @ManyToOne(() => SysPermission, (sysPermission) => sysPermission.sysPermissionActions, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
  @JoinColumn({ name: 'sysPermissionId' })
  sysPermission: SysPermission;

  @ManyToOne(() => Action, (action) => action.sysPermissionActions, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
  @JoinColumn({ name: 'actionId' })
  action: Action;

  @OneToMany(() => GroupRolePermission, (groupRolePermission) => groupRolePermission.groupRole, { cascade: true })
  groupRolePermissions: GroupRolePermission[];
}
