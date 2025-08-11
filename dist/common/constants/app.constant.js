"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SEARCH_PARTNER_TIMEOUT = exports.RESOLUTION = exports.BASE_OPERATING_HOURS = exports.SCREEN_ADMIN = exports.SCREEN_PARTNER = exports.RoomNameAdmin = exports.SOCKET_PREFIX = exports.LONGITUDE_PATTERN = exports.LATITUDE_PATTERN = exports.AppType = void 0;
exports.AppType = {
    customers: "customers",
    partners: "partners",
    admins: "admins",
};
exports.LATITUDE_PATTERN = /^(\+|-)?(?:90(?:(?:\.0{1,6})?)|(?:[0-9]|[1-8][0-9])(?:(?:\.[0-9]{1,6})?))$/;
exports.LONGITUDE_PATTERN = /^(\+|-)?(?:180(?:(?:\.0{1,6})?)|(?:[0-9]|[1-9][0-9]|1[0-7][0-9])(?:(?:\.[0-9]{1,6})?))$/;
exports.SOCKET_PREFIX = "SOCKET:";
exports.RoomNameAdmin = "socket-room-admins";
exports.SCREEN_PARTNER = {
    CALL: "CALL",
    SHOE_BOOKING: "SHOE_BOOKING",
};
exports.SCREEN_ADMIN = {
    MESSAGE: "MESSAGE",
};
exports.BASE_OPERATING_HOURS = {
    monday: null,
    tuesday: null,
    wednesday: null,
    thursday: null,
    friday: null,
    saturday: null,
    sunday: null,
};
exports.RESOLUTION = 9;
exports.SEARCH_PARTNER_TIMEOUT = {
    "0.5km": 0,
    "1km": 60_000,
    "2km": 120_000,
};
