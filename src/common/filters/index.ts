import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export * from './http-exception.filter';
export class QuerySortDto {
  @ApiProperty({
    description: 'Sort field',
    required: false,
  })
  @IsOptional()
  @IsString()
  sort?: string;

  @ApiProperty({
    description: 'Sort type',
    required: false,
    enum: ['ASC', 'DESC'],
  })
  @IsOptional()
  @IsString()
  typeSort?: 'ASC' | 'DESC';
}
