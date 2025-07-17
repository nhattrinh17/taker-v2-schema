"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupRolePermissionRepository = void 0;
const base_abstract_repository_1 = require("../../base/base.abstract.repository");
class GroupRolePermissionRepository extends base_abstract_repository_1.BaseRepositoryAbstract {
    constructor(groupRolePermissionRepository) {
        super(groupRolePermissionRepository);
    }
    async findByGroupRoleAndPermission(groupRoleId, sysPermissionActionId) {
        return await this.repository.findOne({
            where: { groupRoleId, sysPermissionActionId },
        });
    }
    async findByGroupRoleId(groupRoleId) {
        return await this.repository.find({
            where: { groupRoleId },
            relations: ['sysPermissionAction', 'sysPermissionAction.sysPermission', 'sysPermissionAction.action'],
        });
    }
    async findByPermissionActionId(sysPermissionActionId) {
        return await this.repository.find({
            where: { sysPermissionActionId },
            relations: ['groupRole'],
        });
    }
    async findWithDetails(id) {
        return await this.repository.findOne({
            where: { id },
            relations: ['groupRole', 'sysPermissionAction', 'sysPermissionAction.sysPermission', 'sysPermissionAction.action'],
        });
    }
}
exports.GroupRolePermissionRepository = GroupRolePermissionRepository;
