import { Entity, PrimaryColumn, Column, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, Index, OneToMany } from 'typeorm';
import { BaseEntity } from './base.entity';
import { SysPermissionAction } from './sys_permission_action.entity';

@Entity('actions')
export class Action extends BaseEntity {
  @Index({ unique: true })
  @Column('varchar', { length: 100 })
  name: string;

  @Column('varchar', { length: 255, nullable: true })
  description?: string;

  @OneToMany(() => SysPermissionAction, (sysPermissionAction) => sysPermissionAction.action, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
  sysPermissionActions: SysPermissionAction[];
}
