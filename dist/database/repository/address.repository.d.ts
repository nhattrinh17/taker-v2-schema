import { Repository } from "typeorm";
import { BaseRepositoryAbstract } from "../../base/base.abstract.repository";
import { Address } from "../../entities/address.entity";
import { AddressRepositoryInterface } from "../interface/address.interface";
export declare class AddressRepository extends BaseRepositoryAbstract<Address> implements AddressRepositoryInterface {
    private readonly addressRepository;
    constructor(addressRepository: Repository<Address>);
}
