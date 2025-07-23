import { StepEnum, UserStatusEnum } from "../../common/enums";
import { BaseRepositoryInterface } from "../../base/base.interface.repository";
import { Customer } from "../../entities/customer.entity";
import { PaginationDto } from "../../common/decorators";
export interface CustomerRepositoryInterface extends BaseRepositoryInterface<Customer> {
    findAllCustomers(condition: {
        search?: string;
        status?: UserStatusEnum;
        step?: StepEnum;
    }, pagination: PaginationDto): any;
}
