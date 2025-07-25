"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogTelegramService = void 0;
const common_1 = require("@nestjs/common");
const axios_1 = __importDefault(require("axios"));
let LogTelegramService = class LogTelegramService {
    async sendToTelegram(title, desc) {
        try {
            const message = `
      <b>Title: ${title}</b>
      <pre>Detail: ${desc}</pre>`;
            const chat_id = process.env.CHAT_BOT_ID;
            const bot_token = process.env.TOKEN_BOT_TL;
            const url = `https://api.telegram.org/bot${bot_token}/sendMessage`;
            await axios_1.default.post(url, {
                chat_id,
                parse_mode: 'html',
                text: message,
            });
        }
        catch (error) {
            console.log('Send to telegram error:', error?.response?.data || error.message);
        }
    }
};
exports.LogTelegramService = LogTelegramService;
exports.LogTelegramService = LogTelegramService = __decorate([
    (0, common_1.Injectable)()
], LogTelegramService);
