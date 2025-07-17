export const SOCKET_EVENT = {
  TRIP_UPDATE: 'trip_update',
  DELIVERY_UPDATE: 'delivery_update',
  VEHICLE_BOOKING_UPDATE: 'vehicle_booking_update',
};

export const TRIP_UPDATE_STATUS = {
  FIND_DRIVER_TIMEOUT: 'find-driver-timeout',
  DRIVER_ACCEPTED: 'driver-accepted',
  PENDING_TRIP: 'pending-trip',
  CANCEL_TRIP: 'cancel-trip',
  PAYMENT_SUCCESS: 'payment-success',
  WAITING_DRIVER_ACCEPT: 'waiting-driver-accept',
};

export const DELIVERY_UPDATE_STATUS = {
  FIND_DRIVER_TIMEOUT: 'find-driver-timeout',
  DRIVER_ACCEPTED: 'driver-accepted',
  PENDING_DELIVERY: 'pending-delivery',
  CANCEL_DELIVERY: 'cancel-delivery',
  PAYMENT_SUCCESS: 'payment-success',
  WAITING_DRIVER_ACCEPT: 'waiting-driver-accept',
};

export const VEHICLE_BOOKING_UPDATE_STATUS = {
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