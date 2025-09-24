export const SOCKET_EVENT = {
  SHOE_BOOKING_UPDATE: 'shoe_booking_update',
  MESSAGE_UPDATE: 'message_update',
  WALLET_UPDATE: 'wallet_update',
};

export const SHOE_BOOKING_UPDATE_STATUS = {
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
  OTHER_SHOP_ACCEPTED: 'other-shop-accepted',
  CUSTOMER_CANCELLED: 'customer-cancelled',
  RETURNING: 'returning',
  ARRIVING_AT_SHOP: 'arriving-at-shop',
  PICKUP_INCOMING: 'pickup-incoming',
};

export const MESSAGE_UPDATE_STATUS = {
  CREATE_CONVERSATION: 'create-conversation',
  INACTIVE: 'inactive',
}

export const WALLET_UPDATE_STATUS = {
  DEPOSIT_SUCCESS: 'deposit-success',
  WITHDRAW_SUCCESS: 'withdraw-success',
}

export const EventEmitChatSocket = {
  JoinRoom: 'join-room',
  AutoJoinRoom: 'auto-join-room',
  LeaveRoom: 'leave-room',
  MessageReceive: 'message-receive',
  SendMessage: 'send-message',
};