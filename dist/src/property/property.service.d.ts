import * as mongoose from 'mongoose';
import { Property } from './schemas/property.schema';
export declare class PropertyService {
    private propertyModel;
    constructor(propertyModel: mongoose.Model<Property>);
    findAll(): Promise<Property[]>;
    create(property: Property): Promise<Property>;
}
