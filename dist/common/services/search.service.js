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
var SearchService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchService = void 0;
const common_1 = require("@nestjs/common");
const axios_1 = __importDefault(require("axios"));
let SearchService = SearchService_1 = class SearchService {
    constructor() {
        this.logger = new common_1.Logger(SearchService_1.name);
    }
    suggestionByText({ latitude, longitude, keyword }) {
        const api_key = process.env.GOONG_API_KEY;
        const baseUrl = process.env.GOONG_API_BASE_URL;
        const params = {
            input: keyword,
            api_key,
            limit: 20,
        };
        if (latitude && longitude) {
            params['location'] = `${latitude},${longitude}`;
        }
        return axios_1.default.get(`${baseUrl}/place/autocomplete`, {
            params,
        });
    }
    async revGeoCode(place_id) {
        const api_key = process.env.GOONG_API_KEY;
        const baseUrl = process.env.GOONG_API_BASE_URL;
        return axios_1.default.get(`${baseUrl}/place/detail?place_id=${place_id}&api_key=${api_key}`);
    }
};
exports.SearchService = SearchService;
exports.SearchService = SearchService = SearchService_1 = __decorate([
    (0, common_1.Injectable)()
], SearchService);
