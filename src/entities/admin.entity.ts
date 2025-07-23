import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from 'typeorm';
import { BaseEntity } from './base.entity';
import { GroupRole } from './group_role.entity';

@Entity({ name: 'admins' })
export class Admin extends BaseEntity {
  @Column({ unique: true })
  userName: string;

  @Column()
  password: string;

  @Column()
  fcmToken: string;

  @Column({ length: 512, nullable: true })
  refreshToken: string;

  @Column({ nullable: true })
  lastLoginDate: Date;

  @Column({ nullable: true })
  ipAddress: string;

  @Column({ nullable: true })
  groupRoleId: string;

  @ManyToOne(() => GroupRole, (groupRole) => groupRole.admins, {
    onDelete: 'SET NULL',
    onUpdate: 'CASCADE',
  })
  @JoinColumn({ name: 'groupRoleId' })
  groupRole: GroupRole;
}
