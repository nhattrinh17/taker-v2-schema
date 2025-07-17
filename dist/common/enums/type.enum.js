"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceTypeEnum = exports.SearchHistoryTypeEnum = exports.CashbackTransactionTypeEnum = exports.PayerTypeEnum = exports.CarpoolServiceTypeEnum = exports.VehicleTypeEnum = exports.VoucherTypeEnum = exports.VoucherTypeDiscountEnum = void 0;
var VoucherTypeDiscountEnum;
(function (VoucherTypeDiscountEnum) {
    VoucherTypeDiscountEnum["FIXED"] = "FIXED";
    VoucherTypeDiscountEnum["PERCENT"] = "PERCENT";
})(VoucherTypeDiscountEnum || (exports.VoucherTypeDiscountEnum = VoucherTypeDiscountEnum = {}));
var VoucherTypeEnum;
(function (VoucherTypeEnum) {
    VoucherTypeEnum["CARPOOL"] = "CARPOOL";
    VoucherTypeEnum["DELIVERY"] = "DELIVERY";
    VoucherTypeEnum["BIKE_BOOKING"] = "BIKE_BOOKING";
    VoucherTypeEnum["CAR_BOOKING"] = "CAR_BOOKING";
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
