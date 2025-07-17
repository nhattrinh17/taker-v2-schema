/* eslint-disable @typescript-eslint/ban-types */
import { registerDecorator, ValidationOptions, validate, ValidatorConstraintInterface, ValidatorConstraint } from 'class-validator';
import { isValidPhone, LATITUDE_PATTERN, LONGITUDE_PATTERN } from '@common/index';
import { plainToClass } from 'class-transformer';
import moment from 'moment';

export function IsPhoneInVn(validationOptions?: ValidationOptions) {
  return (object: any, propertyName: string) => {
    registerDecorator({
      name: 'IsPhoneInVn',
      target: object.constructor,
      propertyName,
      constraints: [],
      options: validationOptions,
      validator: {
        validate(value: any) {
          return isValidPhone(value);
        },
      },
    });
  };
}

export function IsLatitude(validationOptions?: ValidationOptions) {
  return (object: any, propertyName: string) => {
    registerDecorator({
      name: 'IsLatitude',
      target: object.constructor,
      propertyName,
      constraints: [],
      options: validationOptions,
      validator: {
        validate(value: any) {
          return LATITUDE_PATTERN.test(value);
        },
      },
    });
  };
}

export function IsLongitude(validationOptions?: ValidationOptions) {
  return (object: any, propertyName: string) => {
    registerDecorator({
      name: 'IsLongitude',
      target: object.constructor,
      propertyName,
      constraints: [],
      options: validationOptions,
      validator: {
        validate(value: any) {
          return LONGITUDE_PATTERN.test(value);
        },
      },
    });
  };
}

export function IsArrayOfInstancesOf(className, validationOptions?: ValidationOptions) {
  if (!validationOptions) {
    validationOptions = {};
  }

  if (!validationOptions.message) {
    validationOptions.message = 'Value must be an array of valid(s) ' + className.name;
  }

  return function (object: Object, propertyName: string) {
    registerDecorator({
      name: 'IsArrayOfInstancesOf',
      target: object.constructor,
      propertyName: propertyName,
      constraints: [],
      options: validationOptions,
      async: true,
      validator: {
        async validate(value: any): Promise<boolean> {
          if (!Array.isArray(value)) {
            return false;
          }
          const items = value;
          async function validateItem(item): Promise<boolean> {
            const object = plainToClass(className, item);
            const errors = await validate(object);
            return !errors.length;
          }
          const validations = await Promise.all(items.map(validateItem));
          // Si y'a au moins un false, on return false
          return validations.filter((isValidated) => !isValidated).length === 0;
        },
      },
    });
  };
}

export function IsAfter10Minutes(validationOptions?: ValidationOptions) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      name: 'isAfter10Minutes',
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      validator: {
        validate(value: number) {
          if (!value) return true; // Bỏ qua nếu không có
          const now = Date.now(); // Lấy thời gian hiện tại
          return value - now >= 600 * 1000; // lớn hơn 10 phút
        },
        defaultMessage(): string {
          return 'time must be at least 10 minutes in the future';
        },
      },
    });
  };
}

@ValidatorConstraint({ name: 'isValidTimeRange', async: false })
export class IsValidTimeRangeConstraint implements ValidatorConstraintInterface {
  validate(value: any, args: any) {
    const { object } = args;
    const startTime = moment(object.startTime);
    const endTime = object.endTime ? moment(object.endTime) : null; 
    const now = moment();
    
    // Kiểm tra startTime phải >= thời gian hiện tại
    if (!startTime.isValid() || startTime.isBefore(now)) {
      throw new Error('startTime must be greater than to the current time!');
    }

    // Kiểm tra endTime phải > startTime
    if (endTime && (!endTime.isValid() || endTime.isSameOrBefore(startTime))) {
      throw new Error('endTime must be greater than startTime!');
    }

    return true;
  }

  defaultMessage() {
    return 'startTime must be greater than or equal to the current time and endTime must be greater than startTime!';
  }
}

export function IsValidTimeRange(validationOptions?: ValidationOptions) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName,
      options: validationOptions,
      constraints: [],
      validator: IsValidTimeRangeConstraint,
    });
  };
}
