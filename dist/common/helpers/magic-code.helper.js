"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateSlug = generateSlug;
exports.generateOTP = generateOTP;
exports.generatePassword = generatePassword;
exports.makePhoneNumber = makePhoneNumber;
exports.otpToText = otpToText;
exports.isValidPhone = isValidPhone;
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
