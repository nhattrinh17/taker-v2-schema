"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SysPermissionRepository = void 0;
const base_abstract_repository_1 = require("../../base/base.abstract.repository");
class SysPermissionRepository extends base_abstract_repository_1.BaseRepositoryAbstract {
    constructor(sysPermissionRepository) {
        super(sysPermissionRepository);
    }
    async findByName(name) {
        return await this.repository.findOne({
            where: { name },
        });
    }
    async findByNames(names) {
        return await this.repository.find({
            where: names.map(name => ({ name })),
        });
    }
    async findWithActions(id) {
        return await this.repository.findOne({
            where: { id },
            relations: ['sysPermissionActions', 'sysPermissionActions.action'],
        });
    }
}
exports.SysPermissionRepository = SysPermissionRepository;
