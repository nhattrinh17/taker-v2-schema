import { Repository } from 'typeorm';
import { BaseRepositoryAbstract } from '../../base/base.abstract.repository';
import { GroupRole } from '../../entities/group_role.entity';
import { GroupRoleRepositoryInterface } from '../interface/group_role.interface';
export declare class GroupRoleRepository extends BaseRepositoryAbstract<GroupRole> implements GroupRoleRepositoryInterface {
    private readonly groupRoleRepository;
    constructor(groupRoleRepository: Repository<GroupRole>);
}
