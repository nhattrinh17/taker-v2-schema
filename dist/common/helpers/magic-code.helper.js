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
exports.estimateRings = void 0;
exports.generateSlug = generateSlug;
exports.generateOTP = generateOTP;
exports.generatePassword = generatePassword;
exports.makePhoneNumber = makePhoneNumber;
exports.otpToText = otpToText;
exports.isValidPhone = isValidPhone;
const app_constant_1 = require("../constants/app.constant");
const h3 = __importStar(require("h3-js"));
const edgeLengthKm = h3.getHexagonEdgeLengthAvg(app_constant_1.RESOLUTION, 'km');
const estimateRings = (radius) => Math.ceil(radius / (edgeLengthKm * Math.sqrt(3)));
exports.estimateRings = estimateRings;
function generateSlug(str) {
    return str
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .toLowerCase()
        .replace(/[^a-z0-9 -]/g, '')
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-')
        .replace(/^-|-$/g, '');
}
function generateOTP() {
    return Math.floor(1000 + Math.random() * 9000);
}
function generatePassword() {
    return Math.floor(1000 + Math.random() * 900000);
}
function makePhoneNumber(phone) {
    if (phone.startsWith('0')) {
        return `84${phone.slice(1)}`;
    }
    return phone;
}
function otpToText(otp) {
    const otpString = otp.toString();
    let result = '';
    for (let i = 0; i < otpString.length; i++) {
        result += otpString[i];
        if (i !== otpString.length - 1) {
            result += '. ';
        }
    }
    return result;
}
function isValidPhone(phone) {
    var phoneRegex = /(84|0[3|5|7|8|9])+([0-9]{8})\b/g;
    return phoneRegex.test(phone);
}
