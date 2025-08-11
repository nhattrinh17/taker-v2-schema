import { StepEnum, UserStatusEnum } from "@common/enums";
import { BaseRepositoryInterface } from "../../base/base.interface.repository";
import { Driver } from "../../entities/driver.entity";
import { PaginationDto } from "@common/decorators";

export interface DriverRepositoryInterface
  extends BaseRepositoryInterface<Driver> {
  findAllCustom(query: any, pagination: PaginationDto);
}
