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
exports.CustomerVoucher = void 0;
const typeorm_1 = require("typeorm");
const customer_entity_1 = require("./customer.entity");
const voucher_entity_1 = require("./voucher.entity");
const base_entity_1 = require("./base.entity");
let CustomerVoucher = class CustomerVoucher extends base_entity_1.BaseEntity {
};
exports.CustomerVoucher = CustomerVoucher;
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 36, nullable: true }),
    __metadata("design:type", String)
], CustomerVoucher.prototype, "customerId", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 36 }),
    __metadata("design:type", String)
], CustomerVoucher.prototype, "voucherId", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'timestamp', nullable: true }),
    __metadata("design:type", Date)
], CustomerVoucher.prototype, "timeUse", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => customer_entity_1.Customer, (customer) => customer.customerVouchers, {
        onDelete: 'SET NULL',
    }),
    (0, typeorm_1.JoinColumn)({ name: 'customerId' }),
    __metadata("design:type", customer_entity_1.Customer)
], CustomerVoucher.prototype, "customer", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => voucher_entity_1.Voucher, (voucher) => voucher.customerVouchers, {
        onDelete: 'CASCADE',
    }),
    (0, typeorm_1.JoinColumn)({ name: 'voucherId' }),
    __metadata("design:type", voucher_entity_1.Voucher)
], CustomerVoucher.prototype, "voucher", void 0);
exports.CustomerVoucher = CustomerVoucher = __decorate([
    (0, typeorm_1.Entity)('customer_vouchers')
], CustomerVoucher);
