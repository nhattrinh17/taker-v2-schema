import { StatusBlogEnum } from '@common/enums';
import { BaseEntity } from './base.entity';
import { Blog } from './blog.entity';
export declare class BlogCategory extends BaseEntity {
    name: string;
    slug: string;
    description: string;
    status: StatusBlogEnum;
    order: number;
    blogs: Blog[];
}
