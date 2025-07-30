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
exports.Voucher = void 0;
const typeorm_1 = require("typeorm");
const customer_voucher_entity_1 = require("./customer_voucher.entity");
const enums_1 = require("../common/enums");
const base_entity_1 = require("./base.entity");
let Voucher = class Voucher extends base_entity_1.BaseEntity {
};
exports.Voucher = Voucher;
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], Voucher.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text' }),
    __metadata("design:type", String)
], Voucher.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', unique: true }),
    __metadata("design:type", String)
], Voucher.prototype, "code", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'enum', enum: enums_1.VoucherPaymentMethodEnum, default: enums_1.VoucherPaymentMethodEnum.BANK }),
    __metadata("design:type", String)
], Voucher.prototype, "paymentMethod", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'double' }),
    __metadata("design:type", Number)
], Voucher.prototype, "discount", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'enum',
        enum: enums_1.VoucherTypeDiscountEnum,
        default: enums_1.VoucherTypeDiscountEnum.PERCENT,
    }),
    __metadata("design:type", String)
], Voucher.prototype, "typeDiscount", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'double', nullable: true }),
    __metadata("design:type", Number)
], Voucher.prototype, "discountToUp", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', nullable: true }),
    __metadata("design:type", Number)
], Voucher.prototype, "minimumOrder", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', default: 0 }),
    __metadata("design:type", Number)
], Voucher.prototype, "totalUse", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', nullable: true }),
    __metadata("design:type", Number)
], Voucher.prototype, "quantity", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', nullable: true }),
    __metadata("design:type", String)
], Voucher.prototype, "icon", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', nullable: true }),
    __metadata("design:type", Date)
], Voucher.prototype, "startTime", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', nullable: true }),
    __metadata("design:type", Date)
], Voucher.prototype, "endTime", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'enum', enum: enums_1.VoucherTypeEnum, default: enums_1.VoucherTypeEnum.SHOE_CLEANING }),
    __metadata("design:type", String)
], Voucher.prototype, "type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'boolean', default: false }),
    __metadata("design:type", Boolean)
], Voucher.prototype, "isGlobal", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => customer_voucher_entity_1.CustomerVoucher, (customerVoucher) => customerVoucher.voucher),
    __metadata("design:type", Array)
], Voucher.prototype, "customerVouchers", void 0);
exports.Voucher = Voucher = __decorate([
    (0, typeorm_1.Entity)('vouchers')
], Voucher);
