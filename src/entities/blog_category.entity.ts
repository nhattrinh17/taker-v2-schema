import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, OneToMany } from 'typeorm';
import { StatusBlogEnum } from '@common/enums';
import { BaseEntity } from './base.entity';
import { Blog } from './blog.entity';

@Entity('blog_categories')
export class BlogCategory extends BaseEntity {
  @Column({ type: 'varchar', nullable: true })
  name: string;

  @Column({ type: 'varchar', nullable: true })
  slug: string;

  @Column({ type: 'varchar', nullable: true })
  description: string;

  @Column({
    type: 'enum',
    enum: StatusBlogEnum,
    default: StatusBlogEnum.ACTIVE,
  })
  status: StatusBlogEnum;

  @Column({ type: 'int', nullable: true })
  order: number;

  @OneToMany(() => Blog, (blog) => blog.blogCategory)
  blogs: Blog[];
}
