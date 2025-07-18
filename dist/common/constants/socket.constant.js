"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VEHICLE_BOOKING_UPDATE_STATUS = exports.DELIVERY_UPDATE_STATUS = exports.TRIP_UPDATE_STATUS = exports.SOCKET_EVENT = void 0;
exports.SOCKET_EVENT = {
    TRIP_UPDATE: 'trip_update',
    DELIVERY_UPDATE: 'delivery_update',
    VEHICLE_BOOKING_UPDATE: 'vehicle_booking_update',
};
exports.TRIP_UPDATE_STATUS = {
    FIND_DRIVER_TIMEOUT: 'find-driver-timeout',
    DRIVER_ACCEPTED: 'driver-accepted',
    PENDING_TRIP: 'pending-trip',
    CANCEL_TRIP: 'cancel-trip',
    PAYMENT_SUCCESS: 'payment-success',
    WAITING_DRIVER_ACCEPT: 'waiting-driver-accept',
};
exports.DELIVERY_UPDATE_STATUS = {
    FIND_DRIVER_TIMEOUT: 'find-driver-timeout',
    DRIVER_ACCEPTED: 'driver-accepted',
    PENDING_DELIVERY: 'pending-delivery',
    CANCEL_DELIVERY: 'cancel-delivery',
    PAYMENT_SUCCESS: 'payment-success',
    WAITING_DRIVER_ACCEPT: 'waiting-driver-accept',
};
exports.VEHICLE_BOOKING_UPDATE_STATUS = {
    FIND_DRIVER_TIMEOUT: 'find-driver-timeout',
    DRIVER_ACCEPTED: 'driver-accepted',
    FIND_DRIVER: 'find-driver',
    CANCELLED: 'cancelled',
    DRIVER_NOTIFIED: 'driver-notified',
    CODE_EXPIRED: 'code-expired',
    IN_PROGRESS: 'in-progress',
    PICKUP_SOON: 'pickup-soon',
    PICKUP_NOW: 'pickup-now',
    PENDING_PAYMENT: 'pending-payment',
    PENDING_PAYMENT_COMPLETION: 'pending-payment-completion',
    COMPLETED: 'completed',
    DRIVER_ARRIVING: 'driver-arriving',
};
//# sourceMappingURL=socket.constant.js.map