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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PropertyController = void 0;
const common_1 = require("@nestjs/common");
const createProperty_dto_1 = require("./dto/createProperty.dto");
const auth_guard_1 = require("../auth/auth.guard");
const property_service_1 = require("./property.service");
let PropertyController = class PropertyController {
    constructor(propertyService) {
        this.propertyService = propertyService;
    }
    async getAllProperties(req) {
        try {
            const data = await this.propertyService.findAll({ email: req.user.email });
            if (!data.length) {
                throw new Error('Data not found');
            }
            return {
                status: true,
                message: "Data found successfully",
                data
            };
        }
        catch (error) {
            return {
                status: false,
                message: error.mmessage
            };
        }
    }
    async getProperty(propertyName, req) {
        try {
            const data = await this.propertyService.findOne({ name: propertyName });
            if (!data) {
                throw new Error('Data not found');
            }
            return {
                status: true,
                message: "Data found successfully",
                data
            };
        }
        catch (error) {
            return {
                status: false,
                message: error.mmessage
            };
        }
    }
    async createProperty(property, req) {
        try {
            const { userId, email } = req.user;
            const existingProperty = await this.propertyService.findOne({ name: property.name });
            if (existingProperty) {
                throw new common_1.BadRequestException('Property with this name already exists.');
            }
            ;
            const newProperty = {
                ...property,
                userId,
                email
            };
            console.log({ newProperty });
            const data = await this.propertyService.create(newProperty);
            return {
                status: true,
                message: "Created successfully!",
                data
            };
        }
        catch (error) {
            return {
                status: false,
                message: error.message
            };
        }
    }
};
exports.PropertyController = PropertyController;
__decorate([
    (0, common_1.Get)(),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PropertyController.prototype, "getAllProperties", null);
__decorate([
    (0, common_1.Get)(':propertyName'),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    __param(0, (0, common_1.Param)('propertyName')),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], PropertyController.prototype, "getProperty", null);
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [createProperty_dto_1.CreatePropertyDto, Object]),
    __metadata("design:returntype", Promise)
], PropertyController.prototype, "createProperty", null);
exports.PropertyController = PropertyController = __decorate([
    (0, common_1.Controller)('property'),
    __metadata("design:paramtypes", [property_service_1.PropertyService])
], PropertyController);
//# sourceMappingURL=property.controller.js.map