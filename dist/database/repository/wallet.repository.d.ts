import { Repository } from "typeorm";
import { BaseRepositoryAbstract } from "../../base/base.abstract.repository";
import { Wallet } from "../../entities/wallet.entity";
import { WalletRepositoryInterface } from "../interface/wallet.interface";
import { PaginationDto } from "@common/decorators";
export declare class WalletRepository extends BaseRepositoryAbstract<Wallet> implements WalletRepositoryInterface {
    private readonly walletRepository;
    constructor(walletRepository: Repository<Wallet>);
    customFind(condition: any, pagination: PaginationDto): Promise<any>;
}
