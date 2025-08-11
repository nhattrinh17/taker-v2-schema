export const SOCKET_EVENT = {
  SHOE_BOOKING_UPDATE: 'vehicle_booking_update',
  MESSAGE_UPDATE: 'message_update',
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
};

export const MESSAGE_UPDATE_STATUS = {
  CREATE_CONVERSATION: 'create-conversation',
}