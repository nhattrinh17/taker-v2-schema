import { Repository } from "typeorm";
import { BaseRepositoryAbstract } from "../../base/base.abstract.repository";
import { Driver } from "../../entities/driver.entity";
import { DriverRepositoryInterface } from "../interface/driver.interface";
import { PaginationDto } from "../../common/decorators";
export declare class DriverRepository extends BaseRepositoryAbstract<Driver> implements DriverRepositoryInterface {
    private readonly driverRepository;
    constructor(driverRepository: Repository<Driver>);
    findAllCustom(query: any, pagination: PaginationDto): Promise<{
        data: Driver[];
        pagination: {
            total: number;
            page: number;
            limit: number;
            offset: number;
            sort?: string;
            typeSort?: "ASC" | "DESC";
        };
    }>;
}
