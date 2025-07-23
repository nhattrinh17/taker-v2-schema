"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserDataToken = void 0;
const common_1 = require("@nestjs/common");
exports.UserDataToken = (0, common_1.createParamDecorator)((data, ctx) => {
    const request = ctx.switchToHttp().getRequest();
    const header = request.headers.authorization;
    const token = header?.split(' ')[1]?.split('.')[1];
    if (token) {
        const decoded = atob(token);
        const dataParse = JSON.parse(decoded);
        return {
            id: dataParse?.id,
            email: dataParse?.email,
        };
    }
    return {};
});
