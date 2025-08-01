export enum UserStatusEnum {
  PENDING = 'PENDING',
  ACTIVE = 'ACTIVE',
  BLOCKED = 'BLOCKED',
}

export enum StatusBlogEnum {
  ACTIVE = 'ACTIVE',
  INACTIVE = 'INACTIVE',
}

export enum ShoeBookingStatusEnum {
  // 📦 Khởi tạo & tìm shop
  PENDING = 'PENDING',                       // Đơn mới tạo
  PENDING_PAYMENT = 'PENDING_PAYMENT',       // Đang chờ thanh toán lần 1
  FIND_SHOP = 'FIND_SHOP',                   // Đang tìm shop
  SHOP_ACCEPTED = 'SHOP_ACCEPTED',           // Shop đã nhận đơn
  WAITING = 'WAITING',                       // Đơn đang tạm chờ (chưa có tài xế, shop bận...)

  // 🚚 Gửi giày đến shop
  FIND_DRIVER = 'FIND_DRIVER',               // Tìm tài xế
  PICKUP_INCOMING = 'PICKUP_INCOMING',           // Đã lấy giày thành công
  ARRIVING_AT_SHOP = 'ARRIVING_AT_SHOP',     // Tài xế đang đến shop

  // 🛠️ Xử lý giày
  IN_PROGRESS = 'IN_PROGRESS',               // Đang xử lý / làm dịch vụ
  PAUSED = 'PAUSED',                         // Shop tạm dừng xử lý (lý do kỹ thuật, khách yêu cầu...)

  // 🔁 Trả giày
  RETURN_FIND_DRIVER = 'RETURN_FIND_DRIVER', // Tìm tài xế trả giày
  RETURN_PICKUP = 'RETURN_PICKUP',           // Tài xế đến shop lấy giày trả
  RETURNING = 'RETURNING',
  PENDING_PAYMENT_COMPLETION = 'PENDING_PAYMENT_COMPLETION', // Chờ thanh toán sau dịch vụ
  COMPLETED = 'COMPLETED',
  CANCELLED = 'CANCELLED',
}


export enum CarRegistryStatusEnum {
  PENDING = 'PENDING',
  ACTIVE = 'ACTIVE',
  REJECTED = 'REJECTED',
}

export enum TripStatusEnum {
  PENDING = 'PENDING',
  IN_PROGRESS = 'IN_PROGRESS',
  COMPLETED = 'COMPLETED',
  CANCELLED = 'CANCELLED',
}

export enum DeliveryStatusEnum {
  PENDING_PAYMENT = 'PENDING_PAYMENT',
  FIND_DRIVER = 'FIND_DRIVER',
  DRIVER_ACCEPTED = 'DRIVER_ACCEPTED',
  WAITING = 'WAITING',
  DRIVER_ARRIVING = 'DRIVER_ARRIVING',
  IN_PROGRESS = 'IN_PROGRESS',
  COMPLETED = 'COMPLETED',
  CANCELLED = 'CANCELLED',
  WAITING_DRIVER_ACCEPT = 'WAITING_DRIVER_ACCEPT',
}

export enum CarrierCodeHistoryEnum {
  PENDING = 'PENDING',
  APPROVED = 'APPROVED',
  REJECTED = 'REJECTED',
}

export enum VehicleBookingStatusEnum {
  PENDING_CODE = 'PENDING_CODE',
  PENDING_PAYMENT = 'PENDING_PAYMENT',
  FIND_DRIVER = 'FIND_DRIVER',
  WAITING = 'WAITING',
  DRIVER_ARRIVING = 'DRIVER_ARRIVING',
  IN_PROGRESS = 'IN_PROGRESS',
  PENDING_PAYMENT_COMPLETION = 'PENDING_PAYMENT_COMPLETION',
  COMPLETED = 'COMPLETED',
  CANCELLED = 'CANCELLED',
}