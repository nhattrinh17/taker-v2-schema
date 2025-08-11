"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VehicleRegistry = void 0;
const typeorm_1 = require("typeorm");
const base_entity_1 = require("./base.entity");
const enums_1 = require("../common/enums");
const driver_entity_1 = require("./driver.entity");
const shoe_booking_entity_1 = require("./shoe_booking.entity");
let VehicleRegistry = class VehicleRegistry extends base_entity_1.BaseEntity {
};
exports.VehicleRegistry = VehicleRegistry;
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", length: 36 }),
    __metadata("design:type", String)
], VehicleRegistry.prototype, "driverId", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", length: 20 }),
    __metadata("design:type", String)
], VehicleRegistry.prototype, "licensePlate", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", length: 255, nullable: true }),
    __metadata("design:type", String)
], VehicleRegistry.prototype, "licenseImage", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", length: 255, nullable: true }),
    __metadata("design:type", String)
], VehicleRegistry.prototype, "licenseImageBack", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", length: 255, nullable: true }),
    __metadata("design:type", String)
], VehicleRegistry.prototype, "image", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", length: 50 }),
    __metadata("design:type", String)
], VehicleRegistry.prototype, "brand", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", length: 50 }),
    __metadata("design:type", String)
], VehicleRegistry.prototype, "model", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "int" }),
    __metadata("design:type", Number)
], VehicleRegistry.prototype, "year", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", length: 20 }),
    __metadata("design:type", String)
], VehicleRegistry.prototype, "color", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "int" }),
    __metadata("design:type", Number)
], VehicleRegistry.prototype, "seat", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "enum",
        enum: enums_1.VehicleRegistryStatusEnum,
        default: enums_1.VehicleRegistryStatusEnum.PENDING,
    }),
    __metadata("design:type", String)
], VehicleRegistry.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "datetime", nullable: true }),
    __metadata("design:type", Date)
], VehicleRegistry.prototype, "activeTime", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "enum",
        enum: enums_1.VehicleTypeEnum,
        default: enums_1.VehicleTypeEnum.BIKE,
    }),
    __metadata("design:type", String)
], VehicleRegistry.prototype, "type", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => driver_entity_1.Driver, (driver) => driver.vehicleRegistries, {
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
    }),
    (0, typeorm_1.JoinColumn)({ name: "driverId" }),
    __metadata("design:type", driver_entity_1.Driver)
], VehicleRegistry.prototype, "driver", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => shoe_booking_entity_1.ShoeBooking, (shoeBooking) => shoeBooking.deliveryVehicle),
    __metadata("design:type", Array)
], VehicleRegistry.prototype, "deliveryBookings", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => shoe_booking_entity_1.ShoeBooking, (shoeBooking) => shoeBooking.returnVehicle),
    __metadata("design:type", Array)
], VehicleRegistry.prototype, "returnBookings", void 0);
exports.VehicleRegistry = VehicleRegistry = __decorate([
    (0, typeorm_1.Entity)({ name: "vehicle_registries" })
], VehicleRegistry);
