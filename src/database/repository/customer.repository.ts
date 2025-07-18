import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { BaseRepositoryAbstract } from "../../base/base.abstract.repository";
import { Customer } from "../../entities/customer.entity";
import { CustomerRepositoryInterface } from "../interface/customer.interface";

@Injectable()
export class CustomerRepository
  extends BaseRepositoryAbstract<Customer>
  implements CustomerRepositoryInterface
{
  constructor(
    @InjectRepository(Customer)
    private readonly customerRepository: Repository<Customer>
  ) {
    super(customerRepository);
  }
}
