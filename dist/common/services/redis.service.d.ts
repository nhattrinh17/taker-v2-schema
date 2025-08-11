import { Redis } from 'ioredis';
export default class RedisService {
    private readonly client;
    private readonly subClient;
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
    hget(key: string, field: string): Promise<string>;
    hgetAll(key: string): Promise<Record<string, string>>;
    hset(key: string, field: string, fieldValue: any): Promise<number>;
    hdel(key: string, field: string): Promise<void>;
    getClient(): Redis;
    getSubClient(): Redis;
}
