export enum VoucherTypeDiscountEnum {
  FIXED = "FIXED",
  PERCENT = "PERCENT",
}

export enum VoucherTypeEnum {
  SHOE_CLEANING = "SHOE_CLEANING",
}

export enum VehicleTypeEnum {
  CAR = "CAR",
  BIKE = "BIKE",
}

export enum CashbackTransactionTypeEnum {
  CREDIT = "CREDIT", // Nhan thuong
  DEBIT = "DEBIT", // rut tien
}

export enum OtpRequestType {
  EXISTED = "existed",
  NOT_EXISTED = "not-existed",
}

export enum PartnerTypeEnum {
  SHOE_CLEANING = "SHOE_CLEANING",
}

export enum ActorTypeEnum {
  CUSTOMER = "CUSTOMER",
  PARTNER = "PARTNER",
  DRIVER = "DRIVER",
  SYSTEM = "SYSTEM",
  ADMIN = "ADMIN",
}

export enum MessageTypeEnum {
  TEXT = "TEXT",
  IMAGE = "IMAGE",
  VIDEO = "VIDEO",
  AUDIO = "AUDIO",
  CUSTOM = "CUSTOM",
}

export enum CustomPayloadTypeEnum {
  SHOE_BOOKING = "SHOE_BOOKING",
}

export enum CreateConversationTypeEnum {
  SHOE_BOOKING = "shoe-booking",
  ACCOUNT = "account",
}
