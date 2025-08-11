import { StatusBlogEnum, TypePressBlogEnum } from '@common/enums';
import { BlogCategory } from './blog_category.entity';
import { BaseEntity } from './base.entity';
export declare class Blog extends BaseEntity {
    blogCategory: BlogCategory;
    blogCategoryId: string;
    title: string;
    slug: string;
    name: string;
    image: string;
    typePress: TypePressBlogEnum;
    screenCustomer: string;
    screenPartner: string;
    linkNavigate: string;
    order: number;
    isPromotion: boolean;
    status: StatusBlogEnum;
    banner: string;
    runBanner: boolean;
}
