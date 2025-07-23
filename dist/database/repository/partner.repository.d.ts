import { Repository } from "typeorm";
import { BaseRepositoryAbstract } from "../../base/base.abstract.repository";
import { Partner } from "../../entities/partner.entity";
import { PartnerRepositoryInterface } from "../interface/partner.interface";
export declare class PartnerRepository extends BaseRepositoryAbstract<Partner> implements PartnerRepositoryInterface {
    private readonly partnerRepository;
    constructor(partnerRepository: Repository<Partner>);
}
