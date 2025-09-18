export declare const SOCKET_EVENT: {
    SHOE_BOOKING_UPDATE: string;
    MESSAGE_UPDATE: string;
};
export declare const SHOE_BOOKING_UPDATE_STATUS: {
    FIND_SHOP: string;
    SHOP_ACCEPTED: string;
    FIND_SHOP_TIMEOUT: string;
    DRIVER_ACCEPTED: string;
    FIND_DRIVER: string;
    CANCELLED: string;
    DRIVER_NOTIFIED: string;
    CODE_EXPIRED: string;
    IN_PROGRESS: string;
    PICKUP_SOON: string;
    PICKUP_NOW: string;
    PENDING_PAYMENT: string;
    PENDING_PAYMENT_COMPLETION: string;
    COMPLETED: string;
    DRIVER_ARRIVING: string;
    OTHER_SHOP_ACCEPTED: string;
    CUSTOMER_CANCELLED: string;
    RETURNING: string;
    ARRIVING_AT_SHOP: string;
    PICKUP_INCOMING: string;
};
export declare const MESSAGE_UPDATE_STATUS: {
    CREATE_CONVERSATION: string;
    INACTIVE: string;
};
export declare const EventEmitChatSocket: {
    JoinRoom: string;
    AutoJoinRoom: string;
    LeaveRoom: string;
    MessageReceive: string;
    SendMessage: string;
};
