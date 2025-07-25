import { StatusBlogEnum } from "@common/enums";
import { BaseRepositoryInterface } from "../../base/base.interface.repository";
import { BlogCategory } from "../../entities/blog_category.entity";
import { PaginationDto } from "@common/decorators";

export interface BlogCategoryRepositoryInterface
  extends BaseRepositoryInterface<BlogCategory> {
  }
