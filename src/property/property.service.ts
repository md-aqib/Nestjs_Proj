import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Property } from './schemas/property.schema';

@Injectable()
export class PropertyService {
  constructor(
    @InjectModel(Property.name)
    private propertyModel: mongoose.Model<Property>,
  ) {}

  async findAll(filter: Record<string, any>): Promise<Property[]> {
    const properties = await this.propertyModel.find(filter);
    return properties;
  }

  async findOne(filter: Record<string, any>): Promise<Property | null> {
    return this.propertyModel.findOne(filter).exec();
  }

  async create(property: Property): Promise<Property> {
    console.log({property})
    const res = await this.propertyModel.create(property);
    return res;
  }
}