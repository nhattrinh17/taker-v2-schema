import { Repository } from 'typeorm';
import { BaseRepositoryAbstract } from '../../base/base.abstract.repository';
import { GroupRole } from '../../entities/group_role.entity';
import { GroupRoleRepositoryInterface } from '../interface/group_role.interface.repository';
export declare class GroupRoleRepository extends BaseRepositoryAbstract<GroupRole> implements GroupRoleRepositoryInterface {
    constructor(groupRoleRepository: Repository<GroupRole>);
    findByName(name: string): Promise<GroupRole | null>;
    findWithPermissions(id: string): Promise<GroupRole | null>;
    findWithAdmins(id: string): Promise<GroupRole | null>;
    findWithAllRelations(id: string): Promise<GroupRole | null>;
}
