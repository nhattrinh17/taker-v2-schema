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
exports.CancelOrder = void 0;
const typeorm_1 = require("typeorm");
const base_entity_1 = require("./base.entity");
const shoe_booking_entity_1 = require("./shoe_booking.entity");
const partner_entity_1 = require("./partner.entity");
const customer_entity_1 = require("./customer.entity");
const driver_entity_1 = require("./driver.entity");
let CancelOrder = class CancelOrder extends base_entity_1.BaseEntity {
};
exports.CancelOrder = CancelOrder;
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", length: 36, nullable: true }),
    __metadata("design:type", String)
], CancelOrder.prototype, "shoeBookingId", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", length: 36, nullable: true }),
    __metadata("design:type", String)
], CancelOrder.prototype, "partnerId", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", length: 36, nullable: true }),
    __metadata("design:type", String)
], CancelOrder.prototype, "customerId", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", length: 36, nullable: true }),
    __metadata("design:type", String)
], CancelOrder.prototype, "driverId", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "text", nullable: true }),
    __metadata("design:type", String)
], CancelOrder.prototype, "reason", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => shoe_booking_entity_1.ShoeBooking, (shoeBooking) => shoeBooking.cancelOrders, {
        onDelete: "CASCADE",
    }),
    (0, typeorm_1.JoinColumn)({ name: "shoeBookingId" }),
    __metadata("design:type", shoe_booking_entity_1.ShoeBooking)
], CancelOrder.prototype, "shoeBooking", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => partner_entity_1.Partner, (partner) => partner.cancelOrders, {
        onDelete: "CASCADE",
    }),
    (0, typeorm_1.JoinColumn)({ name: "partnerId" }),
    __metadata("design:type", partner_entity_1.Partner)
], CancelOrder.prototype, "partner", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => customer_entity_1.Customer, (customer) => customer.cancelOrders, {
        onDelete: "CASCADE",
    }),
    (0, typeorm_1.JoinColumn)({ name: "customerId" }),
    __metadata("design:type", customer_entity_1.Customer)
], CancelOrder.prototype, "customer", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => driver_entity_1.Driver, (driver) => driver.cancelOrders, {
        onDelete: "SET NULL",
    }),
    (0, typeorm_1.JoinColumn)({ name: "driverId" }),
    __metadata("design:type", driver_entity_1.Driver)
], CancelOrder.prototype, "driver", void 0);
exports.CancelOrder = CancelOrder = __decorate([
    (0, typeorm_1.Entity)({ name: "cancel_orders" })
], CancelOrder);
