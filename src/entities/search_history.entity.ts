import { Column, Entity, ManyToOne } from 'typeorm';
import { SearchHistoryTypeEnum } from '@common/enums';
import { BaseEntity } from './base.entity';
import { Customer } from './customer.entity';

@Entity({ name: 'search_histories' })
export class SearchHistory extends BaseEntity {
  @ManyToOne(() => Customer, (customer) => customer.searchHistories, { onDelete: 'CASCADE' })
  customer: Customer;

  @Column({ type: 'varchar', length: 36 })
  customerId: string;

  @Column({ nullable: true })
  name: string;

  @Column({ nullable: true })
  address: string;

  @Column({ type: 'varchar', length: 100 })
  latitude: string;

  @Column({ type: 'varchar', length: 100 })
  longitude: string;

  @Column({ enum: SearchHistoryTypeEnum, type: 'enum', nullable: true })
  type: SearchHistoryTypeEnum;
}
