import { FindAllResponse } from 'src/types/common.type';
import { BaseRepositoryInterface } from './base.interface.repository';
import { Repository, DeepPartial } from 'typeorm';
import { QueryDeepPartialEntity } from 'typeorm/query-builder/QueryPartialEntity';
export declare abstract class BaseRepositoryAbstract<T> implements BaseRepositoryInterface<T> {
    protected readonly repository: Repository<T>;
    protected constructor(repository: Repository<T>);
    create(dto: DeepPartial<T>): Promise<T>;
    findOneById(id: string, projection?: (keyof T)[], options?: any): Promise<T | null>;
    findOneByCondition(condition?: object | any[], projection?: (keyof T)[], options?: any): Promise<T>;
    findAll(condition: object | any[], options?: {
        projection: (keyof T)[];
        sort: string;
        typeSort: 'ASC' | 'DESC';
        page: number;
        offset: number;
        limit: number;
    }): Promise<FindAllResponse<T>>;
    findOneAndUpdate(condition: object, dto: QueryDeepPartialEntity<T>): Promise<T | null>;
    findByIdAndUpdate(id: string, dto: QueryDeepPartialEntity<T>): Promise<T | null>;
    softDelete(id: string): Promise<boolean>;
    permanentlyDelete(id: string): Promise<boolean>;
    permanentlyDeleteByCondition(condition: object): Promise<boolean>;
    count(condition?: object | any[]): Promise<number>;
    getRepo(): Repository<T>;
}
