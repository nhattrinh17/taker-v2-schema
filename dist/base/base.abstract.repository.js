"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseRepositoryAbstract = void 0;
class BaseRepositoryAbstract {
    constructor(repository) {
        this.repository = repository;
    }
    async create(dto) {
        const createdData = this.repository.create(dto);
        return await this.repository.save(createdData);
    }
    async findOneById(id, projection, options) {
        const item = await this.repository.findOne({
            where: { id },
            select: projection,
            ...options,
        });
        return item ? item : null;
    }
    async findOneByCondition(condition, projection, options) {
        return await this.repository.findOne({
            where: condition,
            select: projection,
            ...options,
        });
    }
    async findAll(condition, options) {
        const [items, count] = await this.repository.findAndCount({
            where: condition,
            select: options?.projection,
            order: { [options?.sort || 'createdAt']: options?.typeSort || 'DESC' },
            skip: options?.offset,
            take: options?.limit,
            relations: options?.relations,
        });
        return {
            pagination: {
                total: count,
                limit: options?.limit,
                page: options?.page,
            },
            data: items,
        };
    }
    async findOneAndUpdate(condition, dto) {
        const item = await this.findOneByCondition(condition);
        if (!item) {
            return null;
        }
        await this.repository.update(condition, dto);
        return item;
    }
    async findByIdAndUpdate(id, dto) {
        const item = await this.findOneById(id);
        if (!item) {
            return null;
        }
        await this.repository.update({ id }, dto);
        return item;
    }
    async softDelete(id) {
        const deleteItem = await this.findOneById(id);
        if (!deleteItem) {
            return false;
        }
        await this.repository.softDelete(id);
        return true;
    }
    async permanentlyDelete(id) {
        const deleteItem = await this.findOneById(id);
        if (!deleteItem) {
            return false;
        }
        await this.repository.delete(id);
        return true;
    }
    async permanentlyDeleteByCondition(condition) {
        const deleteItem = await this.count(condition);
        if (!deleteItem) {
            return false;
        }
        await this.repository.delete(condition);
        return true;
    }
    async count(condition) {
        return await this.repository.count({ where: condition });
    }
    getRepo() {
        return this.repository;
    }
}
exports.BaseRepositoryAbstract = BaseRepositoryAbstract;
