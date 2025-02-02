import * as mongoose from 'mongoose';
import { Property } from './schemas/property.schema';
export declare class PropertyService {
    private propertyModel;
    constructor(propertyModel: mongoose.Model<Property>);
    findAll(filter: Record<string, any>): Promise<Property[]>;
    findOne(filter: Record<string, any>): Promise<Property | null>;
    create(property: Property): Promise<Property>;
}
