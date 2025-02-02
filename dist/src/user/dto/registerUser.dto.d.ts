import { Gender } from '../schemas/user.schema';
import * as mongoose from 'mongoose';
export declare class CreateUserDto {
    readonly userId: mongoose.Types.ObjectId;
    readonly name: string;
    readonly email: string;
    readonly password: string;
    readonly age: number;
    readonly gender: Gender;
    readonly mobile: string;
}
