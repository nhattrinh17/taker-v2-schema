import RedisService from './redis.service';
export declare class ZaloService {
    private readonly redisService;
    private readonly logger;
    constructor(redisService: RedisService);
    getAccessToken(): Promise<string>;
    refreshAccessToken(refresh_token: string): Promise<any>;
    sendOtp(phone: string, otp: string): Promise<any>;
}
