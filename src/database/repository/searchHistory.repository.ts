import { SearchHistory } from '@entities/search_history.entity';
import { Injectable } from '@nestjs/common/decorators/core';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseRepositoryAbstract } from 'src/base';
import { Repository } from 'typeorm';
import { SearchHistoryRepositoryInterface } from '../interface/searchHistory.interface';

@Injectable()
export class SearchHistoryRepository extends BaseRepositoryAbstract<SearchHistory> implements SearchHistoryRepositoryInterface {
  constructor(@InjectRepository(SearchHistory) private readonly searchHistoryRepository: Repository<SearchHistory>) {
    super(searchHistoryRepository);
  }
}
