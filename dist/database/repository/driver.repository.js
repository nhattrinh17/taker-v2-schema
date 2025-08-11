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
exports.DriverRepository = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const base_abstract_repository_1 = require("../../base/base.abstract.repository");
const driver_entity_1 = require("../../entities/driver.entity");
let DriverRepository = class DriverRepository extends base_abstract_repository_1.BaseRepositoryAbstract {
    constructor(driverRepository) {
        super(driverRepository);
        this.driverRepository = driverRepository;
    }
    async findAllCustom(query, pagination) {
        const queryBuilder = this.driverRepository.createQueryBuilder("driver");
        if (query.search) {
            queryBuilder.where("driver.fullName LIKE :search OR driver.phone LIKE :search", {
                search: `%${query.search}%`,
            });
        }
        if (query.status) {
            queryBuilder.andWhere("driver.status = :status", {
                status: query.status,
            });
        }
        queryBuilder
            .skip(pagination.offset)
            .take(pagination.limit)
            .orderBy("driver." + pagination.sort || "createdAt", pagination.typeSort || "DESC");
        const [data, total] = await queryBuilder.getManyAndCount();
        return {
            data,
            pagination: {
                ...pagination,
                total,
            },
        };
    }
};
exports.DriverRepository = DriverRepository;
exports.DriverRepository = DriverRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(driver_entity_1.Driver)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], DriverRepository);
