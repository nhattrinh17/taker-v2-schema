import { StepEnum, UserStatusEnum } from "../../common/enums";
import { BaseRepositoryInterface } from "../../base/base.interface.repository";
import { Partner } from "../../entities/partner.entity";
import { PaginationDto } from "../../common/decorators";
export interface PartnerRepositoryInterface extends BaseRepositoryInterface<Partner> {
    findAllPartners(condition: {
        search?: string;
        status?: UserStatusEnum;
        step?: StepEnum;
    }, pagination: PaginationDto): any;
}
