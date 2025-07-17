"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SysPermissionActionRepository = void 0;
const base_abstract_repository_1 = require("../../base/base.abstract.repository");
class SysPermissionActionRepository extends base_abstract_repository_1.BaseRepositoryAbstract {
    constructor(sysPermissionActionRepository) {
        super(sysPermissionActionRepository);
    }
    async findByPermissionAndAction(sysPermissionId, actionId) {
        return await this.repository.findOne({
            where: { sysPermissionId, actionId },
        });
    }
    async findByPermissionId(sysPermissionId) {
        return await this.repository.find({
            where: { sysPermissionId },
            relations: ['action'],
        });
    }
    async findByActionId(actionId) {
        return await this.repository.find({
            where: { actionId },
            relations: ['sysPermission'],
        });
    }
    async findWithDetails(id) {
        return await this.repository.findOne({
            where: { id },
            relations: ['sysPermission', 'action'],
        });
    }
}
exports.SysPermissionActionRepository = SysPermissionActionRepository;
