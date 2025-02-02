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
exports.UserController = void 0;
const common_1 = require("@nestjs/common");
const registerUser_dto_1 = require("./dto/registerUser.dto");
const loginUser_dto_1 = require("./dto/loginUser.dto");
const user_service_1 = require("./user.service");
const auth_guard_1 = require("../auth/auth.guard");
const jwt = require("jsonwebtoken");
let UserController = class UserController {
    constructor(userService) {
        this.userService = userService;
    }
    async getUser(req) {
        try {
            const { userId, email } = req.user;
            const findUser = await this.userService.findOne({ email });
            if (!findUser) {
                throw new Error('User not found.');
            }
            ;
            return {
                status: true,
                message: '✅ User data found successfully!',
                data: findUser
            };
        }
        catch (error) {
            return {
                status: false,
                message: error.message
            };
        }
    }
    ;
    async registerUser(user) {
        try {
            const existingProperty = await this.userService.findOne({ email: user.email });
            if (existingProperty) {
                throw new common_1.BadRequestException('User with this email already exists.');
            }
            ;
            const registerUser = await this.userService.create(user);
            const token = jwt.sign({ userId: registerUser.userId, email: registerUser.email }, process.env.JWT_SECRET, { expiresIn: '1h' });
            return {
                status: true,
                message: '✅ User registered successfully.',
                data: registerUser,
                token
            };
        }
        catch (error) {
            return {
                status: false,
                message: error.message
            };
        }
    }
    ;
    async loginUser(user) {
        try {
            const findUser = await this.userService.findOne({ email: user.email });
            if (!findUser) {
                throw new common_1.BadRequestException('User not found');
            }
            ;
            const isPasswordValid = findUser.password === user.password ? true : false;
            if (!isPasswordValid) {
                throw new common_1.BadRequestException('Invalid Password');
            }
            ;
            const token = jwt.sign({ userId: findUser.userId, email: findUser.email }, process.env.JWT_SECRET, { expiresIn: '1h' });
            return {
                status: true,
                message: '✅ User singin successfully.',
                data: findUser,
                token
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
exports.UserController = UserController;
__decorate([
    (0, common_1.Get)('/profile'),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "getUser", null);
__decorate([
    (0, common_1.Post)('/register'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [registerUser_dto_1.CreateUserDto]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "registerUser", null);
__decorate([
    (0, common_1.Post)('/login'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [loginUser_dto_1.LoginUserDto]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "loginUser", null);
exports.UserController = UserController = __decorate([
    (0, common_1.Controller)('user'),
    __metadata("design:paramtypes", [user_service_1.UserService])
], UserController);
//# sourceMappingURL=user.controller.js.map