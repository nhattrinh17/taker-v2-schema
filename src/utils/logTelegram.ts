import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class LogTelegramService {
  async sendToTelegram(title: string, desc: string) {
    try {
      const message = `
      <b>Title: ${title}</b>
      <pre>Detail: ${desc}</pre>`;

      const chat_id = process.env.CHAT_BOT_ID;
      const bot_token = process.env.TOKEN_BOT_TL;
      const url = `https://api.telegram.org/bot${bot_token}/sendMessage`;

      await axios.post(url, {
        chat_id,
        parse_mode: 'html',
        text: message,
      });
    } catch (error) {
      console.log('Send to telegram error:', error?.response?.data || error.message);
    }
  }
}
