"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogTelegramService = void 0;
const axios_1 = require("@nestjs/axios");
const common_1 = require("@nestjs/common");
let LogTelegramService = class LogTelegramService {
    constructor(httpService) {
        this.httpService = httpService;
    }
    async sendToTelegram(title, desc) {
        try {
            const message = `
      <b>Title: ${title}</b>
      <pre>Detail: ${desc}</pre>`;
            const chat_id = process.env.CHAT_BOT_ID;
            const bot_token = process.env.TOKEN_BOT_TL;
            const url = `https://api.telegram.org/bot${bot_token}/sendMessage?chat_id=${chat_id}&parse_mode=html&text=${message.toString()}`;
            await this.httpService.axiosRef.post(url);
        }
        catch (error) {
            console.log(111, error);
        }
    }
};
exports.LogTelegramService = LogTelegramService;
exports.LogTelegramService = LogTelegramService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [axios_1.HttpService])
], LogTelegramService);
