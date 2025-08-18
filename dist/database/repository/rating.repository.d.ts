import { Repository } from "typeorm";
import { BaseRepositoryAbstract } from "../../base/base.abstract.repository";
import { Rating } from "../../entities/rating.entity";
import { RatingRepositoryInterface } from "../interface/rating.interface";
import { PaginationDto } from "@common/decorators";
export declare class RatingRepository extends BaseRepositoryAbstract<Rating> implements RatingRepositoryInterface {
    private readonly ratingRepository;
    constructor(ratingRepository: Repository<Rating>);
    getRatingAverage(partnerId: string): Promise<any>;
    findAllCustom(condition: any, pagination: PaginationDto): Promise<any>;
}
