import { MessageResConstant } from '@common/constants';
import * as XLSX from 'xlsx';

const { messageResponseError } = MessageResConstant;

export class ExcelService {
  processExcelFileWithdraw(buffer: Buffer) {
    // Đọc workbook từ buffer
    const workbook = XLSX.read(buffer, { type: 'buffer' });

    // Lấy sheet đầu tiên
    const sheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[sheetName];
    const rows = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

    // Lấy hàng đầu tiên
    const firstRow = rows[0] as string[];
    console.log('🚀 ~ ExcelService ~ processExcelFileWithdraw ~ firstRow:', firstRow);
    if (firstRow.length > 1 || firstRow[0] != 'id') {
      throw new Error(messageResponseError.upload.fileInvalid);
    }

    // Chuyển sheet thành dữ liệu JSON
    const data = XLSX.utils.sheet_to_json(worksheet);

    return data;
  }
}
