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
exports.ShoeBooking = void 0;
const typeorm_1 = require("typeorm");
const base_entity_1 = require("./base.entity");
const enums_1 = require("../common/enums");
const shoe_service_entity_1 = require("./shoe_service.entity");
const customer_entity_1 = require("./customer.entity");
const partner_entity_1 = require("./partner.entity");
const transaction_entity_1 = require("./transaction.entity");
const customer_voucher_entity_1 = require("./customer_voucher.entity");
let ShoeBooking = class ShoeBooking extends base_entity_1.BaseEntity {
};
exports.ShoeBooking = ShoeBooking;
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", length: 36, nullable: true }),
    __metadata("design:type", String)
], ShoeBooking.prototype, "shoeServiceId", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", length: 36, nullable: true }),
    __metadata("design:type", String)
], ShoeBooking.prototype, "customerId", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", length: 36, nullable: true }),
    __metadata("design:type", String)
], ShoeBooking.prototype, "partnerId", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", length: 36, nullable: true }),
    __metadata("design:type", String)
], ShoeBooking.prototype, "transactionId", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", length: 36, nullable: true }),
    __metadata("design:type", String)
], ShoeBooking.prototype, "customerVoucherId", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "text", nullable: true }),
    __metadata("design:type", String)
], ShoeBooking.prototype, "shoeServiceDes", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "datetime" }),
    __metadata("design:type", Date)
], ShoeBooking.prototype, "bookingDate", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "enum",
        enum: enums_1.ShoeBookingStatusEnum,
        default: enums_1.ShoeBookingStatusEnum.PENDING,
    }),
    __metadata("design:type", String)
], ShoeBooking.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", length: 255 }),
    __metadata("design:type", String)
], ShoeBooking.prototype, "pickupAddress", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", length: 255 }),
    __metadata("design:type", String)
], ShoeBooking.prototype, "deliveryAddress", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", length: 255 }),
    __metadata("design:type", String)
], ShoeBooking.prototype, "returnAddress", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", length: 255, nullable: true }),
    __metadata("design:type", String)
], ShoeBooking.prototype, "pickupLocation", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", length: 255, nullable: true }),
    __metadata("design:type", String)
], ShoeBooking.prototype, "deliveryLocation", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", length: 255, nullable: true }),
    __metadata("design:type", String)
], ShoeBooking.prototype, "returnLocation", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "int", nullable: true }),
    __metadata("design:type", Number)
], ShoeBooking.prototype, "totalPrice", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "int", nullable: true }),
    __metadata("design:type", Number)
], ShoeBooking.prototype, "finalPrice", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "int", default: 0 }),
    __metadata("design:type", Number)
], ShoeBooking.prototype, "partnerRevenue", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "text", nullable: true }),
    __metadata("design:type", String)
], ShoeBooking.prototype, "note", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "text", nullable: true }),
    __metadata("design:type", String)
], ShoeBooking.prototype, "imageUrls", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", length: 255, unique: true }),
    __metadata("design:type", String)
], ShoeBooking.prototype, "orderId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => shoe_service_entity_1.ShoeService, (shoeService) => shoeService.shoeBookings, { nullable: true }),
    (0, typeorm_1.JoinColumn)({ name: "shoeServiceId" }),
    __metadata("design:type", shoe_service_entity_1.ShoeService)
], ShoeBooking.prototype, "shoeService", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => customer_entity_1.Customer, (customer) => customer.shoeBookings, { nullable: true }),
    (0, typeorm_1.JoinColumn)({ name: "customerId" }),
    __metadata("design:type", customer_entity_1.Customer)
], ShoeBooking.prototype, "customer", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => partner_entity_1.Partner, (partner) => partner.shoeBookings, { nullable: true }),
    (0, typeorm_1.JoinColumn)({ name: "partnerId" }),
    __metadata("design:type", partner_entity_1.Partner)
], ShoeBooking.prototype, "partner", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => transaction_entity_1.Transaction, (transaction) => transaction.shoeBooking, { nullable: true }),
    (0, typeorm_1.JoinColumn)({ name: "transactionId" }),
    __metadata("design:type", transaction_entity_1.Transaction)
], ShoeBooking.prototype, "transaction", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => customer_voucher_entity_1.CustomerVoucher, (customerVoucher) => customerVoucher.shoeBooking, { nullable: true }),
    (0, typeorm_1.JoinColumn)({ name: "customerVoucherId" }),
    __metadata("design:type", customer_voucher_entity_1.CustomerVoucher)
], ShoeBooking.prototype, "customerVoucher", void 0);
exports.ShoeBooking = ShoeBooking = __decorate([
    (0, typeorm_1.Entity)({ name: "shoe_bookings" })
], ShoeBooking);
