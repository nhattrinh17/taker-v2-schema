import { Repository } from "typeorm";
import { BaseRepositoryAbstract } from "../../base/base.abstract.repository";
import { Partner } from "../../entities/partner.entity";
import { PartnerRepositoryInterface } from "../interface/partner.interface";
import { StepEnum, UserStatusEnum } from "../../common/enums";
import { PaginationDto } from "../../common/decorators";
export declare class PartnerRepository extends BaseRepositoryAbstract<Partner> implements PartnerRepositoryInterface {
    private readonly partnerRepository;
    constructor(partnerRepository: Repository<Partner>);
    findAllPartners(condition: {
        search?: string;
        status?: UserStatusEnum;
        step?: StepEnum;
    }, pagination: PaginationDto): Promise<{
        data: Partner[];
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
