import * as bcrypt from 'bcrypt';
import { customAlphabet } from 'nanoid';

export const generateHashedPassword = (password: string) => {
  return bcrypt.hashSync(password, 10);
};

export const validPassword = (password: string, passwordHashed: string) => {
  return bcrypt.compareSync(password, passwordHashed);
};

export const orderId = () => {
  const alphabet = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  const nanoid = customAlphabet(alphabet, 20);
  return nanoid();
};

export const generateTripId = () => {
  let now = Date.now().toString(); // '1492341545873'
  // pad with extra random digit
  now += now + Math.floor(Math.random() * 10);
  // format
  return [now.slice(0, 4), now.slice(4, 10), now.slice(10, 14)].join('-');
};

export const checkIdType = (id: string) => {
  const orderIdPattern = /^[0-9A-Za-z]{20}$/;
  const tripIdPattern = /^[0-9]{4}-[0-9]{6}-[0-9]{4}$/;

  if (orderIdPattern.test(id)) {
    return 'orderId';
  } else if (tripIdPattern.test(id)) {
    return 'tripId';
  } else {
    return 'unknown';
  }
};

export function compressUuid(uuid: string, length = 6): string {
  const hex = uuid.replace(/-/g, '');
  const bigInt = BigInt('0x' + hex);
  return bigInt.toString(36).slice(0, length);
}

export function generateOrderId(uuid: string): string {
  const now = new Date();
  const pad = (n: number, l = 2) => n.toString().padStart(l, '0');

  const datePart = `${now.getFullYear()}${pad(now.getMonth() + 1)}${pad(now.getDate())}`;
  const timePart = `${pad(now.getHours())}${pad(now.getMinutes())}${pad(now.getSeconds())}${pad(now.getMilliseconds(), 3)}`;

  const shortUuid = compressUuid(uuid, 6); // rút gọn UUID thành string ngắn

  const randomPart = Math.floor(1000 + Math.random() * 9000); // số ngẫu nhiên 4 chữ số

  return `${datePart}-${timePart}-${shortUuid}-${randomPart}`;
}