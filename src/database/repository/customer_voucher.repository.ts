import { CustomerVoucher } from "@entities/index";
import { Injectable } from "@nestjs/common";
import { BaseRepositoryAbstract } from "src/base";
import { InjectRepository } from "@nestjs/typeorm";
import { IsNull, Repository } from "typeorm";
import { CustomerVoucherAdminRepositoryInterface } from "@database/interface/customer_voucher.interface";
import { PaginationDto } from "@common/decorators";

@Injectable()
export class CustomerVoucherAdminRepository
  extends BaseRepositoryAbstract<CustomerVoucher>
  implements CustomerVoucherAdminRepositoryInterface
{
  constructor(
    @InjectRepository(CustomerVoucher)
    private readonly customerVoucherRepository: Repository<CustomerVoucher>
  ) {
    super(customerVoucherRepository); // Truyền repository vào abstract class
  }

  insertManyVoucherForCustomer(
    dto: { customerId: string; voucherId: string }[]
  ): Promise<any> {
    return this.customerVoucherRepository.insert(dto);
  }

  revokeAllVoucherById(voucherId: string): Promise<any> {
    // console.log('🚀 ~ CustomerVoucherAdminRepository ~ revokeAllVoucherById ~ voucherId:', voucherId);
    return this.customerVoucherRepository.delete({
      voucherId,
      timeUse: IsNull(), // Revoke voucher
    });
  }

  async findAllAndJoin(
    condition: object,
    pagination: PaginationDto
  ): Promise<any> {
    const { page, limit, offset } = pagination;

    const [result, total] = await this.customerVoucherRepository
      .createQueryBuilder(CustomerVoucher.name)
      .leftJoinAndSelect(`${CustomerVoucher.name}.customer`, "customer") // Join với bảng Customer
      .where(condition) // Điều kiện filter
      .select([CustomerVoucher.name, "customer.fullName", "customer.phone"]) // Chọn các trường từ CustomerVoucher và name từ Customer
      .skip(offset) // Số lượng bản ghi cần bỏ qua
      .take(limit) // Số lượng bản ghi giới hạn
      .getManyAndCount(); // Trả về danh sách

    return {
      data: result,

      pagination: {
        ...pagination,
        total: total,
      },
    };
  }

  async getVouchers(
    condition: object,
    pagination: PaginationDto
  ): Promise<any> {
    const { customerId, search, type } = condition as {
      customerId?: string;
      search?: string;
      type?: string;
    };
    const { page, limit, offset, sort, typeSort } = pagination;

    const query = this.customerVoucherRepository
      .createQueryBuilder(CustomerVoucher.name)
      .leftJoinAndSelect(`${CustomerVoucher.name}.voucher`, "voucher") // Join với bảng Voucher
      .where(`${CustomerVoucher.name}.customerId = :customerId`, { customerId })
      .andWhere(`${CustomerVoucher.name}.timeUse IS NULL`)
      .andWhere("voucher.totalUse < voucher.quantity")
      .andWhere("voucher.endTime > NOW()"); // Chỉ lấy voucher chưa kết thúc

    // Thêm điều kiện tìm kiếm theo `voucher.name`
    if (search) {
      query.andWhere(`voucher.name LIKE :search`, { search: `%${search}%` });
    }

    // Tìm theo `voucher.type`
    if (type) {
      query.andWhere(`voucher.type = :type`, { type });
    }

    if (sort) {
      query.orderBy(`partner.${sort || "createdAt"}`, typeSort || "DESC");
    }

    const [result, total] = await query
      .select([CustomerVoucher.name, "voucher"])
      .skip(offset) // Số lượng bản ghi cần bỏ qua
      .take(limit) // Số lượng bản ghi giới hạn
      .getManyAndCount(); // Trả về danh sách và tổng số lượng

    return {
      data: result,
      pagination: {
        ...pagination,
        total: total,
      },
    };
  }
}
