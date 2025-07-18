"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QUEUE_VEHICLE_BOOKING_NAME = exports.SYSTEM_NOTIFICATION_QUEUE_NAME = exports.QUEUE_PAYMENT_NAME = exports.QUEUE_NAMES = void 0;
exports.QUEUE_NAMES = {
    PAYMENT: 'PAYMENT',
    SYSTEM_NOTIFICATION: 'SYSTEM-NOTIFICATION',
    VEHICLE_BOOKING: 'VEHICLE-BOOKING',
};
exports.QUEUE_PAYMENT_NAME = {
    PAYMENT_WALLET_MB: 'payment_wallet_mb',
    PAYMENT_CARPOOL_MB: 'payment_carpool_mb',
    PAYMENT_DELIVERY_MB: 'payment_delivery_mb',
    PAYMENT_VEHICLE_BOOKING_MB: 'payment_vehicle_booking_mb',
};
exports.SYSTEM_NOTIFICATION_QUEUE_NAME = {
    SEND_NOTIFICATION: 'send-notification',
};
exports.QUEUE_VEHICLE_BOOKING_NAME = {
    CREATE_VEHICLE_BOOKING: 'create-vehicle-booking',
    WAITING_VEHICLE_BOOKING: 'waiting-vehicle-booking',
};
