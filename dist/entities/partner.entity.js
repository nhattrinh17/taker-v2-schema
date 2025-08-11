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
exports.Partner = void 0;
const typeorm_1 = require("typeorm");
const base_entity_1 = require("./base.entity");
const enums_1 = require("../common/enums");
const app_constant_1 = require("../common/constants/app.constant");
const address_entity_1 = require("./address.entity");
const wallet_entity_1 = require("./wallet.entity");
const shoe_booking_entity_1 = require("./shoe_booking.entity");
const cancel_order_entity_1 = require("./cancel_order.entity");
let Partner = class Partner extends base_entity_1.BaseEntity {
};
exports.Partner = Partner;
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Partner.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ unique: true }),
    __metadata("design:type", String)
], Partner.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)({ unique: true, nullable: true }),
    __metadata("design:type", String)
], Partner.prototype, "phone", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Partner.prototype, "fcmToken", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Partner.prototype, "password", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: false }),
    __metadata("design:type", Boolean)
], Partner.prototype, "isLogin", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: false }),
    __metadata("design:type", Boolean)
], Partner.prototype, "isVerified", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Partner.prototype, "bankName", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 255, default: JSON.stringify(app_constant_1.BASE_OPERATING_HOURS) }),
    __metadata("design:type", String)
], Partner.prototype, "operatingHours", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Partner.prototype, "bankAccountNumber", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Partner.prototype, "bankAccountName", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Partner.prototype, "avatar", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "enum",
        enum: enums_1.UserStatusEnum,
        default: enums_1.UserStatusEnum.PENDING,
    }),
    __metadata("design:type", String)
], Partner.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "enum",
        enum: enums_1.StepEnum,
        default: enums_1.StepEnum.REGISTER_INFO,
    }),
    __metadata("design:type", String)
], Partner.prototype, "step", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "int" }),
    __metadata("design:type", Number)
], Partner.prototype, "activeSince", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 255, nullable: true }),
    __metadata("design:type", String)
], Partner.prototype, "appleId", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 255, nullable: true }),
    __metadata("design:type", String)
], Partner.prototype, "appleName", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 255, nullable: true }),
    __metadata("design:type", String)
], Partner.prototype, "googleId", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 255, nullable: true }),
    __metadata("design:type", String)
], Partner.prototype, "googleName", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 512, nullable: true }),
    __metadata("design:type", String)
], Partner.prototype, "refreshToken", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 255, nullable: true }),
    __metadata("design:type", String)
], Partner.prototype, "facebookId", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 255, nullable: true }),
    __metadata("design:type", String)
], Partner.prototype, "facebookName", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Partner.prototype, "referralCode", void 0);
__decorate([
    (0, typeorm_1.Column)({ enum: enums_1.PartnerTypeEnum, nullable: true }),
    __metadata("design:type", String)
], Partner.prototype, "type", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => address_entity_1.Address, (address) => address.partner),
    __metadata("design:type", Array)
], Partner.prototype, "addresses", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => wallet_entity_1.Wallet, (wallet) => wallet.partner, { nullable: true }),
    __metadata("design:type", wallet_entity_1.Wallet)
], Partner.prototype, "wallet", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => shoe_booking_entity_1.ShoeBooking, (shoeBooking) => shoeBooking.partner),
    __metadata("design:type", Array)
], Partner.prototype, "shoeBookings", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => cancel_order_entity_1.CancelOrder, (cancelOrder) => cancelOrder.partner),
    __metadata("design:type", Array)
], Partner.prototype, "cancelOrders", void 0);
exports.Partner = Partner = __decorate([
    (0, typeorm_1.Entity)({ name: "partners" })
], Partner);
