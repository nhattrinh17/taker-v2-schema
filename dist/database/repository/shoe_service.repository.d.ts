import { Repository } from "typeorm";
import { BaseRepositoryAbstract } from "../../base/base.abstract.repository";
import { ShoeService } from "../../entities/shoe_service.entity";
import { ShoeServiceRepositoryInterface } from "../interface/shoe_service.interface";
import { PaginationDto } from "@common/decorators";
export declare class ShoeServiceRepository extends BaseRepositoryAbstract<ShoeService> implements ShoeServiceRepositoryInterface {
    private readonly shoeServiceRepository;
    constructor(shoeServiceRepository: Repository<ShoeService>);
    getAllShoeServices(query: any, pagination: PaginationDto): Promise<any>;
}
