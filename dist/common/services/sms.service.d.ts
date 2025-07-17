import RedisService from './redis.service';
export type SmsRequestProps = {
    toNumber: string;
    otp: string;
    type?: string;
};
export declare class SmsService {
    private readonly redisService;
    private readonly logger;
    constructor(redisService: RedisService);
    getToken(): Promise<any>;
    send({ toNumber, otp, type }: SmsRequestProps): Promise<boolean>;
}
