import { Repository } from "typeorm";
import { BaseRepositoryAbstract } from "../../base/base.abstract.repository";
import { Customer } from "../../entities/customer.entity";
import { CustomerRepositoryInterface } from "../interface/customer.interface";
import { StepEnum, UserStatusEnum } from "../../common/enums";
import { PaginationDto } from "../../common/decorators";
export declare class CustomerRepository extends BaseRepositoryAbstract<Customer> implements CustomerRepositoryInterface {
    private readonly customerRepository;
    constructor(customerRepository: Repository<Customer>);
    findAllCustomers(condition: {
        search?: string;
        status?: UserStatusEnum;
        step?: StepEnum;
    }, pagination: PaginationDto): Promise<{
        data: Customer[];
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
