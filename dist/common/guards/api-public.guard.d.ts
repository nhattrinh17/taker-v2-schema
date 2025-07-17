import { CanActivate, ExecutionContext } from '@nestjs/common';
export declare class SocketCallApiGuard implements CanActivate {
    canActivate(context: ExecutionContext): boolean | Promise<boolean>;
}
