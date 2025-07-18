import { Repository } from "typeorm";
import { BaseRepositoryAbstract } from "../../base/base.abstract.repository";
import { Customer } from "../../entities/customer.entity";
import { CustomerRepositoryInterface } from "../interface/customer.interface";
export declare class CustomerRepository extends BaseRepositoryAbstract<Customer> implements CustomerRepositoryInterface {
    private readonly customerRepository;
    constructor(customerRepository: Repository<Customer>);
}
