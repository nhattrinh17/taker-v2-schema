"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientIp = void 0;
const common_1 = require("@nestjs/common");
exports.ClientIp = (0, common_1.createParamDecorator)((data, ctx) => {
    const request = ctx.switchToHttp().getRequest();
    const forwardedIps = request.headers['x-forwarded-for'];
    const realIp = request.headers['x-real-ip'];
    const cfConnectingIp = request.headers['cf-connecting-ip'];
    const ips = forwardedIps ? forwardedIps.split(',') : [];
    return realIp || cfConnectingIp || ips[0] || null;
});
//# sourceMappingURL=client-ip.decorator.js.map