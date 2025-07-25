import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { BaseRepositoryAbstract } from "../../base/base.abstract.repository";
import { BlogCategory } from "../../entities/blog_category.entity";
import { BlogCategoryRepositoryInterface } from "../interface/blog_category.interface";
import { StatusBlogEnum } from "@common/enums";
import { PaginationDto } from "@common/decorators";

@Injectable()
export class BlogCategoryRepository
  extends BaseRepositoryAbstract<BlogCategory>
  implements BlogCategoryRepositoryInterface
{
  constructor(
    @InjectRepository(BlogCategory)
    private readonly blogCategoryRepository: Repository<BlogCategory>
  ) {
    super(blogCategoryRepository);
  }
}
