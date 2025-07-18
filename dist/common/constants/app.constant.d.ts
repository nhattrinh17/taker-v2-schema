export interface IUser {
    sub: string;
    type: string;
}
export declare const AppType: {
    customers: string;
    partners: string;
    admins: string;
};
export type IPeriod = "week" | "month" | "today" | "custom";
export declare const LATITUDE_PATTERN: RegExp;
export declare const LONGITUDE_PATTERN: RegExp;
export interface IReturnUrl {
    vnp_Amount: string;
    vnp_BankCode: string;
    vnp_BankTranNo: string;
    vnp_CardType: string;
    vnp_OrderInfo: string;
    vnp_PayDate: string;
    vnp_ResponseCode: string;
    vnp_TmnCode: string;
    vnp_TransactionNo: string;
    vnp_TransactionStatus: string;
    vnp_TxnRef: string;
    vnp_SecureHash: string;
    vnp_SecureHashType?: string;
}
export interface INotificationPayload {
    token: string;
    title: string;
    body: string;
    data?: {
        [key: string]: string;
    };
    sound?: string;
}
export declare const SOCKET_PREFIX = "SOCKET:";
export declare const SCREEN_PARTNER: {
    CALL: string;
    CARPOOL_BOOKING: string;
    DELIVERY: string;
    VEHICLE_BOOKING: string;
};
export interface DayOperatingHours {
    open: string;
    close: string;
}
export interface OperatingHours {
    monday?: DayOperatingHours | null;
    tuesday?: DayOperatingHours | null;
    wednesday?: DayOperatingHours | null;
    thursday?: DayOperatingHours | null;
    friday?: DayOperatingHours | null;
    saturday?: DayOperatingHours | null;
    sunday?: DayOperatingHours | null;
}
export declare const BASE_OPERATING_HOURS: OperatingHours;
