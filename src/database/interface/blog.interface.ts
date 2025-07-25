import { StatusBlogEnum, TypePressBlogEnum } from "@common/enums";
import { BaseRepositoryInterface } from "../../base/base.interface.repository";
import { Blog } from "../../entities/blog.entity";
import { PaginationDto } from "@common/decorators";

export interface BlogRepositoryInterface
  extends BaseRepositoryInterface<Blog> {}
