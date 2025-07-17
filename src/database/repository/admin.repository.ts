import { Repository } from 'typeorm';
import { BaseRepositoryAbstract } from '../../base/base.abstract.repository';
import { Admin } from '../../entities/admin.entity';
import { AdminRepositoryInterface } from '../interface/admin.interface.repository';

export class AdminRepository extends BaseRepositoryAbstract<Admin> implements AdminRepositoryInterface {
  constructor(adminRepository: Repository<Admin>) {
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
}
