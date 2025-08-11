import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { BaseRepositoryAbstract } from "../../base/base.abstract.repository";
import { VehicleRegistry } from "../../entities/vehicle_registry.entity";
import { VehicleRegistryRepositoryInterface } from "../interface/vehicle_registry.interface";
import { VehicleRegistryStatusEnum, VehicleTypeEnum } from "@common/enums";
import { PaginationDto } from "@common/decorators";

@Injectable()
export class VehicleRegistryRepository
  extends BaseRepositoryAbstract<VehicleRegistry>
  implements VehicleRegistryRepositoryInterface
{
  constructor(
    @InjectRepository(VehicleRegistry)
    private readonly vehicleRegistryRepository: Repository<VehicleRegistry>
  ) {
    super(vehicleRegistryRepository);
  }
}
