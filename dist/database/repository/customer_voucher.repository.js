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
exports.CustomerVoucherAdminRepository = void 0;
const index_1 = require("../../entities/index");
const common_1 = require("@nestjs/common");
const base_1 = require("../../base");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
let CustomerVoucherAdminRepository = class CustomerVoucherAdminRepository extends base_1.BaseRepositoryAbstract {
    constructor(customerVoucherRepository) {
        super(customerVoucherRepository);
        this.customerVoucherRepository = customerVoucherRepository;
    }
    insertManyVoucherForCustomer(dto) {
        return this.customerVoucherRepository.insert(dto);
    }
    revokeAllVoucherById(voucherId) {
        return this.customerVoucherRepository.delete({
            voucherId,
            timeUse: (0, typeorm_2.IsNull)(),
        });
    }
    async findAllAndJoin(condition, pagination) {
        const { page, limit, offset } = pagination;
        const [result, total] = await this.customerVoucherRepository
            .createQueryBuilder(index_1.CustomerVoucher.name)
            .leftJoinAndSelect(`${index_1.CustomerVoucher.name}.customer`, "customer")
            .where(condition)
            .select([index_1.CustomerVoucher.name, "customer.fullName", "customer.phone"])
            .skip(offset)
            .take(limit)
            .getManyAndCount();
        return {
            data: result,
            pagination: {
                ...pagination,
                total: total,
            },
        };
    }
    async getVouchers(condition, pagination) {
        const { customerId, search, type } = condition;
        const { page, limit, offset, sort, typeSort } = pagination;
        const query = this.customerVoucherRepository
            .createQueryBuilder(index_1.CustomerVoucher.name)
            .leftJoinAndSelect(`${index_1.CustomerVoucher.name}.voucher`, "voucher")
            .where(`${index_1.CustomerVoucher.name}.customerId = :customerId`, { customerId })
            .andWhere(`${index_1.CustomerVoucher.name}.timeUse IS NULL`)
            .andWhere("voucher.totalUse < voucher.quantity")
            .andWhere("voucher.endTime > NOW()");
        if (search) {
            query.andWhere(`voucher.name LIKE :search`, { search: `%${search}%` });
        }
        if (type) {
            query.andWhere(`voucher.type = :type`, { type });
        }
        if (sort) {
            query.orderBy(`partner.${sort || "createdAt"}`, typeSort || "DESC");
        }
        const [result, total] = await query
            .select([index_1.CustomerVoucher.name, "voucher"])
            .skip(offset)
            .take(limit)
            .getManyAndCount();
        return {
            data: result,
            pagination: {
                ...pagination,
                total: total,
            },
        };
    }
};
exports.CustomerVoucherAdminRepository = CustomerVoucherAdminRepository;
exports.CustomerVoucherAdminRepository = CustomerVoucherAdminRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(index_1.CustomerVoucher)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], CustomerVoucherAdminRepository);
