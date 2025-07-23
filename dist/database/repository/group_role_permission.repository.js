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
exports.GroupRolePermissionRepository = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const base_abstract_repository_1 = require("../../base/base.abstract.repository");
const group_role_permission_entity_1 = require("../../entities/group_role_permission.entity");
let GroupRolePermissionRepository = class GroupRolePermissionRepository extends base_abstract_repository_1.BaseRepositoryAbstract {
    constructor(groupRolePermissionRepository) {
        super(groupRolePermissionRepository);
        this.groupRolePermissionRepository = groupRolePermissionRepository;
    }
    async findAllCustom({ search, groupRoleId, sysPermissionActionId }, pagination) {
        const queryBuilder = this.groupRolePermissionRepository
            .createQueryBuilder('groupRolePermission')
            .leftJoinAndSelect('groupRolePermission.groupRole', 'groupRole')
            .leftJoinAndSelect('groupRolePermission.sysPermissionAction', 'sysPermissionAction')
            .leftJoinAndSelect('sysPermissionAction.sysPermission', 'sysPermission')
            .leftJoinAndSelect('sysPermissionAction.action', 'action')
            .select([
            'groupRolePermission',
            'groupRole.id',
            'groupRole.name',
            'groupRole.description',
            'sysPermissionAction.id',
            'sysPermissionAction.sysPermissionId',
            'sysPermissionAction.actionId',
            'sysPermission.name',
            'sysPermission.description',
            'action.name',
            'action.description',
        ]);
        if (search) {
            queryBuilder.where('groupRole.name LIKE :search OR sysPermission.name LIKE :search OR action.name LIKE :search', {
                search: `%${search}%`,
            });
        }
        if (groupRoleId) {
            queryBuilder.andWhere('groupRolePermission.groupRoleId = :groupRoleId', { groupRoleId });
        }
        if (sysPermissionActionId) {
            queryBuilder.andWhere('groupRolePermission.sysPermissionActionId = :sysPermissionActionId', { sysPermissionActionId });
        }
        queryBuilder.take(pagination.limit).skip(pagination.offset);
        if (pagination.sort) {
            queryBuilder.orderBy(pagination.sort, pagination.typeSort || 'ASC');
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
exports.GroupRolePermissionRepository = GroupRolePermissionRepository;
exports.GroupRolePermissionRepository = GroupRolePermissionRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(group_role_permission_entity_1.GroupRolePermission)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], GroupRolePermissionRepository);
