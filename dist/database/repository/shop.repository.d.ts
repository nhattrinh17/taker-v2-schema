import { Repository } from "typeorm";
import { BaseRepositoryAbstract } from "../../base/base.abstract.repository";
import { Shop } from "../../entities/shop.entity";
import { ShopRepositoryInterface } from "../interface/shop.interface";
export declare class ShopRepository extends BaseRepositoryAbstract<Shop> implements ShopRepositoryInterface {
    private readonly shopRepository;
    constructor(shopRepository: Repository<Shop>);
}
