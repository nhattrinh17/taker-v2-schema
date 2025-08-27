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
var SocketService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.SocketService = void 0;
const axios_1 = require("@nestjs/axios");
const common_1 = require("@nestjs/common");
const redis_service_1 = __importDefault(require("../../common/services/redis.service"));
const app_constant_1 = require("../../common/constants/app.constant");
let SocketService = SocketService_1 = class SocketService {
    constructor(httpService, redisService) {
        this.httpService = httpService;
        this.redisService = redisService;
        this.logger = new common_1.Logger(SocketService_1.name);
    }
    async getSocketIdByUserId(userId) {
        return this.redisService.get(`${process.env.APP_ID}:${app_constant_1.SOCKET_PREFIX}${userId}`);
    }
    async sendMessageToRoom(dto, retries = 3) {
        try {
            const url = `${process.env.SOCKET_URL}/send-message`;
            const res = await this.httpService.axiosRef
                .post(url, dto, {
                auth: {
                    username: process.env.SOCKET_USERNAME,
                    password: process.env.SOCKET_PASSWORD,
                },
            })
                .then((res) => {
                console.log('🚀 ~ SocketService ~ .then ~ res.data:', res.data);
                if (res.data)
                    return res.data;
            })
                .catch((err) => {
                console.error('[API SHOEMAKER TO SOCKET],', JSON.stringify(err?.response?.data || err));
                setTimeout(() => this.sendMessageToRoom(dto, retries - 1), 1000);
            });
        }
        catch (error) {
            this.logger.error(error);
            return false;
        }
    }
};
exports.SocketService = SocketService;
exports.SocketService = SocketService = SocketService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [axios_1.HttpService,
        redis_service_1.default])
], SocketService);
