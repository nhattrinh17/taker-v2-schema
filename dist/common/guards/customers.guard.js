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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminsAuthGuard = void 0;
const decorators_1 = require("../decorators");
const redis_service_1 = __importDefault(require("../services/redis.service"));
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const passport_1 = require("@nestjs/passport");
const interface_1 = require("../../database/interface");
let AdminsAuthGuard = class AdminsAuthGuard extends (0, passport_1.AuthGuard)('customers-jwt') {
    constructor(reflector, adminRepository, redisService) {
        super();
        this.reflector = reflector;
        this.adminRepository = adminRepository;
        this.redisService = redisService;
    }
    async canActivate(context) {
        const can = (await super.canActivate(context));
        if (!can)
            return false;
        const requiredAction = this.reflector.getAllAndOverride(decorators_1.PERMISSION_ACTION_KEY, [context.getHandler(), context.getClass()]);
        const requiredPermissions = this.reflector.getAllAndOverride(decorators_1.PERMISSION_SYS_PERMISSIONS_KEY, [context.getHandler(), context.getClass()]);
        if (!requiredAction && !requiredPermissions) {
            return true;
        }
        const request = context.switchToHttp().getRequest();
        const user = request.user;
        if (!user) {
            throw new common_1.ForbiddenException('User not authenticated');
        }
        const hasPermission = await this.checkUserPermissions(user, requiredAction, requiredPermissions);
        if (!hasPermission) {
            throw new common_1.ForbiddenException(`Access denied. Required action: ${requiredAction?.join(', ')}, permissions: ${requiredPermissions}`);
        }
        return true;
    }
    async checkUserPermissions(user, requiredAction, requiredPermissions) {
        const allRoleUserRaw = await this.redisService.get(`${process.env.APP_ID}:admins:all-role-user:${user.sub}`);
        let allRoleUser = allRoleUserRaw ? JSON.parse(allRoleUserRaw) : [];
        if (!allRoleUser || allRoleUser.length === 0) {
            allRoleUser = await this.adminRepository.getRolesByUserId(user.sub);
            if (!allRoleUser?.groupRole?.groupRolePermissions)
                return false;
            allRoleUser = allRoleUser.groupRole.groupRolePermissions.map((p) => ({
                permission: p.sysPermissionAction.sysPermission.name,
                action: p.sysPermissionAction.action.name,
            }));
            if (allRoleUser.length === 0) {
                return false;
            }
            await this.redisService.setExpire(`${process.env.APP_ID}:admins:all-role-user:${user.sub}`, JSON.stringify(allRoleUser), 60);
        }
        const checkRole = allRoleUser.some((role) => {
            const matchPermission = requiredPermissions ? role.permission === requiredPermissions : true;
            const matchAction = requiredAction ? requiredAction.includes(role.action) : true;
            return matchAction && matchPermission;
        });
        if (!checkRole) {
            console.log('User does not have required permissions');
            return false;
        }
        return true;
    }
};
exports.AdminsAuthGuard = AdminsAuthGuard;
exports.AdminsAuthGuard = AdminsAuthGuard = __decorate([
    (0, common_1.Injectable)(),
    __param(1, (0, common_1.Inject)('AdminRepositoryInterface')),
    __metadata("design:paramtypes", [typeof (_a = typeof core_1.Reflector !== "undefined" && core_1.Reflector) === "function" ? _a : Object, typeof (_b = typeof interface_1.AdminRepositoryInterface !== "undefined" && interface_1.AdminRepositoryInterface) === "function" ? _b : Object, redis_service_1.default])
], AdminsAuthGuard);
