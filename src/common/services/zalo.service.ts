import { Injectable, Logger } from '@nestjs/common';
import RedisService from './redis.service';
import axios from 'axios';

interface IZaloToken {
  access_token: string;
  expires_in: number;
  refresh_token: string;
}

@Injectable()
export class ZaloService {
  private readonly logger = new Logger(ZaloService.name);

  constructor(private readonly redisService: RedisService) {}

  async getAccessToken() {
    try {
      const raw = await this.redisService.get('zalo_token');

      if (!raw) {
        await this.redisService.set(
          'zalo_token',
          JSON.stringify({
            access_token: '',
            expires_in: 0,
            refresh_token: '',
          }),
        );
        throw new Error('Zalo access token not found');
      }

      let { access_token, refresh_token, expires_in }: IZaloToken = JSON.parse(raw);
      const currentTime = Date.now();

      if (currentTime >= expires_in) {
        this.logger.warn('Zalo access token has expired, refreshing token');
        // Logic to refresh the token should be implemented here
        access_token = await this.refreshAccessToken(refresh_token);
      }
      return access_token;
    } catch (error) {
      this.logger.error('Error retrieving Zalo access token from Redis', error);
      throw error;
    }
  }

  async refreshAccessToken(refresh_token: string) {
    try {
      this.logger.log('Refreshing Zalo access token');
      const { data } = await axios.post(
        'https://oauth.zaloapp.com/v4/oa/access_token',
        new URLSearchParams({
          refresh_token,
          app_id: process.env.ZALO_APP_ID,
          grant_type: 'refresh_token',
        }),
        {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            secret_key: process.env.ZALO_APP_SECRET_KEY,
          },
        },
      );

      data.expires_in = Date.now() + parseInt(data.expires_in) * 1000; // Convert seconds to milliseconds
      await this.redisService.set('zalo_token', JSON.stringify(data));
      return data.access_token;
    } catch (error) {
      this.logger.error('Error refreshing Zalo access token', error);
      throw error;
    }
  }

  async sendOtp(phone: string, otp: string) {
    try {
      const accessToken = await this.getAccessToken();
      const znsUrl = 'https://business.openapi.zalo.me/message/template';

      const response = await axios.post(
        znsUrl,
        {
          phone,
          template_id: process.env.ZALO_TEMPLATE_ID,
          template_data: {
            otp,
          },
          tracking_id: `otp-${Date.now()}-${phone}`,
        },
        {
          headers: {
            access_token: accessToken,
            'Content-Type': 'application/json',
          },
        },
      );

      this.logger.log(`OTP sent to ${phone} via Zalo`, response.data);
      return response.data;
    } catch (error) {
      this.logger.error('Error sending OTP via Zalo', error);
      throw error;
    }
  }
}
