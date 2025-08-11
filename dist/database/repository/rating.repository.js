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
exports.RatingRepository = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const base_abstract_repository_1 = require("../../base/base.abstract.repository");
const rating_entity_1 = require("../../entities/rating.entity");
let RatingRepository = class RatingRepository extends base_abstract_repository_1.BaseRepositoryAbstract {
    constructor(ratingRepository) {
        super(ratingRepository);
        this.ratingRepository = ratingRepository;
    }
    async getRatingAverage(partnerId) {
        const query = await this.ratingRepository
            .createQueryBuilder("rating")
            .leftJoinAndSelect("rating.shoeBooking", "shoeBooking")
            .select("AVG(rating.rating)", "averageRating")
            .where("shoeBooking.partnerId = :partnerId", { partnerId })
            .getRawOne();
        return query?.averageRating;
    }
    async findAllCustom(condition, pagination) {
        const queryBuilder = this.ratingRepository
            .createQueryBuilder("rating")
            .leftJoinAndSelect("rating.shoeBooking", "shoeBooking")
            .leftJoinAndSelect("rating.customer", "customer")
            .leftJoinAndSelect("shoeBooking.partner", "partner")
            .where("shoeBooking.partnerId = :partnerId", {
            partnerId: condition.partnerId,
        })
            .select([
            "rating.id",
            "rating.rating",
            "rating.comment",
            "shoeBooking.id",
            "customer.fullName",
            "customer.avatar",
            "customer.phone",
            "partner.name",
            "partner.avatar",
            "partner.phone",
        ])
            .skip(pagination.offset)
            .take(pagination.limit)
            .orderBy(`rating.${pagination.sort || "createdAt"}`, pagination.typeSort || "DESC");
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
exports.RatingRepository = RatingRepository;
exports.RatingRepository = RatingRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(rating_entity_1.Rating)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], RatingRepository);
