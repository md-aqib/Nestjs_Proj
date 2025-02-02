import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';

export enum Category {
  RESIDENTIAL = 'Residential',
  COMMERTIAL = 'Commertial',
}

@Schema({
  timestamps: true,
})
export class Property {
  @Prop()
  userId: mongoose.Types.ObjectId;

  @Prop()
  email: string;

  @Prop()
  name: string;

  @Prop()
  description: string;

  @Prop()
  area: number;

  @Prop()
  price: number;

  @Prop()
  category: Category;
}

export const PropertySchema = SchemaFactory.createForClass(Property);