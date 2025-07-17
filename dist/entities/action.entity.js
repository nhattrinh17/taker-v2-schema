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
exports.Action = void 0;
const typeorm_1 = require("typeorm");
const base_entity_1 = require("./base.entity");
const sys_permission_action_entity_1 = require("./sys_permission_action.entity");
let Action = class Action extends base_entity_1.BaseEntity {
};
exports.Action = Action;
__decorate([
    (0, typeorm_1.Index)({ unique: true }),
    (0, typeorm_1.Column)('varchar', { length: 100 }),
    __metadata("design:type", String)
], Action.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { length: 255, nullable: true }),
    __metadata("design:type", String)
], Action.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => sys_permission_action_entity_1.SysPermissionAction, (sysPermissionAction) => sysPermissionAction.action, { onDelete: 'CASCADE', onUpdate: 'CASCADE' }),
    __metadata("design:type", Array)
], Action.prototype, "sysPermissionActions", void 0);
exports.Action = Action = __decorate([
    (0, typeorm_1.Entity)('actions')
], Action);
