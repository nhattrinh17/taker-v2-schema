"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActionRepository = void 0;
const base_abstract_repository_1 = require("../../base/base.abstract.repository");
class ActionRepository extends base_abstract_repository_1.BaseRepositoryAbstract {
    constructor(actionRepository) {
        super(actionRepository);
    }
    async findByName(name) {
        return await this.repository.findOne({
            where: { name },
        });
    }
    async findByNames(names) {
        return await this.repository.find({
            where: names.map(name => ({ name })),
        });
    }
}
exports.ActionRepository = ActionRepository;
