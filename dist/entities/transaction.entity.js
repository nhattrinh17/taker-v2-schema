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
exports.Transaction = void 0;
const typeorm_1 = require("typeorm");
const enums_1 = require("../common/enums");
const transaction_log_entity_1 = require("./transaction_log.entity");
const base_entity_1 = require("./base.entity");
const wallet_entity_1 = require("./wallet.entity");
const shoe_booking_entity_1 = require("./shoe_booking.entity");
let Transaction = class Transaction extends base_entity_1.BaseEntity {
    async generateOrderId() {
        this.transactionDate = new Date();
    }
};
exports.Transaction = Transaction;
__decorate([
    (0, typeorm_1.ManyToOne)(() => wallet_entity_1.Wallet, (Wallet) => Wallet.transactions),
    (0, typeorm_1.JoinColumn)({ name: 'walletId' }),
    __metadata("design:type", wallet_entity_1.Wallet)
], Transaction.prototype, "wallet", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', nullable: true }),
    __metadata("design:type", String)
], Transaction.prototype, "walletId", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', nullable: true, unique: true }),
    __metadata("design:type", String)
], Transaction.prototype, "orderId", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'double', default: 0 }),
    __metadata("design:type", Number)
], Transaction.prototype, "amount", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', nullable: true }),
    __metadata("design:type", String)
], Transaction.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', precision: 6, nullable: true }),
    __metadata("design:type", Date)
], Transaction.prototype, "transactionDate", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'enum',
        enum: enums_1.TransactionType,
        default: enums_1.TransactionType.DEPOSIT,
    }),
    __metadata("design:type", String)
], Transaction.prototype, "transactionType", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'enum',
        enum: enums_1.TransactionSource,
        default: enums_1.TransactionSource.WALLET,
    }),
    __metadata("design:type", String)
], Transaction.prototype, "transactionSource", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'enum',
        enum: enums_1.TransactionStatus,
        default: enums_1.TransactionStatus.PENDING,
    }),
    __metadata("design:type", String)
], Transaction.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, type: 'longtext' }),
    __metadata("design:type", String)
], Transaction.prototype, "vnPayData", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Transaction.prototype, "ipRequest", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Transaction.prototype, "ipIpn", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'boolean', default: false }),
    __metadata("design:type", Boolean)
], Transaction.prototype, "isManual", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Transaction.prototype, "evidence", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => transaction_log_entity_1.TransactionLog, (transactionLog) => transactionLog.transaction),
    __metadata("design:type", Array)
], Transaction.prototype, "logs", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => shoe_booking_entity_1.ShoeBooking, (shoeBooking) => shoeBooking.transaction, { nullable: true }),
    __metadata("design:type", shoe_booking_entity_1.ShoeBooking)
], Transaction.prototype, "shoeBooking", void 0);
__decorate([
    (0, typeorm_1.BeforeInsert)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], Transaction.prototype, "generateOrderId", null);
exports.Transaction = Transaction = __decorate([
    (0, typeorm_1.Entity)('transactions')
], Transaction);
