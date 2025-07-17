import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BaseRepositoryAbstract } from '../../base/base.abstract.repository';
import { GroupRole } from '../../entities/group_role.entity';
import { GroupRoleRepositoryInterface } from '../interface/group_role.interface.repository';

@Injectable()
export class GroupRoleRepository extends BaseRepositoryAbstract<GroupRole> implements GroupRoleRepositoryInterface {
  constructor(@InjectRepository(GroupRole) private readonly groupRoleRepository: Repository<GroupRole>) {
    super(groupRoleRepository);
  }
}
