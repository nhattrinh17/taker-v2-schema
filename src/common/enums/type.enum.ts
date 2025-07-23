export enum VoucherTypeDiscountEnum {
  FIXED = 'FIXED',
  PERCENT = 'PERCENT',
}

export enum VoucherTypeEnum {
  CARPOOL = 'CARPOOL',
  DELIVERY = 'DELIVERY',
  BIKE_BOOKING = 'BIKE_BOOKING',
  CAR_BOOKING = 'CAR_BOOKING',
}

export enum VehicleTypeEnum {
  CAR = 'CAR',
  BIKE = 'BIKE',
}

export enum CarpoolServiceTypeEnum {
  SINGLE_SEAT = 'SINGLE_SEAT',
  WHOLE_CAR = 'WHOLE_CAR',
}

export enum PayerTypeEnum {
  SENDER = 'SENDER',
  RECEIVER = 'RECEIVER',
}

export enum CashbackTransactionTypeEnum {
  CREDIT = 'CREDIT', // Nhan thuong
  DEBIT = 'DEBIT', // rut tien
}

export enum SearchHistoryTypeEnum {
  CARPOOL = 'CARPOOL',
  DELIVERY = 'DELIVERY',
}

export enum ServiceTypeEnum {
  BOOKING = 'BOOKING',
  DELIVERY = 'DELIVERY',
}

export enum OtpRequestType {
  EXISTED = 'existed',
  NOT_EXISTED = 'not-existed',
}