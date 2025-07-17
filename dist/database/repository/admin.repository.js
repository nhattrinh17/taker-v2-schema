"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminRepository = void 0;
const base_abstract_repository_1 = require("../../base/base.abstract.repository");
class AdminRepository extends base_abstract_repository_1.BaseRepositoryAbstract {
    constructor(adminRepository) {
        super(adminRepository);
    }
    async findByUserName(userName) {
        return await this.repository.findOne({
            where: { userName },
        });
    }
    async findByFcmToken(fcmToken) {
        return await this.repository.findOne({
            where: { fcmToken },
        });
    }
    async findWithGroupRole(id) {
        return await this.repository.findOne({
            where: { id },
            relations: ['groupRole'],
        });
    }
    async findByGroupRoleId(groupRoleId) {
        return await this.repository.find({
            where: { groupRoleId },
        });
    }
    async updateLastLogin(id, ipAddress) {
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
exports.AdminRepository = AdminRepository;
