"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.refund = exports.validateSecureHash = exports.createPaymentUrl = void 0;
const crypto_1 = __importDefault(require("crypto"));
const dayjs_1 = __importDefault(require("dayjs"));
const timezone_1 = __importDefault(require("dayjs/plugin/timezone"));
const utc_1 = __importDefault(require("dayjs/plugin/utc"));
const qs_1 = __importDefault(require("qs"));
dayjs_1.default.extend(utc_1.default);
dayjs_1.default.extend(timezone_1.default);
dayjs_1.default.tz.setDefault('Asia/Ho_Chi_Minh');
const createPaymentUrl = ({ amount, ip, orderId, orderInfo, }) => {
    const createDate = dayjs_1.default.tz().format('YYYYMMDDHHmmss');
    const expireDate = dayjs_1.default.tz().add(10, 'minute').format('YYYYMMDDHHmmss');
    const tmnCode = process.env.vnp_TmnCode;
    const secretKey = process.env.vnp_HashSecret;
    let vnpUrl = process.env.vnp_Url;
    const returnUrl = process.env.vnp_ReturnUrl;
    const locale = 'vn';
    const currCode = 'VND';
    let vnp_Params = {};
    vnp_Params['vnp_Version'] = '2.1.0';
    vnp_Params['vnp_Command'] = 'pay';
    vnp_Params['vnp_TmnCode'] = tmnCode;
    vnp_Params['vnp_Locale'] = locale;
    vnp_Params['vnp_CurrCode'] = currCode;
    vnp_Params['vnp_TxnRef'] = orderId;
    vnp_Params['vnp_OrderInfo'] = orderInfo;
    vnp_Params['vnp_OrderType'] = 'other';
    vnp_Params['vnp_Amount'] = amount * 100;
    vnp_Params['vnp_ReturnUrl'] = returnUrl;
    vnp_Params['vnp_IpAddr'] = ip;
    vnp_Params['vnp_CreateDate'] = createDate;
    vnp_Params['vnp_ExpireDate'] = expireDate;
    vnp_Params = sortObject(vnp_Params);
    const signData = qs_1.default.stringify(vnp_Params, { encode: false });
    const hmac = crypto_1.default.createHmac('sha512', secretKey);
    const signed = hmac.update(Buffer.from(signData, 'utf-8')).digest('hex');
    vnp_Params['vnp_SecureHash'] = signed;
    vnpUrl += '?' + qs_1.default.stringify(vnp_Params, { encode: false });
    return vnpUrl;
};
exports.createPaymentUrl = createPaymentUrl;
const validateSecureHash = (query) => {
    const secureHash = query.vnp_SecureHash;
    const copyQuery = { ...query };
    delete copyQuery.vnp_SecureHash;
    delete copyQuery.vnp_SecureHashType;
    const secretKey = process.env.vnp_HashSecret;
    const vnp_Params = sortObject(copyQuery);
    const signData = qs_1.default.stringify(vnp_Params, { encode: false });
    const hmac = crypto_1.default.createHmac('sha512', secretKey);
    const signed = hmac.update(Buffer.from(signData, 'utf-8')).digest('hex');
    return secureHash === signed;
};
exports.validateSecureHash = validateSecureHash;
const refund = (orderId, amount, ip) => {
    const tmnCode = process.env.vnp_TmnCode;
    const secretKey = process.env.vnp_HashSecret;
    const vnp_TxnRef = orderId;
    const vnp_TransactionDate = dayjs_1.default.tz().format('YYYYMMDDHHmmss');
    const vnp_Amount = amount * 100;
    const vnp_TransactionType = '02';
    const vnp_CreateBy = 'XIMI';
    const vnp_RequestId = dayjs_1.default.tz().valueOf().toString();
    const vnp_Version = '2.1.0';
    const vnp_Command = 'refund';
    const vnp_OrderInfo = 'Hoan tien GD ma:' + vnp_TxnRef;
    const vnp_IpAddr = ip || '18.138.226.243';
    const vnp_CreateDate = dayjs_1.default.tz().format('YYYYMMDDHHmmss');
    const vnp_TransactionNo = '0';
    const data = vnp_RequestId +
        '|' +
        vnp_Version +
        '|' +
        vnp_Command +
        '|' +
        tmnCode +
        '|' +
        vnp_TransactionType +
        '|' +
        vnp_TxnRef +
        '|' +
        vnp_Amount +
        '|' +
        vnp_TransactionNo +
        '|' +
        vnp_TransactionDate +
        '|' +
        vnp_CreateBy +
        '|' +
        vnp_CreateDate +
        '|' +
        vnp_IpAddr +
        '|' +
        vnp_OrderInfo;
    const hmac = crypto_1.default.createHmac('sha512', secretKey);
    const vnp_SecureHash = hmac.update(Buffer.from(data, 'utf-8')).digest('hex');
    const dataObj = {
        vnp_RequestId: vnp_RequestId,
        vnp_Version: vnp_Version,
        vnp_Command: vnp_Command,
        vnp_TmnCode: tmnCode,
        vnp_TransactionType: vnp_TransactionType,
        vnp_TxnRef: vnp_TxnRef,
        vnp_Amount: vnp_Amount,
        vnp_TransactionNo: vnp_TransactionNo,
        vnp_CreateBy: vnp_CreateBy,
        vnp_OrderInfo: vnp_OrderInfo,
        vnp_TransactionDate: vnp_TransactionDate,
        vnp_CreateDate: vnp_CreateDate,
        vnp_IpAddr: vnp_IpAddr,
        vnp_SecureHash: vnp_SecureHash,
    };
    return dataObj;
};
exports.refund = refund;
const sortObject = (obj) => {
    const sorted = {};
    const str = [];
    let key;
    for (key in obj) {
        if (obj.hasOwnProperty(key)) {
            str.push(encodeURIComponent(key));
        }
    }
    str.sort();
    for (key = 0; key < str.length; key++) {
        sorted[str[key]] = encodeURIComponent(obj[str[key]]).replace(/%20/g, '+');
    }
    return sorted;
};
