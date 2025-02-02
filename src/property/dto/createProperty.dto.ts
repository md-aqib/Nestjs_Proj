import { Category } from '../schemas/property.schema';
import * as mongoose from 'mongoose';

export class CreatePropertyDto {
  readonly userId: mongoose.Types.ObjectId;
  readonly email: string;
  readonly name: string;
  readonly description: string;
  readonly area: number;
  readonly price: number;
  readonly category: Category;
}