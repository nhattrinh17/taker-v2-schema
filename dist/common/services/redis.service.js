"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ioredis_1 = require("ioredis");
class RedisService {
    constructor() {
        try {
            this.client = new ioredis_1.Redis({
                host: process.env.QUEUE_HOST,
                port: parseInt(process.env.QUEUE_PORT, 10),
                password: String(process.env.QUEUE_PASS),
            });
        }
        catch (error) {
            console.log('🚀 ~ RedisService ~ constructor ~ error:', error, process.env.QUEUE_HOST, process.env.QUEUE_PORT, process.env.QUEUE_PASS);
        }
    }
    set(key, value) {
        return new Promise((resolve, reject) => {
            this.client.set(key, value, (err) => {
                if (err) {
                    reject(err);
                }
                resolve();
            });
        });
    }
    setExpire(key, value, duration) {
        return new Promise((resolve, reject) => {
            return this.client.set(key, value, 'EX', duration, (err) => {
                if (err) {
                    reject(err);
                }
                resolve();
            });
        });
    }
    del(key) {
        return new Promise((resolve, reject) => {
            return this.client.del(key, (err) => {
                if (err) {
                    reject(err);
                }
                resolve();
            });
        });
    }
    get(key) {
        return new Promise((resolve, reject) => {
            return this.client.get(key, (err, reply) => {
                if (err) {
                    reject(err);
                }
                resolve(reply);
            });
        });
    }
    getExpired(key) {
        return new Promise((resolve, reject) => {
            this.client.ttl(key, (err, ttl) => {
                if (err) {
                    reject(err);
                }
                resolve(ttl);
            });
        });
    }
    sadd(key, valueData) {
        return this.client.sadd(key, valueData);
    }
    sismember(key, valueData) {
        return this.client.sismember(key, valueData);
    }
    smembers(key) {
        return this.client.smembers(key);
    }
    srem(key, valueData) {
        return this.client.srem(key, valueData);
    }
    getClient() {
        return this.client;
    }
}
exports.default = RedisService;
//# sourceMappingURL=redis.service.js.map