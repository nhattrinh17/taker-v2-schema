"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SCREEN_PARTNER = exports.SOCKET_PREFIX = exports.LONGITUDE_PATTERN = exports.LATITUDE_PATTERN = exports.AppType = void 0;
exports.AppType = {
    customers: 'customers',
    partners: 'partners',
    admins: 'admins',
};
exports.LATITUDE_PATTERN = /^(\+|-)?(?:90(?:(?:\.0{1,6})?)|(?:[0-9]|[1-8][0-9])(?:(?:\.[0-9]{1,6})?))$/;
exports.LONGITUDE_PATTERN = /^(\+|-)?(?:180(?:(?:\.0{1,6})?)|(?:[0-9]|[1-9][0-9]|1[0-7][0-9])(?:(?:\.[0-9]{1,6})?))$/;
exports.SOCKET_PREFIX = 'SOCKET:';
exports.SCREEN_PARTNER = {
    CALL: 'CALL',
    CARPOOL_BOOKING: 'CARPOOL_BOOKING',
    DELIVERY: 'DELIVERY',
    VEHICLE_BOOKING: 'VEHICLE_BOOKING',
};
