import { Injectable, Logger } from '@nestjs/common';
import axios from 'axios';
import RedisService from './redis.service';

export type SmsRequestProps = {
  toNumber: string;
  otp: string;
  type?: string;
};

@Injectable()
export class SmsService {
  private readonly logger = new Logger(SmsService.name);
  constructor(private readonly redisService: RedisService) {}

  async getToken() {
    try {
      const key = `${process.env.APP_ID}:sms:fpt:token`;
      const tokenRedis = await this.redisService.get(key);
      if (tokenRedis) return tokenRedis;

      // Call get token
      const res = await axios.post(
        process.env.URL_GET_TOKEN,
        {
          client_id: process.env.CLIENT_ID,
          client_secret: process.env.CLIENT_SECRET,
          scope: 'send_brandname_otp send_brandname',
          session_id: new Date().getTime(),
          grant_type: 'client_credentials',
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );
      const accessToken = res?.data?.access_token || null;
      const expiresToken = res?.data?.expires_in || null;
      console.log('🚀 ~ SmsService ~ getToken ~ expiresToken:', accessToken, expiresToken);

      if (accessToken && expiresToken) {
        const saveToken = await this.redisService.setExpire(key, accessToken, +expiresToken - 10);
        console.log('🚀 ~ SmsService ~ getToken ~ saveToken:', saveToken);
      }
      return accessToken;
    } catch (e) {
      console.log(`Get token error ${JSON.stringify(e)}`);
    }
  }

  async send({ toNumber, otp, type }: SmsRequestProps) {
    try {
      const token = await this.getToken();
      let message = ``;
      if (type == 'password') {
        message = `XIMI VN: Mat khau moi cua ban la: ${otp}. Luu y: Khong cung cap mat khau cho nguoi khac`;
      } else {
        message = `XIMI VN: Ma xac thuc OTP cua ban la ${otp}.Thoi gian hieu luc 3 phut. Luu y: Khong cung cap OTP cho nguoi khac`;
      }
      const responseSendSms = await axios.post(
        process.env.URL_SEND_SMS,
        {
          access_token: token,
          session_id: new Date().getTime(),
          BrandName: 'XIMI VN',
          Phone: toNumber,
          Message: Buffer.from(message).toString('base64'),
          RequestId: new Date().getTime(),
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );
      this.logger.log(`Send sms to ${toNumber} with otp ${otp}, responseSendSms: ${JSON.stringify(responseSendSms.data)}`);
      return true;
    } catch (error) {
      this.logger.error(`Send sms error ${error?.data?.error_description}`);
      return false;
    }
  }
}
