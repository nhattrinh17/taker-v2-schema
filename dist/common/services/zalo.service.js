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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var ZaloService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ZaloService = void 0;
const common_1 = require("@nestjs/common");
const redis_service_1 = __importDefault(require("./redis.service"));
const axios_1 = __importDefault(require("axios"));
let ZaloService = ZaloService_1 = class ZaloService {
    constructor(redisService) {
        this.redisService = redisService;
        this.logger = new common_1.Logger(ZaloService_1.name);
    }
    async getAccessToken() {
        try {
            const raw = await this.redisService.get('zalo_token');
            if (!raw) {
                await this.redisService.set('zalo_token', JSON.stringify({
                    access_token: '',
                    expires_in: 0,
                    refresh_token: '',
                }));
                throw new Error('Zalo access token not found');
            }
            let { access_token, refresh_token, expires_in } = JSON.parse(raw);
            const currentTime = Date.now();
            if (currentTime >= expires_in) {
                this.logger.warn('Zalo access token has expired, refreshing token');
                access_token = await this.refreshAccessToken(refresh_token);
            }
            return access_token;
        }
        catch (error) {
            this.logger.error('Error retrieving Zalo access token from Redis', error);
            throw error;
        }
    }
    async refreshAccessToken(refresh_token) {
        try {
            this.logger.log('Refreshing Zalo access token');
            const { data } = await axios_1.default.post('https://oauth.zaloapp.com/v4/oa/access_token', new URLSearchParams({
                refresh_token,
                app_id: process.env.ZALO_APP_ID,
                grant_type: 'refresh_token',
            }), {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    secret_key: process.env.ZALO_APP_SECRET_KEY,
                },
            });
            data.expires_in = Date.now() + parseInt(data.expires_in) * 1000;
            await this.redisService.set('zalo_token', JSON.stringify(data));
            return data.access_token;
        }
        catch (error) {
            this.logger.error('Error refreshing Zalo access token', error);
            throw error;
        }
    }
    async sendOtp(phone, otp) {
        try {
            const accessToken = await this.getAccessToken();
            const znsUrl = 'https://business.openapi.zalo.me/message/template';
            const response = await axios_1.default.post(znsUrl, {
                phone,
                template_id: process.env.ZALO_TEMPLATE_ID,
                template_data: {
                    otp,
                },
                tracking_id: `otp-${Date.now()}-${phone}`,
            }, {
                headers: {
                    access_token: accessToken,
                    'Content-Type': 'application/json',
                },
            });
            this.logger.log(`OTP sent to ${phone} via Zalo`, response.data);
            return response.data;
        }
        catch (error) {
            this.logger.error('Error sending OTP via Zalo', error);
            throw error;
        }
    }
};
exports.ZaloService = ZaloService;
exports.ZaloService = ZaloService = ZaloService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [redis_service_1.default])
], ZaloService);
//# sourceMappingURL=zalo.service.js.map