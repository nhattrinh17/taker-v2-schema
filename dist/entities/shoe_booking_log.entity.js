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
exports.ShoeBookingLog = void 0;
const typeorm_1 = require("typeorm");
const base_entity_1 = require("./base.entity");
const enums_1 = require("../common/enums");
const shoe_booking_entity_1 = require("./shoe_booking.entity");
let ShoeBookingLog = class ShoeBookingLog extends base_entity_1.BaseEntity {
};
exports.ShoeBookingLog = ShoeBookingLog;
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", length: 36, nullable: true }),
    __metadata("design:type", String)
], ShoeBookingLog.prototype, "shoeBookingId", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "enum",
        enum: enums_1.ShoeBookingStatusEnum,
        nullable: true,
    }),
    __metadata("design:type", String)
], ShoeBookingLog.prototype, "fromStatus", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "enum",
        enum: enums_1.ShoeBookingStatusEnum,
        nullable: true,
    }),
    __metadata("design:type", String)
], ShoeBookingLog.prototype, "toStatus", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", length: 36, nullable: true }),
    __metadata("design:type", String)
], ShoeBookingLog.prototype, "actorId", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "enum",
        enum: enums_1.ActorTypeEnum,
        default: enums_1.ActorTypeEnum.SYSTEM,
    }),
    __metadata("design:type", String)
], ShoeBookingLog.prototype, "actorType", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "text", nullable: true }),
    __metadata("design:type", String)
], ShoeBookingLog.prototype, "details", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => shoe_booking_entity_1.ShoeBooking, (shoeBooking) => shoeBooking.shoeBookingLogs, {
        nullable: true,
    }),
    (0, typeorm_1.JoinColumn)({ name: "shoeBookingId" }),
    __metadata("design:type", shoe_booking_entity_1.ShoeBooking)
], ShoeBookingLog.prototype, "shoeBooking", void 0);
exports.ShoeBookingLog = ShoeBookingLog = __decorate([
    (0, typeorm_1.Entity)({ name: "shoe_booking_logs" })
], ShoeBookingLog);
