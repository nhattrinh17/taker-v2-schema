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
exports.Rating = void 0;
const typeorm_1 = require("typeorm");
const base_entity_1 = require("./base.entity");
const customer_entity_1 = require("./customer.entity");
const shoe_booking_entity_1 = require("./shoe_booking.entity");
let Rating = class Rating extends base_entity_1.BaseEntity {
};
exports.Rating = Rating;
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", length: 36, nullable: true }),
    __metadata("design:type", String)
], Rating.prototype, "customerId", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", length: 36, nullable: true }),
    __metadata("design:type", String)
], Rating.prototype, "shoeBookingId", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "int", nullable: false }),
    __metadata("design:type", Number)
], Rating.prototype, "rating", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "text", nullable: true }),
    __metadata("design:type", String)
], Rating.prototype, "comment", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => customer_entity_1.Customer, (customer) => customer.ratings, {
        onDelete: "SET NULL",
    }),
    (0, typeorm_1.JoinColumn)({ name: "customerId" }),
    __metadata("design:type", customer_entity_1.Customer)
], Rating.prototype, "customer", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => shoe_booking_entity_1.ShoeBooking, (shoeBooking) => shoeBooking.ratings, {
        onDelete: "SET NULL",
    }),
    (0, typeorm_1.JoinColumn)({ name: "shoeBookingId" }),
    __metadata("design:type", shoe_booking_entity_1.ShoeBooking)
], Rating.prototype, "shoeBooking", void 0);
exports.Rating = Rating = __decorate([
    (0, typeorm_1.Entity)({ name: "ratings" })
], Rating);
