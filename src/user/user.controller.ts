import { Body, Controller, Get, Param, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreateUserDto  } from './dto/registerUser.dto';
import { UserService } from './user.service';
import { User } from './schemas/user.schema';

@Controller('user')
export class UserController {
    constructor(private userService: UserService) {}

    @Get(':id')
    findOne(@Param('id') id: String) {
        return id
    }

    @Post()
    async registerUser(@Body() user: CreateUserDto): Promise<User> {
    console.log({user});
      return this.userService.create(user);
    }
}