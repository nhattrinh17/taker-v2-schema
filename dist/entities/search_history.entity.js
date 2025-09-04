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
exports.SearchHistory = void 0;
const typeorm_1 = require("typeorm");
const enums_1 = require("../common/enums");
const base_entity_1 = require("./base.entity");
const customer_entity_1 = require("./customer.entity");
let SearchHistory = class SearchHistory extends base_entity_1.BaseEntity {
};
exports.SearchHistory = SearchHistory;
__decorate([
    (0, typeorm_1.ManyToOne)(() => customer_entity_1.Customer, (customer) => customer.searchHistories, { onDelete: 'CASCADE' }),
    __metadata("design:type", customer_entity_1.Customer)
], SearchHistory.prototype, "customer", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 36 }),
    __metadata("design:type", String)
], SearchHistory.prototype, "customerId", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], SearchHistory.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], SearchHistory.prototype, "address", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], SearchHistory.prototype, "latitude", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], SearchHistory.prototype, "longitude", void 0);
__decorate([
    (0, typeorm_1.Column)({ enum: enums_1.SearchHistoryTypeEnum, type: 'enum', nullable: true }),
    __metadata("design:type", String)
], SearchHistory.prototype, "type", void 0);
exports.SearchHistory = SearchHistory = __decorate([
    (0, typeorm_1.Entity)({ name: 'search_histories' })
], SearchHistory);
