"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatusCallHistory = exports.TypeCallHistory = void 0;
var TypeCallHistory;
(function (TypeCallHistory) {
    TypeCallHistory["CUSTOMER_CALL"] = "CUSTOMER_CALL";
    TypeCallHistory["PARTNER_CALL"] = "PARTNER_CALL";
})(TypeCallHistory || (exports.TypeCallHistory = TypeCallHistory = {}));
var StatusCallHistory;
(function (StatusCallHistory) {
    StatusCallHistory["WAITING"] = "WAITING";
    StatusCallHistory["CALLING"] = "CALLING";
    StatusCallHistory["SUCCESS"] = "SUCCESS";
    StatusCallHistory["REJECTED"] = "REJECTED ";
    StatusCallHistory["MISS"] = "MISS";
})(StatusCallHistory || (exports.StatusCallHistory = StatusCallHistory = {}));
//# sourceMappingURL=callHistory.enum.js.map