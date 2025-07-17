import { Entity, PrimaryColumn, Column, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, Index, OneToMany } from 'typeorm';
import { BaseEntity } from './base.entity';
import { GroupRolePermission } from './group_role_permission.entity';
import { Admin } from './admin.entity';

@Entity('group_roles')
export class GroupRole extends BaseEntity {
  @Index({ unique: true })
  @Column('varchar', { length: 100 })
  name: string;

  @Column('varchar', { length: 255, nullable: true })
  description?: string;

  @OneToMany(() => GroupRolePermission, (groupRolePermission) => groupRolePermission.groupRole, { cascade: true })
  groupRolePermissions: GroupRolePermission[];

  @OneToMany(() => Admin, (admin) => admin.groupRole, { cascade: true })
  admins: Admin[];
}
