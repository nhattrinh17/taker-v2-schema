"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionSource = exports.TransactionLogStatus = exports.TransactionStatus = exports.TransactionType = void 0;
var TransactionType;
(function (TransactionType) {
    TransactionType["DEPOSIT"] = "DEPOSIT";
    TransactionType["WITHDRAW"] = "WITHDRAW";
})(TransactionType || (exports.TransactionType = TransactionType = {}));
var TransactionStatus;
(function (TransactionStatus) {
    TransactionStatus["PENDING"] = "PENDING";
    TransactionStatus["SUCCESS"] = "SUCCESS";
    TransactionStatus["FAILED"] = "FAILED";
    TransactionStatus["REFUND"] = "REFUND";
})(TransactionStatus || (exports.TransactionStatus = TransactionStatus = {}));
var TransactionLogStatus;
(function (TransactionLogStatus) {
    TransactionLogStatus["FAILED"] = "FAILED";
    TransactionLogStatus["SUCCESS"] = "SUCCESS";
    TransactionLogStatus["UN_KNOW"] = "UN_KNOW";
})(TransactionLogStatus || (exports.TransactionLogStatus = TransactionLogStatus = {}));
var TransactionSource;
(function (TransactionSource) {
    TransactionSource["WALLET"] = "WALLET";
    TransactionSource["CARPOOL"] = "CARPOOL";
    TransactionSource["DELIVERY"] = "DELIVERY";
    TransactionSource["VEHICLE_BOOKING"] = "VEHICLE_BOOKING";
})(TransactionSource || (exports.TransactionSource = TransactionSource = {}));
