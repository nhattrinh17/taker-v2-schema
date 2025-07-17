import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BaseRepositoryAbstract } from '../../base/base.abstract.repository';
import { Action } from '../../entities/action.entity';
import { ActionRepositoryInterface } from '../interface/action.interface.repository';

@Injectable()
export class ActionRepository extends BaseRepositoryAbstract<Action> implements ActionRepositoryInterface {
  constructor(@InjectRepository(Action) private readonly actionRepository: Repository<Action>) {
    super(actionRepository);
  }
}
