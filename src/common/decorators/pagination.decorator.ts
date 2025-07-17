import { QuerySortDto } from '@common/filters';
import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsInt, IsOptional } from 'class-validator';

export class PaginationDto extends QuerySortDto {
  @ApiProperty({
    description: 'Page number',
    required: false,
  })
  @IsOptional()
  @IsInt()
  @Transform(({ value }) => Number(value))
  page: number;

  @ApiProperty({
    description: 'Number of items per page',
    required: false,
  })
  @IsOptional()
  @IsInt()
  @Transform(({ value }) => Number(value))
  limit: number;

  @ApiProperty({
    description: 'Offset for pagination',
    required: false,
  })
  @IsInt()
  @Transform(({ value }) => Number(value))
  @IsOptional()
  offset: number;
}

export const Pagination = createParamDecorator((data: unknown, ctx: ExecutionContext) => {
  const request = ctx.switchToHttp().getRequest();
  const pagination = {
    page: 1,
    limit: 10,
    offset: 0,
    sort: request.query?.sort || null,
    typeSort: request.query?.typeSort || null,
  };
  const page = request.query?.page as string;
  const limit = request.query?.limit as string;
  const p = parseInt(page);
  const l = parseInt(limit) || 200;
  if (typeof p == 'number' && typeof l == 'number' && p >= 1 && l >= 1) {
    pagination.page = p;
    pagination.limit = l > 200 ? 200 : l;
    pagination.offset = l * (p - 1);
  }
  return pagination;
});
