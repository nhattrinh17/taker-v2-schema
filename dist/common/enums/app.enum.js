"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VehiclePriceLevelEnum = exports.RankingType = exports.ActionEnum = exports.VoucherPaymentMethodEnum = exports.TypePressBlogEnum = void 0;
var TypePressBlogEnum;
(function (TypePressBlogEnum) {
    TypePressBlogEnum["NAVIGATION"] = "NAVIGATION";
    TypePressBlogEnum["REDIRECT_WEB"] = "REDIRECT_WEB";
})(TypePressBlogEnum || (exports.TypePressBlogEnum = TypePressBlogEnum = {}));
var VoucherPaymentMethodEnum;
(function (VoucherPaymentMethodEnum) {
    VoucherPaymentMethodEnum["BANK"] = "BANK";
    VoucherPaymentMethodEnum["CASH"] = "CASH";
    VoucherPaymentMethodEnum["WALLET"] = "WALLET";
    VoucherPaymentMethodEnum["ALL"] = "ALL";
})(VoucherPaymentMethodEnum || (exports.VoucherPaymentMethodEnum = VoucherPaymentMethodEnum = {}));
var ActionEnum;
(function (ActionEnum) {
    ActionEnum["VIEW"] = "VIEW";
    ActionEnum["CREATE"] = "CREATE";
    ActionEnum["UPDATE"] = "UPDATE";
    ActionEnum["DELETE"] = "DELETE";
    ActionEnum["EXPORT"] = "EXPORT";
})(ActionEnum || (exports.ActionEnum = ActionEnum = {}));
var RankingType;
(function (RankingType) {
    RankingType["REVENUE"] = "revenue";
    RankingType["ORDERS"] = "orders";
})(RankingType || (exports.RankingType = RankingType = {}));
var VehiclePriceLevelEnum;
(function (VehiclePriceLevelEnum) {
    VehiclePriceLevelEnum[VehiclePriceLevelEnum["STANDARD"] = 1] = "STANDARD";
    VehiclePriceLevelEnum[VehiclePriceLevelEnum["ECONOMY"] = 2] = "ECONOMY";
    VehiclePriceLevelEnum[VehiclePriceLevelEnum["PREMIUM"] = 3] = "PREMIUM";
})(VehiclePriceLevelEnum || (exports.VehiclePriceLevelEnum = VehiclePriceLevelEnum = {}));
//# sourceMappingURL=app.enum.js.map