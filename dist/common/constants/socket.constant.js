"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventEmitChatSocket = exports.MESSAGE_UPDATE_STATUS = exports.SHOE_BOOKING_UPDATE_STATUS = exports.SOCKET_EVENT = void 0;
exports.SOCKET_EVENT = {
    SHOE_BOOKING_UPDATE: 'vehicle_booking_update',
    MESSAGE_UPDATE: 'message_update',
};
exports.SHOE_BOOKING_UPDATE_STATUS = {
    FIND_SHOP: 'find-shop',
    SHOP_ACCEPTED: 'shop-accepted',
    FIND_SHOP_TIMEOUT: 'find-shop-timeout',
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
exports.MESSAGE_UPDATE_STATUS = {
    CREATE_CONVERSATION: 'create-conversation',
};
exports.EventEmitChatSocket = {
    JoinRoom: 'join-room',
    LeaveRoom: 'leave-room',
    MessageReceive: 'message-receive',
    SendMessage: 'send-message',
};
