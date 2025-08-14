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
exports.ShoeService = void 0;
const typeorm_1 = require("typeorm");
const base_entity_1 = require("./base.entity");
const shoe_booking_entity_1 = require("./shoe_booking.entity");
let ShoeService = class ShoeService extends base_entity_1.BaseEntity {
};
exports.ShoeService = ShoeService;
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ShoeService.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "int", nullable: true }),
    __metadata("design:type", Number)
], ShoeService.prototype, "price", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], ShoeService.prototype, "simpleDes", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "text", nullable: true }),
    __metadata("design:type", String)
], ShoeService.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => shoe_booking_entity_1.ShoeBooking, (shoeBooking) => shoeBooking.shoeService),
    __metadata("design:type", Array)
], ShoeService.prototype, "shoeBookings", void 0);
exports.ShoeService = ShoeService = __decorate([
    (0, typeorm_1.Entity)({ name: "shoe_services" })
], ShoeService);
