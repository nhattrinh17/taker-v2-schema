import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { BaseRepositoryAbstract } from "../../base/base.abstract.repository";
import { Address } from "../../entities/address.entity";
import { AddressRepositoryInterface } from "../interface/address.interface";

@Injectable()
export class AddressRepository
  extends BaseRepositoryAbstract<Address>
  implements AddressRepositoryInterface
{
  constructor(
    @InjectRepository(Address)
    private readonly addressRepository: Repository<Address>
  ) {
    super(addressRepository);
  }
}
