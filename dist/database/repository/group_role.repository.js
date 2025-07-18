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
exports.GroupRoleRepository = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const base_abstract_repository_1 = require("../../base/base.abstract.repository");
const group_role_entity_1 = require("../../entities/group_role.entity");
let GroupRoleRepository = class GroupRoleRepository extends base_abstract_repository_1.BaseRepositoryAbstract {
    constructor(groupRoleRepository) {
        super(groupRoleRepository);
        this.groupRoleRepository = groupRoleRepository;
    }
};
exports.GroupRoleRepository = GroupRoleRepository;
exports.GroupRoleRepository = GroupRoleRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(group_role_entity_1.GroupRole)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], GroupRoleRepository);
