import { CreateUserDto } from './dto/registerUser.dto';
import { UserService } from './user.service';
import { User } from './schemas/user.schema';
export declare class UserController {
    private userService;
    constructor(userService: UserService);
    findOne(id: String): String;
    registerUser(user: CreateUserDto): Promise<User>;
}
