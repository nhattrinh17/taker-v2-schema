import { Repository } from "typeorm";
import { BaseRepositoryAbstract } from "../../base/base.abstract.repository";
import { Blog } from "../../entities/blog.entity";
import { BlogRepositoryInterface } from "../interface/blog.interface";
export declare class BlogRepository extends BaseRepositoryAbstract<Blog> implements BlogRepositoryInterface {
    private readonly blogRepository;
    constructor(blogRepository: Repository<Blog>);
}
