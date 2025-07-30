import { PaginationDto } from "@common/decorators";
import { BaseRepositoryInterface } from "../../base/base.interface.repository";
import { ShoeService } from "@entities/shoe_service.entity";
export interface ShoeServiceRepositoryInterface extends BaseRepositoryInterface<ShoeService> {
    getAllShoeServices(query: any, pagination: PaginationDto): Promise<any>;
}
