import { Body, Controller, Get, Param, Post, UsePipes, ValidationPipe, BadRequestException, UseGuards, Req } from '@nestjs/common';
import { CreateUserDto  } from './dto/registerUser.dto';
import { UserResponseDto } from './dto/userResponse.dto';
import { LoginUserDto } from './dto/loginUser.dto';
import { UserService } from './user.service';
import { AuthGuard } from '../auth/auth.guard';
import { User } from './schemas/user.schema';
import * as jwt from 'jsonwebtoken';

@Controller('user')
export class UserController {
    constructor(
      private userService: UserService
    ) {}

    // @Get(':id')
    // findOne(@Param('id') id: String) {
    //     return id
    // }

    @Get('/profile')
    @UseGuards(AuthGuard)
    async getUser(@Req() req): Promise<UserResponseDto> {
      try {
        const { userId, email } = req.user;
        const findUser = await this.userService.findOne({ email });
        if (!findUser) {
            throw new Error('User not found.');
        };
        return {
          status: true,
          message: '✅ User data found successfully!',
          data: findUser
        }
      } catch(error) {
        return {
          status: false,
          message: error.message
        }
      }
    };

    @Post('/register')
    async registerUser(@Body() user: CreateUserDto): Promise<UserResponseDto> {
      try {
        const existingProperty = await this.userService.findOne({ email: user.email });
        if (existingProperty) {
            throw new BadRequestException('User with this email already exists.');
        };
        const registerUser = await this.userService.create(user);
        // Generate JWT token
        const token = jwt.sign(
          { userId: registerUser.userId, email: registerUser.email },
          process.env.JWT_SECRET,
          { expiresIn: '1h' }
        );
        return {
          status: true,
          message: '✅ User registered successfully.',
          data: registerUser,
          token
        }
      } catch(error) {
        return {
          status: false,
          message: error.message
        }
      }
    };

    @Post('/login')
    async loginUser(@Body() user: LoginUserDto): Promise<UserResponseDto> {
      try {
        const findUser = await this.userService.findOne({ email: user.email });
        if (!findUser) {
            throw new BadRequestException('User not found');
        };
  
        const isPasswordValid = findUser.password === user.password? true: false;
        if (!isPasswordValid) {
          throw new BadRequestException('Invalid Password');
        };
        // Generate JWT token
        const token = jwt.sign(
          { userId: findUser.userId, email: findUser.email },
          process.env.JWT_SECRET,
          { expiresIn: '1h' }
        );
        return {
          status: true,
          message: '✅ User singin successfully.',
          data: findUser,
          token
        }
      } catch(error) {
        return {
          status: false,
          message: error.message
        }
      }
    }
}