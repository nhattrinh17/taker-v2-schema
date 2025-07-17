import { ValidationOptions, ValidatorConstraintInterface } from 'class-validator';
export declare function IsPhoneInVn(validationOptions?: ValidationOptions): (object: any, propertyName: string) => void;
export declare function IsLatitude(validationOptions?: ValidationOptions): (object: any, propertyName: string) => void;
export declare function IsLongitude(validationOptions?: ValidationOptions): (object: any, propertyName: string) => void;
export declare function IsArrayOfInstancesOf(className: any, validationOptions?: ValidationOptions): (object: Object, propertyName: string) => void;
export declare function IsAfter10Minutes(validationOptions?: ValidationOptions): (object: Object, propertyName: string) => void;
export declare class IsValidTimeRangeConstraint implements ValidatorConstraintInterface {
    validate(value: any, args: any): boolean;
    defaultMessage(): string;
}
export declare function IsValidTimeRange(validationOptions?: ValidationOptions): (object: Object, propertyName: string) => void;
