"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupRoleRepository = void 0;
const base_abstract_repository_1 = require("../../base/base.abstract.repository");
class GroupRoleRepository extends base_abstract_repository_1.BaseRepositoryAbstract {
    constructor(groupRoleRepository) {
        super(groupRoleRepository);
    }
    async findByName(name) {
        return await this.repository.findOne({
            where: { name },
        });
    }
    async findWithPermissions(id) {
        return await this.repository.findOne({
            where: { id },
            relations: ['groupRolePermissions', 'groupRolePermissions.sysPermissionAction', 'groupRolePermissions.sysPermissionAction.sysPermission', 'groupRolePermissions.sysPermissionAction.action'],
        });
    }
    async findWithAdmins(id) {
        return await this.repository.findOne({
            where: { id },
            relations: ['admins'],
        });
    }
    async findWithAllRelations(id) {
        return await this.repository.findOne({
            where: { id },
            relations: [
                'admins',
                'groupRolePermissions',
                'groupRolePermissions.sysPermissionAction',
                'groupRolePermissions.sysPermissionAction.sysPermission',
                'groupRolePermissions.sysPermissionAction.action'
            ],
        });
    }
}
exports.GroupRoleRepository = GroupRoleRepository;
