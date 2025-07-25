import { Repository } from "typeorm";
import { BaseRepositoryAbstract } from "../../base/base.abstract.repository";
import { BlogCategory } from "../../entities/blog_category.entity";
import { BlogCategoryRepositoryInterface } from "../interface/blog_category.interface";
export declare class BlogCategoryRepository extends BaseRepositoryAbstract<BlogCategory> implements BlogCategoryRepositoryInterface {
    private readonly blogCategoryRepository;
    constructor(blogCategoryRepository: Repository<BlogCategory>);
}
