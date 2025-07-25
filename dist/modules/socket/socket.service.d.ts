import { HttpService } from '@nestjs/axios';
import { SendMessageToRoom } from './dto/create-call-socket.dto';
import RedisService from '../../common/services/redis.service';
export declare class SocketService {
    private readonly httpService;
    private readonly redisService;
    private readonly logger;
    constructor(httpService: HttpService, redisService: RedisService);
    getSocketIdByUserId(userId: string): Promise<string>;
    sendMessageToRoom(dto: SendMessageToRoom, retries?: number): Promise<boolean>;
}
