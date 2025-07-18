"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsValidTimeRangeConstraint = void 0;
exports.IsPhoneInVn = IsPhoneInVn;
exports.IsLatitude = IsLatitude;
exports.IsLongitude = IsLongitude;
exports.IsArrayOfInstancesOf = IsArrayOfInstancesOf;
exports.IsAfter10Minutes = IsAfter10Minutes;
exports.IsValidTimeRange = IsValidTimeRange;
const class_validator_1 = require("class-validator");
const magic_code_helper_1 = require("@common/helpers/magic-code.helper");
const app_constant_1 = require("@common/constants/app.constant");
const class_transformer_1 = require("class-transformer");
const moment_1 = __importDefault(require("moment"));
function IsPhoneInVn(validationOptions) {
    return (object, propertyName) => {
        (0, class_validator_1.registerDecorator)({
            name: 'IsPhoneInVn',
            target: object.constructor,
            propertyName,
            constraints: [],
            options: validationOptions,
            validator: {
                validate(value) {
                    return (0, magic_code_helper_1.isValidPhone)(value);
                },
            },
        });
    };
}
function IsLatitude(validationOptions) {
    return (object, propertyName) => {
        (0, class_validator_1.registerDecorator)({
            name: 'IsLatitude',
            target: object.constructor,
            propertyName,
            constraints: [],
            options: validationOptions,
            validator: {
                validate(value) {
                    return app_constant_1.LATITUDE_PATTERN.test(value);
                },
            },
        });
    };
}
function IsLongitude(validationOptions) {
    return (object, propertyName) => {
        (0, class_validator_1.registerDecorator)({
            name: 'IsLongitude',
            target: object.constructor,
            propertyName,
            constraints: [],
            options: validationOptions,
            validator: {
                validate(value) {
                    return app_constant_1.LONGITUDE_PATTERN.test(value);
                },
            },
        });
    };
}
function IsArrayOfInstancesOf(className, validationOptions) {
    if (!validationOptions) {
        validationOptions = {};
    }
    if (!validationOptions.message) {
        validationOptions.message = 'Value must be an array of valid(s) ' + className.name;
    }
    return function (object, propertyName) {
        (0, class_validator_1.registerDecorator)({
            name: 'IsArrayOfInstancesOf',
            target: object.constructor,
            propertyName: propertyName,
            constraints: [],
            options: validationOptions,
            async: true,
            validator: {
                async validate(value) {
                    if (!Array.isArray(value)) {
                        return false;
                    }
                    const items = value;
                    async function validateItem(item) {
                        const object = (0, class_transformer_1.plainToClass)(className, item);
                        const errors = await (0, class_validator_1.validate)(object);
                        return !errors.length;
                    }
                    const validations = await Promise.all(items.map(validateItem));
                    return validations.filter((isValidated) => !isValidated).length === 0;
                },
            },
        });
    };
}
function IsAfter10Minutes(validationOptions) {
    return function (object, propertyName) {
        (0, class_validator_1.registerDecorator)({
            name: 'isAfter10Minutes',
            target: object.constructor,
            propertyName: propertyName,
            options: validationOptions,
            validator: {
                validate(value) {
                    if (!value)
                        return true;
                    const now = Date.now();
                    return value - now >= 600 * 1000;
                },
                defaultMessage() {
                    return 'time must be at least 10 minutes in the future';
                },
            },
        });
    };
}
let IsValidTimeRangeConstraint = class IsValidTimeRangeConstraint {
    validate(value, args) {
        const { object } = args;
        const startTime = (0, moment_1.default)(object.startTime);
        const endTime = object.endTime ? (0, moment_1.default)(object.endTime) : null;
        const now = (0, moment_1.default)();
        if (!startTime.isValid() || startTime.isBefore(now)) {
            throw new Error('startTime must be greater than to the current time!');
        }
        if (endTime && (!endTime.isValid() || endTime.isSameOrBefore(startTime))) {
            throw new Error('endTime must be greater than startTime!');
        }
        return true;
    }
    defaultMessage() {
        return 'startTime must be greater than or equal to the current time and endTime must be greater than startTime!';
    }
};
exports.IsValidTimeRangeConstraint = IsValidTimeRangeConstraint;
exports.IsValidTimeRangeConstraint = IsValidTimeRangeConstraint = __decorate([
    (0, class_validator_1.ValidatorConstraint)({ name: 'isValidTimeRange', async: false })
], IsValidTimeRangeConstraint);
function IsValidTimeRange(validationOptions) {
    return function (object, propertyName) {
        (0, class_validator_1.registerDecorator)({
            target: object.constructor,
            propertyName,
            options: validationOptions,
            constraints: [],
            validator: IsValidTimeRangeConstraint,
        });
    };
}
//# sourceMappingURL=custom.validate.js.map