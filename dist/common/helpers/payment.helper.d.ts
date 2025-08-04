import { IReturnUrl } from '../constants/app.constant';
interface PropType {
    amount: number;
    ip: string;
    orderId: string;
    orderInfo?: string;
}
export declare const createPaymentUrl: ({ amount, ip, orderId, orderInfo, }: PropType) => string;
export declare const validateSecureHash: (query: IReturnUrl) => boolean;
export declare const refund: (orderId: string, amount: number, ip?: string) => {
    vnp_RequestId: string;
    vnp_Version: string;
    vnp_Command: string;
    vnp_TmnCode: string;
    vnp_TransactionType: string;
    vnp_TxnRef: string;
    vnp_Amount: number;
    vnp_TransactionNo: string;
    vnp_CreateBy: string;
    vnp_OrderInfo: string;
    vnp_TransactionDate: string;
    vnp_CreateDate: string;
    vnp_IpAddr: string;
    vnp_SecureHash: string;
};
export {};
