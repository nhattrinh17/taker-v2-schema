import { Repository } from 'typeorm';
import { BaseRepositoryAbstract } from '../../base/base.abstract.repository';
import { Action } from '../../entities/action.entity';
import { ActionRepositoryInterface } from '../interface/action.interface.repository';
export declare class ActionRepository extends BaseRepositoryAbstract<Action> implements ActionRepositoryInterface {
    private readonly actionRepository;
    constructor(actionRepository: Repository<Action>);
}
