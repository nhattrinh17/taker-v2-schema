import { Repository } from "typeorm";
import { BaseRepositoryAbstract } from "../../base/base.abstract.repository";
import { VehicleRegistry } from "../../entities/vehicle_registry.entity";
import { VehicleRegistryRepositoryInterface } from "../interface/vehicle_registry.interface";
export declare class VehicleRegistryRepository extends BaseRepositoryAbstract<VehicleRegistry> implements VehicleRegistryRepositoryInterface {
    private readonly vehicleRegistryRepository;
    constructor(vehicleRegistryRepository: Repository<VehicleRegistry>);
}
