import { Redis } from 'ioredis';
export default class RedisService {
    private readonly client;
    constructor();
    set(key: any, value: any): Promise<void>;
    setExpire(key: string, value: string, duration: number): Promise<void>;
    del(key: string): Promise<void>;
    get(key: string): Promise<string | undefined>;
    getExpired(key: string): Promise<number | undefined>;
    sadd(key: string, valueData: any): Promise<number>;
    sismember(key: string, valueData: any): Promise<number>;
    smembers(key: string): Promise<string[]>;
    srem(key: string, valueData: any): Promise<number>;
    getClient(): Redis;
}
