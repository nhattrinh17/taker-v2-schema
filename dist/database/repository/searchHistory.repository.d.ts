import { SearchHistory } from '@entities/search_history.entity';
import { BaseRepositoryAbstract } from 'src/base';
import { Repository } from 'typeorm';
import { SearchHistoryRepositoryInterface } from '../interface/searchHistory.interface';
export declare class SearchHistoryRepository extends BaseRepositoryAbstract<SearchHistory> implements SearchHistoryRepositoryInterface {
    private readonly searchHistoryRepository;
    constructor(searchHistoryRepository: Repository<SearchHistory>);
}
