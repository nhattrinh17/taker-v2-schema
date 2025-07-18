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
exports.SysPermissionAction = void 0;
const typeorm_1 = require("typeorm");
const sys_permission_entity_1 = require("./sys_permission.entity");
const action_entity_1 = require("./action.entity");
const base_entity_1 = require("./base.entity");
const group_role_permission_entity_1 = require("./group_role_permission.entity");
let SysPermissionAction = class SysPermissionAction extends base_entity_1.BaseEntity {
};
exports.SysPermissionAction = SysPermissionAction;
__decorate([
    (0, typeorm_1.Column)('varchar', { length: 36 }),
    __metadata("design:type", String)
], SysPermissionAction.prototype, "sysPermissionId", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { length: 36 }),
    __metadata("design:type", String)
], SysPermissionAction.prototype, "actionId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => sys_permission_entity_1.SysPermission, (sysPermission) => sysPermission.sysPermissionActions, { onDelete: 'CASCADE', onUpdate: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)({ name: 'sysPermissionId' }),
    __metadata("design:type", sys_permission_entity_1.SysPermission)
], SysPermissionAction.prototype, "sysPermission", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => action_entity_1.Action, (action) => action.sysPermissionActions, { onDelete: 'CASCADE', onUpdate: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)({ name: 'actionId' }),
    __metadata("design:type", action_entity_1.Action)
], SysPermissionAction.prototype, "action", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => group_role_permission_entity_1.GroupRolePermission, (groupRolePermission) => groupRolePermission.sysPermissionAction, { cascade: true }),
    __metadata("design:type", Array)
], SysPermissionAction.prototype, "groupRolePermissions", void 0);
exports.SysPermissionAction = SysPermissionAction = __decorate([
    (0, typeorm_1.Entity)('sys_permission_actions')
], SysPermissionAction);
//# sourceMappingURL=sys_permission_action.entity.js.map