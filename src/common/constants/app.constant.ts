export interface IUser {
  sub: string;
  type: string;
}

export const AppType = {
  customers: "customers",
  partners: "partners",
  admins: "admins",
};

export type IPeriod = "week" | "month" | "today" | "custom";

export const LATITUDE_PATTERN =
  /^(\+|-)?(?:90(?:(?:\.0{1,6})?)|(?:[0-9]|[1-8][0-9])(?:(?:\.[0-9]{1,6})?))$/;
export const LONGITUDE_PATTERN =
  /^(\+|-)?(?:180(?:(?:\.0{1,6})?)|(?:[0-9]|[1-9][0-9]|1[0-7][0-9])(?:(?:\.[0-9]{1,6})?))$/;

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
  data?: { [key: string]: string };
  sound?: string;
}

export const SOCKET_PREFIX = "SOCKET:";

export const SCREEN_PARTNER = {
  CALL: "CALL",
  CARPOOL_BOOKING: "CARPOOL_BOOKING",
  DELIVERY: "DELIVERY",
  VEHICLE_BOOKING: "VEHICLE_BOOKING",
};

export interface IDayOperatingHours {
  open: string;  // 'HH:mm'
  close: string; // 'HH:mm'
}

export interface IOperatingHours {
  monday?: IDayOperatingHours | null;
  tuesday?: IDayOperatingHours | null;
  wednesday?: IDayOperatingHours | null;
  thursday?: IDayOperatingHours | null;
  friday?: IDayOperatingHours | null;
  saturday?: IDayOperatingHours | null;
  sunday?: IDayOperatingHours | null;
}

export const BASE_OPERATING_HOURS: IOperatingHours = {
  monday: null,
  tuesday: null,
  wednesday: null,
  thursday: null,
  friday: null,
  saturday: null,
  sunday: null,
};

export interface IOtp {
  otp: string;
  expiredAt: number;
  otpExpiredAt: number;
  count: number;
}

export const RESOLUTION = 9;
