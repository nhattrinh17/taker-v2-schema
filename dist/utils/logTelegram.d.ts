import { HttpService } from '@nestjs/axios';
export declare class LogTelegramService {
    private readonly httpService;
    constructor(httpService: HttpService);
    sendToTelegram(title: string, desc: string): Promise<void>;
}
