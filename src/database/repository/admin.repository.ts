import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BaseRepositoryAbstract } from '../../base/base.abstract.repository';
import { Admin } from '../../entities/admin.entity';
import { AdminRepositoryInterface } from '../interface/admin.interface.repository';

@Injectable()
export class AdminRepository extends BaseRepositoryAbstract<Admin> implements AdminRepositoryInterface {
  constructor(@InjectRepository(Admin) private readonly adminRepository: Repository<Admin>) {
    super(adminRepository);
  }

  async findByUserName(userName: string): Promise<Admin | null> {
    return await this.repository.findOne({
      where: { userName },
    });
  }

  async findByFcmToken(fcmToken: string): Promise<Admin | null> {
    return await this.repository.findOne({
      where: { fcmToken },
    });
  }

  async findWithGroupRole(id: string): Promise<Admin | null> {
    return await this.repository.findOne({
      where: { id },
      relations: ['groupRole'],
    });
  }

  async findByGroupRoleId(groupRoleId: string): Promise<Admin[]> {
    return await this.repository.find({
      where: { groupRoleId },
    });
  }

  async updateLastLogin(id: string, ipAddress?: string): Promise<Admin | null> {
    const admin = await this.findOneById(id);
    if (!admin) {
      return null;
    }

    await this.repository.update(id, {
      lastLoginDate: new Date(),
      ipAddress: ipAddress || admin.ipAddress,
    });

    return await this.findOneById(id);
  }

  async getRolesByUserId(userId: string): Promise<any> {
    const queryBuilder = this.adminRepository
      .createQueryBuilder('admin')
      .leftJoinAndSelect('admin.groupRole', 'groupRole')
      .leftJoinAndSelect('groupRole.groupRolePermissions', 'groupRolePermissions')
      .leftJoinAndSelect('groupRolePermissions.sysPermissionAction', 'sysPermissionAction')
      .leftJoinAndSelect('sysPermissionAction.sysPermission', 'sysPermission')
      .leftJoinAndSelect('sysPermissionAction.action', 'action')
      .select([
        'admin',
        'groupRole.name',
        'groupRole.description',
        'groupRolePermissions.groupRoleId',
        'groupRolePermissions.sysPermissionActionId',
        'sysPermissionAction.sysPermissionId',
        'sysPermissionAction.actionId',
        'sysPermission.name',
        'sysPermission.description',
        'action.name',
        'action.description',
      ])
      .where('admin.id = :userId', { userId });
    const admin = await queryBuilder.getOne();
    return admin;
  }
}
