export declare enum Category {
    RESIDENTIAL = "Residential",
    COMMERTIAL = "Commertial"
}
export declare class Property {
    name: string;
    description: string;
    area: number;
    price: number;
    category: Category;
}
export declare const PropertySchema: import("mongoose").Schema<Property, import("mongoose").Model<Property, any, any, any, import("mongoose").Document<unknown, any, Property> & Property & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Property, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<Property>> & import("mongoose").FlatRecord<Property> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
