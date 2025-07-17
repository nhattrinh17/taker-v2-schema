"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SocketCallApiGuard = void 0;
const common_1 = require("@nestjs/common");
let SocketCallApiGuard = class SocketCallApiGuard {
    canActivate(context) {
        const request = context.switchToHttp().getRequest();
        const basicToken = request.headers.authorization;
        if (basicToken && basicToken.startsWith('Basic')) {
            const decodeToken = Buffer.from(basicToken.split(' ')[1], 'base64').toString();
            const username = decodeToken.split(':')[0];
            const password = decodeToken.split(':')[1];
            if (username === process.env.BACKEND_USERNAME && password === process.env.BACKEND_PASSWORD) {
                return true;
            }
        }
        return false;
    }
};
exports.SocketCallApiGuard = SocketCallApiGuard;
exports.SocketCallApiGuard = SocketCallApiGuard = __decorate([
    (0, common_1.Injectable)()
], SocketCallApiGuard);
