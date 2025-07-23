"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SysPermissionActionRepository = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const base_abstract_repository_1 = require("../../base/base.abstract.repository");
const sys_permission_action_entity_1 = require("../../entities/sys_permission_action.entity");
let SysPermissionActionRepository = class SysPermissionActionRepository extends base_abstract_repository_1.BaseRepositoryAbstract {
    constructor(sysPermissionActionRepository) {
        super(sysPermissionActionRepository);
        this.sysPermissionActionRepository = sysPermissionActionRepository;
    }
    async findAllCustom(dto, pagination) {
        const queryBuilder = this.sysPermissionActionRepository
            .createQueryBuilder('sysPermissionAction')
            .leftJoinAndSelect('sysPermissionAction.sysPermission', 'sysPermission')
            .leftJoinAndSelect('sysPermissionAction.action', 'action')
            .orderBy('sysPermissionAction.createdAt', 'DESC');
        if (dto.search) {
            const search = dto.search;
            queryBuilder
                .where('sysPermission.name LIKE :search', { search: `%${search}%` })
                .orWhere('action.name LIKE :search', { search: `%${search}%` });
        }
        if (dto.sysPermissionId) {
            queryBuilder.andWhere('sysPermissionAction.sysPermissionId = :sysPermissionId', { sysPermissionId: dto.sysPermissionId });
        }
        if (dto.actionId) {
            queryBuilder.andWhere('sysPermissionAction.actionId = :actionId', { actionId: dto.actionId });
        }
        if (pagination) {
            queryBuilder.skip(pagination.offset).take(pagination.limit);
        }
        const [data, total] = await queryBuilder.getManyAndCount();
        return {
            data,
            pagination: {
                total,
                ...pagination,
            },
        };
    }
};
exports.SysPermissionActionRepository = SysPermissionActionRepository;
exports.SysPermissionActionRepository = SysPermissionActionRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(sys_permission_action_entity_1.SysPermissionAction)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], SysPermissionActionRepository);
