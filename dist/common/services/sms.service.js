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
var SmsService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.SmsService = void 0;
const common_1 = require("@nestjs/common");
const axios_1 = __importDefault(require("axios"));
const redis_service_1 = __importDefault(require("./redis.service"));
let SmsService = SmsService_1 = class SmsService {
    constructor(redisService) {
        this.redisService = redisService;
        this.logger = new common_1.Logger(SmsService_1.name);
    }
    async getToken() {
        try {
            const key = `${process.env.APP_ID}:sms:fpt:token`;
            const tokenRedis = await this.redisService.get(key);
            if (tokenRedis)
                return tokenRedis;
            const res = await axios_1.default.post(process.env.URL_GET_TOKEN, {
                client_id: process.env.CLIENT_ID,
                client_secret: process.env.CLIENT_SECRET,
                scope: 'send_brandname_otp send_brandname',
                session_id: new Date().getTime(),
                grant_type: 'client_credentials',
            }, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            const accessToken = res?.data?.access_token || null;
            const expiresToken = res?.data?.expires_in || null;
            console.log('🚀 ~ SmsService ~ getToken ~ expiresToken:', accessToken, expiresToken);
            if (accessToken && expiresToken) {
                const saveToken = await this.redisService.setExpire(key, accessToken, +expiresToken - 10);
                console.log('🚀 ~ SmsService ~ getToken ~ saveToken:', saveToken);
            }
            return accessToken;
        }
        catch (e) {
            console.log(`Get token error ${JSON.stringify(e)}`);
        }
    }
    async send({ toNumber, otp, type }) {
        try {
            const token = await this.getToken();
            let message = ``;
            if (type == 'password') {
                message = `XIMI VN: Mat khau moi cua ban la: ${otp}. Luu y: Khong cung cap mat khau cho nguoi khac`;
            }
            else {
                message = `XIMI VN: Ma xac thuc OTP cua ban la ${otp}.Thoi gian hieu luc 3 phut. Luu y: Khong cung cap OTP cho nguoi khac`;
            }
            const responseSendSms = await axios_1.default.post(process.env.URL_SEND_SMS, {
                access_token: token,
                session_id: new Date().getTime(),
                BrandName: 'XIMI VN',
                Phone: toNumber,
                Message: Buffer.from(message).toString('base64'),
                RequestId: new Date().getTime(),
            }, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            this.logger.log(`Send sms to ${toNumber} with otp ${otp}, responseSendSms: ${JSON.stringify(responseSendSms.data)}`);
            return true;
        }
        catch (error) {
            this.logger.error(`Send sms error ${error?.data?.error_description}`);
            return false;
        }
    }
};
exports.SmsService = SmsService;
exports.SmsService = SmsService = SmsService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [redis_service_1.default])
], SmsService);
//# sourceMappingURL=sms.service.js.map