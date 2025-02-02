import * as mongoose from 'mongoose';
export declare enum Gender {
    MALE = "Male",
    FEMALE = "Female",
    OTHER = "other"
}
export declare class User {
    userId: mongoose.Types.ObjectId;
    name: string;
    email: string;
    password: string;
    age: number;
    gender: Gender;
    mobile: string;
}
export declare const UserSchema: mongoose.Schema<User, mongoose.Model<User, any, any, any, mongoose.Document<unknown, any, User> & User & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, User, mongoose.Document<unknown, {}, mongoose.FlatRecord<User>> & mongoose.FlatRecord<User> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>;
