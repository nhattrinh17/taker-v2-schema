import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { BaseRepositoryAbstract } from "../../base/base.abstract.repository";
import { Shop } from "../../entities/shop.entity";
import { ShopRepositoryInterface } from "../interface/shop.interface";

@Injectable()
export class ShopRepository
  extends BaseRepositoryAbstract<Shop>
  implements ShopRepositoryInterface
{
  constructor(
    @InjectRepository(Shop) private readonly shopRepository: Repository<Shop>
  ) {
    super(shopRepository);
  }
}
