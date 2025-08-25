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
exports.Notification = void 0;
const enums_1 = require("../common/enums");
const typeorm_1 = require("typeorm");
const base_entity_1 = require("./base.entity");
const customer_entity_1 = require("./customer.entity");
const index_1 = require("./index");
const partner_entity_1 = require("./partner.entity");
let Notification = class Notification extends base_entity_1.BaseEntity {
};
exports.Notification = Notification;
__decorate([
    (0, typeorm_1.ManyToOne)(() => partner_entity_1.Partner, { nullable: true, onDelete: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)({ name: 'partnerId' }),
    __metadata("design:type", partner_entity_1.Partner)
], Notification.prototype, "partner", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, type: 'varchar', length: 36 }),
    __metadata("design:type", String)
], Notification.prototype, "partnerId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => customer_entity_1.Customer, { nullable: true, onDelete: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)({ name: 'customerId' }),
    __metadata("design:type", customer_entity_1.Customer)
], Notification.prototype, "customer", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, type: 'varchar', length: 36 }),
    __metadata("design:type", String)
], Notification.prototype, "customerId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => index_1.Admin, { nullable: true, onDelete: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)({ name: 'adminId' }),
    __metadata("design:type", index_1.Admin)
], Notification.prototype, "admin", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, type: 'varchar', length: 36 }),
    __metadata("design:type", String)
], Notification.prototype, "adminId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => index_1.SystemNotification, { nullable: true, onDelete: 'SET NULL' }),
    (0, typeorm_1.JoinColumn)({ name: 'systemNotificationId' }),
    __metadata("design:type", index_1.SystemNotification)
], Notification.prototype, "systemNotification", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Notification.prototype, "systemNotificationId", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Notification.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'longtext', nullable: true }),
    __metadata("design:type", String)
], Notification.prototype, "content", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'longtext', nullable: true }),
    __metadata("design:type", String)
], Notification.prototype, "data", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'boolean', default: false }),
    __metadata("design:type", Boolean)
], Notification.prototype, "isRead", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'enum',
        enum: enums_1.NotificationTypeEnum,
        default: enums_1.NotificationTypeEnum.USER,
    }),
    __metadata("design:type", String)
], Notification.prototype, "type", void 0);
exports.Notification = Notification = __decorate([
    (0, typeorm_1.Entity)({ name: 'notifications' })
], Notification);
