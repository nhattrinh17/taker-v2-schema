export enum TransactionType {
  DEPOSIT = 'DEPOSIT',
  WITHDRAW = 'WITHDRAW',
}

export enum TransactionStatus {
  PENDING = 'PENDING',
  SUCCESS = 'SUCCESS',
  FAILED = 'FAILED',
  REFUND = 'REFUND',
}

export enum TransactionLogStatus {
  FAILED = 'FAILED',
  SUCCESS = 'SUCCESS',
  UN_KNOW = 'UN_KNOW',
}

export enum TransactionSource {
  WALLET = 'WALLET',
}
