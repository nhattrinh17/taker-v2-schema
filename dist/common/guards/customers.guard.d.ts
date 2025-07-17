import RedisService from '@common/services/redis.service';
import { ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { AdminRepositoryInterface } from 'src/database/interface';
declare const AdminsAuthGuard_base: any;
export declare class AdminsAuthGuard extends AdminsAuthGuard_base {
    private reflector;
    private readonly adminRepository;
    private readonly redisService;
    constructor(reflector: Reflector, adminRepository: AdminRepositoryInterface, redisService: RedisService);
    canActivate(context: ExecutionContext): Promise<boolean>;
    private checkUserPermissions;
}
export {};
