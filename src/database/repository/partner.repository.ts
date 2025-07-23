import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { BaseRepositoryAbstract } from "../../base/base.abstract.repository";
import { Partner } from "../../entities/partner.entity";
import { PartnerRepositoryInterface } from "../interface/partner.interface";

@Injectable()
export class PartnerRepository
  extends BaseRepositoryAbstract<Partner>
  implements PartnerRepositoryInterface
{
  constructor(
    @InjectRepository(Partner) private readonly partnerRepository: Repository<Partner>
  ) {
    super(partnerRepository);
  }
}
