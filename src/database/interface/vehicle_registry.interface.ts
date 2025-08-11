import { VehicleRegistryStatusEnum, VehicleTypeEnum } from "@common/enums";
import { BaseRepositoryInterface } from "../../base/base.interface.repository";
import { VehicleRegistry } from "../../entities/vehicle_registry.entity";
import { PaginationDto } from "@common/decorators";

export interface VehicleRegistryRepositoryInterface
  extends BaseRepositoryInterface<VehicleRegistry> {
  
}
