"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateConversationTypeEnum = exports.CustomPayloadTypeEnum = exports.MessageTypeEnum = exports.ActorTypeEnum = exports.PartnerTypeEnum = exports.OtpRequestType = exports.CashbackTransactionTypeEnum = exports.VehicleTypeEnum = exports.VoucherTypeEnum = exports.VoucherTypeDiscountEnum = void 0;
var VoucherTypeDiscountEnum;
(function (VoucherTypeDiscountEnum) {
    VoucherTypeDiscountEnum["FIXED"] = "FIXED";
    VoucherTypeDiscountEnum["PERCENT"] = "PERCENT";
})(VoucherTypeDiscountEnum || (exports.VoucherTypeDiscountEnum = VoucherTypeDiscountEnum = {}));
var VoucherTypeEnum;
(function (VoucherTypeEnum) {
    VoucherTypeEnum["SHOE_CLEANING"] = "SHOE_CLEANING";
})(VoucherTypeEnum || (exports.VoucherTypeEnum = VoucherTypeEnum = {}));
var VehicleTypeEnum;
(function (VehicleTypeEnum) {
    VehicleTypeEnum["CAR"] = "CAR";
    VehicleTypeEnum["BIKE"] = "BIKE";
})(VehicleTypeEnum || (exports.VehicleTypeEnum = VehicleTypeEnum = {}));
var CashbackTransactionTypeEnum;
(function (CashbackTransactionTypeEnum) {
    CashbackTransactionTypeEnum["CREDIT"] = "CREDIT";
    CashbackTransactionTypeEnum["DEBIT"] = "DEBIT";
})(CashbackTransactionTypeEnum || (exports.CashbackTransactionTypeEnum = CashbackTransactionTypeEnum = {}));
var OtpRequestType;
(function (OtpRequestType) {
    OtpRequestType["EXISTED"] = "existed";
    OtpRequestType["NOT_EXISTED"] = "not-existed";
})(OtpRequestType || (exports.OtpRequestType = OtpRequestType = {}));
var PartnerTypeEnum;
(function (PartnerTypeEnum) {
    PartnerTypeEnum["SHOE_CLEANING"] = "SHOE_CLEANING";
})(PartnerTypeEnum || (exports.PartnerTypeEnum = PartnerTypeEnum = {}));
var ActorTypeEnum;
(function (ActorTypeEnum) {
    ActorTypeEnum["CUSTOMER"] = "CUSTOMER";
    ActorTypeEnum["PARTNER"] = "PARTNER";
    ActorTypeEnum["DRIVER"] = "DRIVER";
    ActorTypeEnum["SYSTEM"] = "SYSTEM";
    ActorTypeEnum["ADMIN"] = "ADMIN";
})(ActorTypeEnum || (exports.ActorTypeEnum = ActorTypeEnum = {}));
var MessageTypeEnum;
(function (MessageTypeEnum) {
    MessageTypeEnum["TEXT"] = "TEXT";
    MessageTypeEnum["IMAGE"] = "IMAGE";
    MessageTypeEnum["VIDEO"] = "VIDEO";
    MessageTypeEnum["AUDIO"] = "AUDIO";
    MessageTypeEnum["CUSTOM"] = "CUSTOM";
})(MessageTypeEnum || (exports.MessageTypeEnum = MessageTypeEnum = {}));
var CustomPayloadTypeEnum;
(function (CustomPayloadTypeEnum) {
    CustomPayloadTypeEnum["SHOE_BOOKING"] = "SHOE_BOOKING";
})(CustomPayloadTypeEnum || (exports.CustomPayloadTypeEnum = CustomPayloadTypeEnum = {}));
var CreateConversationTypeEnum;
(function (CreateConversationTypeEnum) {
    CreateConversationTypeEnum["SHOE_BOOKING"] = "shoe-booking";
    CreateConversationTypeEnum["ACCOUNT"] = "account";
})(CreateConversationTypeEnum || (exports.CreateConversationTypeEnum = CreateConversationTypeEnum = {}));
