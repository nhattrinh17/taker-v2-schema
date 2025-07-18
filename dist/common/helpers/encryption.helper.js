"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkIdType = exports.generateTripId = exports.orderId = exports.validPassword = exports.generateHashedPassword = void 0;
const bcrypt = __importStar(require("bcrypt"));
const nanoid_1 = require("nanoid");
const generateHashedPassword = (password) => {
    return bcrypt.hashSync(password, 10);
};
exports.generateHashedPassword = generateHashedPassword;
const validPassword = (password, passwordHashed) => {
    return bcrypt.compareSync(password, passwordHashed);
};
exports.validPassword = validPassword;
const orderId = () => {
    const alphabet = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    const nanoid = (0, nanoid_1.customAlphabet)(alphabet, 20);
    return nanoid();
};
exports.orderId = orderId;
const generateTripId = () => {
    let now = Date.now().toString();
    now += now + Math.floor(Math.random() * 10);
    return [now.slice(0, 4), now.slice(4, 10), now.slice(10, 14)].join('-');
};
exports.generateTripId = generateTripId;
const checkIdType = (id) => {
    const orderIdPattern = /^[0-9A-Za-z]{20}$/;
    const tripIdPattern = /^[0-9]{4}-[0-9]{6}-[0-9]{4}$/;
    if (orderIdPattern.test(id)) {
        return 'orderId';
    }
    else if (tripIdPattern.test(id)) {
        return 'tripId';
    }
    else {
        return 'unknown';
    }
};
exports.checkIdType = checkIdType;
