"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConversationStatusEnum = exports.VehicleBookingStatusEnum = exports.CarrierCodeHistoryEnum = exports.DeliveryStatusEnum = exports.TripStatusEnum = exports.VehicleRegistryStatusEnum = exports.ShoeBookingStatusEnum = exports.StatusBlogEnum = exports.UserStatusEnum = void 0;
var UserStatusEnum;
(function (UserStatusEnum) {
    UserStatusEnum["PENDING"] = "PENDING";
    UserStatusEnum["ACTIVE"] = "ACTIVE";
    UserStatusEnum["BLOCKED"] = "BLOCKED";
})(UserStatusEnum || (exports.UserStatusEnum = UserStatusEnum = {}));
var StatusBlogEnum;
(function (StatusBlogEnum) {
    StatusBlogEnum["ACTIVE"] = "ACTIVE";
    StatusBlogEnum["INACTIVE"] = "INACTIVE";
})(StatusBlogEnum || (exports.StatusBlogEnum = StatusBlogEnum = {}));
var ShoeBookingStatusEnum;
(function (ShoeBookingStatusEnum) {
    ShoeBookingStatusEnum["PENDING"] = "PENDING";
    ShoeBookingStatusEnum["PENDING_PAYMENT"] = "PENDING_PAYMENT";
    ShoeBookingStatusEnum["FIND_SHOP"] = "FIND_SHOP";
    ShoeBookingStatusEnum["SHOP_ACCEPTED"] = "SHOP_ACCEPTED";
    ShoeBookingStatusEnum["WAITING"] = "WAITING";
    ShoeBookingStatusEnum["FIND_DRIVER"] = "FIND_DRIVER";
    ShoeBookingStatusEnum["PICKUP_INCOMING"] = "PICKUP_INCOMING";
    ShoeBookingStatusEnum["ARRIVING_AT_SHOP"] = "ARRIVING_AT_SHOP";
    ShoeBookingStatusEnum["IN_PROGRESS"] = "IN_PROGRESS";
    ShoeBookingStatusEnum["PAUSED"] = "PAUSED";
    ShoeBookingStatusEnum["RETURN_FIND_DRIVER"] = "RETURN_FIND_DRIVER";
    ShoeBookingStatusEnum["RETURN_PICKUP"] = "RETURN_PICKUP";
    ShoeBookingStatusEnum["RETURNING"] = "RETURNING";
    ShoeBookingStatusEnum["PENDING_PAYMENT_COMPLETION"] = "PENDING_PAYMENT_COMPLETION";
    ShoeBookingStatusEnum["COMPLETED"] = "COMPLETED";
    ShoeBookingStatusEnum["CANCELLED"] = "CANCELLED";
})(ShoeBookingStatusEnum || (exports.ShoeBookingStatusEnum = ShoeBookingStatusEnum = {}));
var VehicleRegistryStatusEnum;
(function (VehicleRegistryStatusEnum) {
    VehicleRegistryStatusEnum["PENDING"] = "PENDING";
    VehicleRegistryStatusEnum["ACTIVE"] = "ACTIVE";
    VehicleRegistryStatusEnum["REJECTED"] = "REJECTED";
})(VehicleRegistryStatusEnum || (exports.VehicleRegistryStatusEnum = VehicleRegistryStatusEnum = {}));
var TripStatusEnum;
(function (TripStatusEnum) {
    TripStatusEnum["PENDING"] = "PENDING";
    TripStatusEnum["IN_PROGRESS"] = "IN_PROGRESS";
    TripStatusEnum["COMPLETED"] = "COMPLETED";
    TripStatusEnum["CANCELLED"] = "CANCELLED";
})(TripStatusEnum || (exports.TripStatusEnum = TripStatusEnum = {}));
var DeliveryStatusEnum;
(function (DeliveryStatusEnum) {
    DeliveryStatusEnum["PENDING_PAYMENT"] = "PENDING_PAYMENT";
    DeliveryStatusEnum["FIND_DRIVER"] = "FIND_DRIVER";
    DeliveryStatusEnum["DRIVER_ACCEPTED"] = "DRIVER_ACCEPTED";
    DeliveryStatusEnum["WAITING"] = "WAITING";
    DeliveryStatusEnum["DRIVER_ARRIVING"] = "DRIVER_ARRIVING";
    DeliveryStatusEnum["IN_PROGRESS"] = "IN_PROGRESS";
    DeliveryStatusEnum["COMPLETED"] = "COMPLETED";
    DeliveryStatusEnum["CANCELLED"] = "CANCELLED";
    DeliveryStatusEnum["WAITING_DRIVER_ACCEPT"] = "WAITING_DRIVER_ACCEPT";
})(DeliveryStatusEnum || (exports.DeliveryStatusEnum = DeliveryStatusEnum = {}));
var CarrierCodeHistoryEnum;
(function (CarrierCodeHistoryEnum) {
    CarrierCodeHistoryEnum["PENDING"] = "PENDING";
    CarrierCodeHistoryEnum["APPROVED"] = "APPROVED";
    CarrierCodeHistoryEnum["REJECTED"] = "REJECTED";
})(CarrierCodeHistoryEnum || (exports.CarrierCodeHistoryEnum = CarrierCodeHistoryEnum = {}));
var VehicleBookingStatusEnum;
(function (VehicleBookingStatusEnum) {
    VehicleBookingStatusEnum["PENDING_CODE"] = "PENDING_CODE";
    VehicleBookingStatusEnum["PENDING_PAYMENT"] = "PENDING_PAYMENT";
    VehicleBookingStatusEnum["FIND_DRIVER"] = "FIND_DRIVER";
    VehicleBookingStatusEnum["WAITING"] = "WAITING";
    VehicleBookingStatusEnum["DRIVER_ARRIVING"] = "DRIVER_ARRIVING";
    VehicleBookingStatusEnum["IN_PROGRESS"] = "IN_PROGRESS";
    VehicleBookingStatusEnum["PENDING_PAYMENT_COMPLETION"] = "PENDING_PAYMENT_COMPLETION";
    VehicleBookingStatusEnum["COMPLETED"] = "COMPLETED";
    VehicleBookingStatusEnum["CANCELLED"] = "CANCELLED";
})(VehicleBookingStatusEnum || (exports.VehicleBookingStatusEnum = VehicleBookingStatusEnum = {}));
var ConversationStatusEnum;
(function (ConversationStatusEnum) {
    ConversationStatusEnum["ACTIVE"] = "ACTIVE";
    ConversationStatusEnum["INACTIVE"] = "INACTIVE";
})(ConversationStatusEnum || (exports.ConversationStatusEnum = ConversationStatusEnum = {}));
