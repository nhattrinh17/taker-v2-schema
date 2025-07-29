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
exports.Wallet = void 0;
const typeorm_1 = require("typeorm");
const base_entity_1 = require("./base.entity");
const partner_entity_1 = require("./partner.entity");
const customer_entity_1 = require("./customer.entity");
const transaction_entity_1 = require("./transaction.entity");
const wallet_log_entity_1 = require("./wallet_log.entity");
let Wallet = class Wallet extends base_entity_1.BaseEntity {
};
exports.Wallet = Wallet;
__decorate([
    (0, typeorm_1.OneToOne)(() => customer_entity_1.Customer, (customer) => customer.wallet, { nullable: true }),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", customer_entity_1.Customer)
], Wallet.prototype, "customer", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, length: 36 }),
    __metadata("design:type", String)
], Wallet.prototype, "customerId", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => partner_entity_1.Partner, (partner) => partner.wallet, { nullable: true }),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", partner_entity_1.Partner)
], Wallet.prototype, "partner", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, length: 36 }),
    __metadata("design:type", String)
], Wallet.prototype, "partnerId", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 0, type: 'double' }),
    __metadata("design:type", Number)
], Wallet.prototype, "balance", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => transaction_entity_1.Transaction, (transaction) => transaction.wallet),
    __metadata("design:type", Array)
], Wallet.prototype, "transactions", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => wallet_log_entity_1.WalletLog, (wallet) => wallet.wallet, { nullable: true }),
    __metadata("design:type", Array)
], Wallet.prototype, "walletLogs", void 0);
exports.Wallet = Wallet = __decorate([
    (0, typeorm_1.Entity)({ name: 'wallets' })
], Wallet);
