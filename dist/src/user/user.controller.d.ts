import { CreateUserDto } from './dto/registerUser.dto';
import { UserResponseDto } from './dto/userResponse.dto';
import { LoginUserDto } from './dto/loginUser.dto';
import { UserService } from './user.service';
export declare class UserController {
    private userService;
    constructor(userService: UserService);
    getUser(req: any): Promise<UserResponseDto>;
    registerUser(user: CreateUserDto): Promise<UserResponseDto>;
    loginUser(user: LoginUserDto): Promise<UserResponseDto>;
}
