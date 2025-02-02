import * as mongoose from 'mongoose';
export declare enum Category {
    RESIDENTIAL = "Residential",
    COMMERTIAL = "Commertial"
}
export declare class Property {
    userId: mongoose.Types.ObjectId;
    email: string;
    name: string;
    description: string;
    area: number;
    price: number;
    category: Category;
}
export declare const PropertySchema: mongoose.Schema<Property, mongoose.Model<Property, any, any, any, mongoose.Document<unknown, any, Property> & Property & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, Property, mongoose.Document<unknown, {}, mongoose.FlatRecord<Property>> & mongoose.FlatRecord<Property> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>;
