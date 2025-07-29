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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WalletRepository = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const base_abstract_repository_1 = require("../../base/base.abstract.repository");
const wallet_entity_1 = require("../../entities/wallet.entity");
let WalletRepository = class WalletRepository extends base_abstract_repository_1.BaseRepositoryAbstract {
    constructor(walletRepository) {
        super(walletRepository);
        this.walletRepository = walletRepository;
    }
    async customFind(condition, pagination) {
        const queryBuilder = this.walletRepository.createQueryBuilder("wallet");
        queryBuilder
            .leftJoinAndSelect("wallet.customer", "customer")
            .leftJoinAndSelect("wallet.partner", "partner")
            .select([
            "wallet",
            "partner.name",
            "partner.avatar",
            "partner.phone",
            "customer.fullName",
            "customer.avatar",
            "customer.phone",
        ])
            .orderBy("wallet.createdAt", "DESC");
        if (condition.search) {
            queryBuilder.andWhere("(customer.fullName LIKE :search OR customer.phone LIKE :search OR partner.name LIKE :search OR partner.phone LIKE :search)", { search: `%${condition.search}%` });
        }
        if (condition.balance) {
            if (condition.balanceCondition === "EQUAL") {
                queryBuilder.andWhere("wallet.balance = :balance", {
                    balance: condition.balance,
                });
            }
            if (condition.balanceCondition === "GREATER_THAN") {
                queryBuilder.andWhere("wallet.balance > :balance", {
                    balance: condition.balance,
                });
            }
            if (condition.balanceCondition === "LESS_THAN") {
                queryBuilder.andWhere("wallet.balance < :balance", {
                    balance: condition.balance,
                });
            }
        }
        if (condition.partnerId === null) {
            queryBuilder.andWhere("wallet.partnerId IS NULL");
        }
        if (condition.customerId === null) {
            queryBuilder.andWhere("wallet.customerId IS NULL");
        }
        queryBuilder.take(pagination.limit).skip(pagination.offset);
        const [result, total] = await queryBuilder.getManyAndCount();
        return {
            pagination: {
                ...pagination,
                total,
            },
            data: result,
        };
    }
};
exports.WalletRepository = WalletRepository;
exports.WalletRepository = WalletRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(wallet_entity_1.Wallet)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], WalletRepository);
