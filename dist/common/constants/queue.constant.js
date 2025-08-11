"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SHOE_BOOKING_QUEUE_NAME = exports.SYSTEM_NOTIFICATION_QUEUE_NAME = exports.QUEUE_PAYMENT_NAME = exports.QUEUE_NAMES = void 0;
exports.QUEUE_NAMES = {
    PAYMENT: 'PAYMENT',
    SYSTEM_NOTIFICATION: 'SYSTEM-NOTIFICATION',
    SHOE_BOOKING: 'SHOE_BOOKING',
    JOIN_ROOM: 'join-room',
    LEAVE_ROOM: 'leave-room',
};
exports.QUEUE_PAYMENT_NAME = {
    PAYMENT_MB: 'payment_mb',
};
exports.SYSTEM_NOTIFICATION_QUEUE_NAME = {
    SEND_NOTIFICATION: 'send-notification',
};
exports.SHOE_BOOKING_QUEUE_NAME = {
    CREATE_SHOE_BOOKING: 'create-shoe-booking',
    FIND_DRIVER: 'find-driver',
};
