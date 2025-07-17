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
exports.GroupRolePermission = void 0;
const typeorm_1 = require("typeorm");
const group_role_entity_1 = require("./group_role.entity");
const sys_permission_action_entity_1 = require("./sys_permission_action.entity");
const base_entity_1 = require("./base.entity");
let GroupRolePermission = class GroupRolePermission extends base_entity_1.BaseEntity {
};
exports.GroupRolePermission = GroupRolePermission;
__decorate([
    (0, typeorm_1.Column)('varchar', { length: 36 }),
    __metadata("design:type", String)
], GroupRolePermission.prototype, "groupRoleId", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { length: 36 }),
    __metadata("design:type", String)
], GroupRolePermission.prototype, "sysPermissionActionId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => group_role_entity_1.GroupRole, (groupRole) => groupRole.groupRolePermissions, { onDelete: 'CASCADE', onUpdate: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)({ name: 'groupRoleId' }),
    __metadata("design:type", group_role_entity_1.GroupRole)
], GroupRolePermission.prototype, "groupRole", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => sys_permission_action_entity_1.SysPermissionAction, (sysPermissionAction) => sysPermissionAction.groupRolePermissions, { onDelete: 'CASCADE', onUpdate: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)({ name: 'sysPermissionActionId' }),
    __metadata("design:type", sys_permission_action_entity_1.SysPermissionAction)
], GroupRolePermission.prototype, "sysPermissionAction", void 0);
exports.GroupRolePermission = GroupRolePermission = __decorate([
    (0, typeorm_1.Entity)('group_role_permissions')
], GroupRolePermission);
