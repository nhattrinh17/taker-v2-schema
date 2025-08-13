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
exports.ShoeServiceRepository = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const base_abstract_repository_1 = require("../../base/base.abstract.repository");
const shoe_service_entity_1 = require("../../entities/shoe_service.entity");
let ShoeServiceRepository = class ShoeServiceRepository extends base_abstract_repository_1.BaseRepositoryAbstract {
    constructor(shoeServiceRepository) {
        super(shoeServiceRepository);
        this.shoeServiceRepository = shoeServiceRepository;
    }
    async getAllShoeServices(query, pagination) {
        const queryBuilder = this.shoeServiceRepository
            .createQueryBuilder("shoeService");
        if (query.search) {
            queryBuilder.andWhere("shoeService.name LIKE :search OR shoeService.description LIKE :search OR shoeService.price LIKE :search", { search: `%${query.search}%` });
        }
        queryBuilder
            .skip(pagination.offset)
            .take(pagination.limit)
            .orderBy(`shoeService.${pagination.sort || "createdAt"}`, pagination.typeSort || "DESC");
        const [items, total] = await queryBuilder.getManyAndCount();
        return {
            data: items,
            pagination: {
                ...pagination,
                total,
            },
        };
    }
};
exports.ShoeServiceRepository = ShoeServiceRepository;
exports.ShoeServiceRepository = ShoeServiceRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(shoe_service_entity_1.ShoeService)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ShoeServiceRepository);
