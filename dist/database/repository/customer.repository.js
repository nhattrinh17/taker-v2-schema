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
exports.CustomerRepository = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const base_abstract_repository_1 = require("../../base/base.abstract.repository");
const customer_entity_1 = require("../../entities/customer.entity");
let CustomerRepository = class CustomerRepository extends base_abstract_repository_1.BaseRepositoryAbstract {
    constructor(customerRepository) {
        super(customerRepository);
        this.customerRepository = customerRepository;
    }
    async findAllCustomers(condition, pagination) {
        const { search, status, step } = condition;
        const { page, offset, limit, sort, typeSort } = pagination;
        const queryBuilder = this.customerRepository
            .createQueryBuilder("customer")
            .skip(offset)
            .take(limit);
        if (status) {
            queryBuilder.andWhere("customer.status = :status", { status });
        }
        if (step) {
            queryBuilder.andWhere("customer.step = :step", { step });
        }
        if (sort) {
            queryBuilder.orderBy(`customer.${sort || 'createdAt'}`, typeSort || "DESC");
        }
        if (search) {
            queryBuilder.andWhere("customer.fullName LIKE :search OR customer.email LIKE :search OR customer.phone LIKE :search", {
                search: `%${search}%`,
            });
        }
        const [data, total] = await queryBuilder.getManyAndCount();
        return {
            data,
            pagination: {
                ...pagination,
                total,
            },
        };
    }
    getIdAllCustomer(filter) {
        return this.customerRepository.find({
            select: ['id'],
            where: filter,
        });
    }
};
exports.CustomerRepository = CustomerRepository;
exports.CustomerRepository = CustomerRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(customer_entity_1.Customer)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], CustomerRepository);
