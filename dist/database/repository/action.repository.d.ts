import { Repository } from 'typeorm';
import { BaseRepositoryAbstract } from '../../base/base.abstract.repository';
import { Action } from '../../entities/action.entity';
import { ActionRepositoryInterface } from '../interface/action.interface.repository';
export declare class ActionRepository extends BaseRepositoryAbstract<Action> implements ActionRepositoryInterface {
    constructor(actionRepository: Repository<Action>);
    findByName(name: string): Promise<Action | null>;
    findByNames(names: string[]): Promise<Action[]>;
}
