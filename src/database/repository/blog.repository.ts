import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { BaseRepositoryAbstract } from "../../base/base.abstract.repository";
import { Blog } from "../../entities/blog.entity";
import { BlogRepositoryInterface } from "../interface/blog.interface";
import { StatusBlogEnum, TypePressBlogEnum } from "@common/enums";
import { PaginationDto } from "@common/decorators";

@Injectable()
export class BlogRepository
  extends BaseRepositoryAbstract<Blog>
  implements BlogRepositoryInterface
{
  constructor(
    @InjectRepository(Blog)
    private readonly blogRepository: Repository<Blog>
  ) {
    super(blogRepository);
  }

}
