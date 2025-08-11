import { Repository } from "typeorm";
import { BaseRepositoryAbstract } from "../../base/base.abstract.repository";
import { CancelOrder } from "../../entities/cancel_order.entity";
import { CancelOrderRepositoryInterface } from "../interface/cancel_order.interface";
export declare class CancelOrderRepository extends BaseRepositoryAbstract<CancelOrder> implements CancelOrderRepositoryInterface {
    private readonly cancelOrderRepository;
    constructor(cancelOrderRepository: Repository<CancelOrder>);
}
