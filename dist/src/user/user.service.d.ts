import * as mongoose from 'mongoose';
import { User } from './schemas/user.schema';
export declare class UserService {
    private userModel;
    constructor(userModel: mongoose.Model<User>);
    create(user: User): Promise<User>;
}
