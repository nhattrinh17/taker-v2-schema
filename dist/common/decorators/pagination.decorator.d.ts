import { QuerySortDto } from '../filters';
export declare class PaginationDto extends QuerySortDto {
    page: number;
    limit: number;
    offset: number;
}
export declare const Pagination: (...dataOrPipes: unknown[]) => ParameterDecorator;
