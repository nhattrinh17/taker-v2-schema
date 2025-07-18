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
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupRole = void 0;
const typeorm_1 = require("typeorm");
const base_entity_1 = require("./base.entity");
const group_role_permission_entity_1 = require("./group_role_permission.entity");
const admin_entity_1 = require("./admin.entity");
let GroupRole = class GroupRole extends base_entity_1.BaseEntity {
};
exports.GroupRole = GroupRole;
__decorate([
    (0, typeorm_1.Index)({ unique: true }),
    (0, typeorm_1.Column)('varchar', { length: 100 }),
    __metadata("design:type", String)
], GroupRole.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { length: 255, nullable: true }),
    __metadata("design:type", String)
], GroupRole.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => group_role_permission_entity_1.GroupRolePermission, (groupRolePermission) => groupRolePermission.groupRole, { cascade: true }),
    __metadata("design:type", Array)
], GroupRole.prototype, "groupRolePermissions", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => admin_entity_1.Admin, (admin) => admin.groupRole, { cascade: true }),
    __metadata("design:type", Array)
], GroupRole.prototype, "admins", void 0);
exports.GroupRole = GroupRole = __decorate([
    (0, typeorm_1.Entity)('group_roles')
], GroupRole);
