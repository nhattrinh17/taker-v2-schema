// auth/google-auth.service.ts
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { OAuth2Client } from 'google-auth-library';

@Injectable()
export class GoogleAuthService {
  private client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

  async verifyIdToken(idToken: string) {
    try {
      const ticket = await this.client.verifyIdToken({
        idToken,
        audience: process.env.GOOGLE_CLIENT_ID,
      });

      const payload = ticket.getPayload();

      if (!payload?.email_verified) {
        throw new Error('Email not verified');
      }

      // Tùy bạn xử lý thêm: kiểm tra user tồn tại, tạo mới, sinh JWT, v.v.
      return {
        email: payload.email,
        name: payload.name,
        picture: payload.picture,
        sub: payload.sub, // google unique user ID
      };
    } catch (error) {
      throw new Error(error.message || 'Invalid ID token');
    }
  }
}
