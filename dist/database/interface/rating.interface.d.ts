import { PaginationDto } from "../../common/decorators";
import { BaseRepositoryInterface } from "../../base/base.interface.repository";
import { Rating } from "../../entities/rating.entity";
export interface RatingRepositoryInterface extends BaseRepositoryInterface<Rating> {
    getRatingAverage(partnerId: string): Promise<any>;
    findAllCustom(condition: any, pagination: PaginationDto): any;
}
