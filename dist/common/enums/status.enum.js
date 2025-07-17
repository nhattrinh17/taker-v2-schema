"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VehicleBookingStatusEnum = exports.CarrierCodeHistoryEnum = exports.DeliveryStatusEnum = exports.TripStatusEnum = exports.CarRegistryStatusEnum = exports.CarpoolBookingStatusEnum = exports.StatusBlogEnum = exports.UserStatusEnum = void 0;
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
var CarpoolBookingStatusEnum;
(function (CarpoolBookingStatusEnum) {
    CarpoolBookingStatusEnum["PENDING"] = "PENDING";
    CarpoolBookingStatusEnum["PENDING_PAYMENT"] = "PENDING_PAYMENT";
    CarpoolBookingStatusEnum["FIND_DRIVER"] = "FIND_DRIVER";
    CarpoolBookingStatusEnum["DRIVER_ACCEPTED"] = "DRIVER_ACCEPTED";
    CarpoolBookingStatusEnum["WAITING"] = "WAITING";
    CarpoolBookingStatusEnum["DRIVER_ARRIVING"] = "DRIVER_ARRIVING";
    CarpoolBookingStatusEnum["IN_PROGRESS"] = "IN_PROGRESS";
    CarpoolBookingStatusEnum["PENDING_PAYMENT_COMPLETION"] = "PENDING_PAYMENT_COMPLETION";
    CarpoolBookingStatusEnum["COMPLETED"] = "COMPLETED";
    CarpoolBookingStatusEnum["CANCELLED"] = "CANCELLED";
    CarpoolBookingStatusEnum["WAITING_DRIVER_ACCEPT"] = "WAITING_DRIVER_ACCEPT";
})(CarpoolBookingStatusEnum || (exports.CarpoolBookingStatusEnum = CarpoolBookingStatusEnum = {}));
var CarRegistryStatusEnum;
(function (CarRegistryStatusEnum) {
    CarRegistryStatusEnum["PENDING"] = "PENDING";
    CarRegistryStatusEnum["ACTIVE"] = "ACTIVE";
    CarRegistryStatusEnum["REJECTED"] = "REJECTED";
})(CarRegistryStatusEnum || (exports.CarRegistryStatusEnum = CarRegistryStatusEnum = {}));
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
