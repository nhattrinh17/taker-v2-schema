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
exports.SystemNotification = void 0;
const enums_1 = require("../common/enums");
const typeorm_1 = require("typeorm");
const base_entity_1 = require("./base.entity");
const index_1 = require("./index");
let SystemNotification = class SystemNotification extends base_entity_1.BaseEntity {
};
exports.SystemNotification = SystemNotification;
__decorate([
    (0, typeorm_1.Column)({ type: 'text' }),
    __metadata("design:type", String)
], SystemNotification.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'longtext' }),
    __metadata("design:type", String)
], SystemNotification.prototype, "content", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'boolean', default: false }),
    __metadata("design:type", Boolean)
], SystemNotification.prototype, "isSent", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', nullable: true }),
    __metadata("design:type", Date)
], SystemNotification.prototype, "sentTime", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    __metadata("design:type", Number)
], SystemNotification.prototype, "scheduleTime", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'enum', enum: enums_1.SystemNotificationRecipientEnum }),
    __metadata("design:type", String)
], SystemNotification.prototype, "receiver", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => index_1.Notification, (n) => n.systemNotification),
    __metadata("design:type", index_1.Notification)
], SystemNotification.prototype, "notifications", void 0);
exports.SystemNotification = SystemNotification = __decorate([
    (0, typeorm_1.Entity)({ name: 'system_notifications' })
], SystemNotification);
