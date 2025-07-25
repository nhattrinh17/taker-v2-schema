import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, ManyToOne, JoinColumn } from 'typeorm';
import { StatusBlogEnum, TypePressBlogEnum } from '@common/enums';
import { BlogCategory } from './blog_category.entity';
import { BaseEntity } from './base.entity';

@Entity('blogs')
export class Blog extends BaseEntity {
  @ManyToOne(() => BlogCategory, (blogCategory) => blogCategory.id, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'blogCategoryId' })
  blogCategory: BlogCategory;

  @Column({ type: 'varchar', length: 36, nullable: true })
  blogCategoryId: string;

  @Column({ type: 'varchar', nullable: true })
  title: string;

  @Column({ type: 'varchar', nullable: true })
  slug: string;

  @Column({ type: 'varchar', nullable: true })
  name: string;

  @Column({ type: 'varchar', nullable: true })
  image: string;

  @Column({
    type: 'enum',
    enum: TypePressBlogEnum,
    default: TypePressBlogEnum.NAVIGATION,
  })
  typePress: TypePressBlogEnum;

  @Column({ type: 'varchar', nullable: true })
  screenCustomer: string;

  @Column({ type: 'varchar', nullable: true })
  screenPartner: string;

  @Column({ type: 'varchar', nullable: true })
  linkNavigate: string;

  @Column({ type: 'int', nullable: true })
  order: number;

  @Column({ type: 'boolean', default: false })
  isPromotion: boolean;

  @Column({
    type: 'enum',
    enum: StatusBlogEnum,
    default: StatusBlogEnum.ACTIVE,
  })
  status: StatusBlogEnum;

  @Column({ type: 'varchar', nullable: true })
  banner: string;

  @Column({ type: 'boolean', default: false })
  runBanner: boolean;
}
