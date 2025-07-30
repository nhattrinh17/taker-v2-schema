"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PartnerTypeEnum = exports.OtpRequestType = exports.ServiceTypeEnum = exports.SearchHistoryTypeEnum = exports.CashbackTransactionTypeEnum = exports.PayerTypeEnum = exports.CarpoolServiceTypeEnum = exports.VehicleTypeEnum = exports.VoucherTypeEnum = exports.VoucherTypeDiscountEnum = void 0;
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
var CarpoolServiceTypeEnum;
(function (CarpoolServiceTypeEnum) {
    CarpoolServiceTypeEnum["SINGLE_SEAT"] = "SINGLE_SEAT";
    CarpoolServiceTypeEnum["WHOLE_CAR"] = "WHOLE_CAR";
})(CarpoolServiceTypeEnum || (exports.CarpoolServiceTypeEnum = CarpoolServiceTypeEnum = {}));
var PayerTypeEnum;
(function (PayerTypeEnum) {
    PayerTypeEnum["SENDER"] = "SENDER";
    PayerTypeEnum["RECEIVER"] = "RECEIVER";
})(PayerTypeEnum || (exports.PayerTypeEnum = PayerTypeEnum = {}));
var CashbackTransactionTypeEnum;
(function (CashbackTransactionTypeEnum) {
    CashbackTransactionTypeEnum["CREDIT"] = "CREDIT";
    CashbackTransactionTypeEnum["DEBIT"] = "DEBIT";
})(CashbackTransactionTypeEnum || (exports.CashbackTransactionTypeEnum = CashbackTransactionTypeEnum = {}));
var SearchHistoryTypeEnum;
(function (SearchHistoryTypeEnum) {
    SearchHistoryTypeEnum["CARPOOL"] = "CARPOOL";
    SearchHistoryTypeEnum["DELIVERY"] = "DELIVERY";
})(SearchHistoryTypeEnum || (exports.SearchHistoryTypeEnum = SearchHistoryTypeEnum = {}));
var ServiceTypeEnum;
(function (ServiceTypeEnum) {
    ServiceTypeEnum["BOOKING"] = "BOOKING";
    ServiceTypeEnum["DELIVERY"] = "DELIVERY";
})(ServiceTypeEnum || (exports.ServiceTypeEnum = ServiceTypeEnum = {}));
var OtpRequestType;
(function (OtpRequestType) {
    OtpRequestType["EXISTED"] = "existed";
    OtpRequestType["NOT_EXISTED"] = "not-existed";
})(OtpRequestType || (exports.OtpRequestType = OtpRequestType = {}));
var PartnerTypeEnum;
(function (PartnerTypeEnum) {
    PartnerTypeEnum["SHOE_CLEANING"] = "SHOE_CLEANING";
})(PartnerTypeEnum || (exports.PartnerTypeEnum = PartnerTypeEnum = {}));
