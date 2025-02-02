import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';


export enum Gender {
  MALE = 'Male',
  FEMALE = 'Female',
  OTHER = 'other'
}

@Schema({
  timestamps: true,
})

export class User {
  @Prop({ type: mongoose.Schema.Types.ObjectId, auto: true })
  userId: mongoose.Types.ObjectId;

  @Prop()
  name: string;

  @Prop({ required: true, unique: true })
  email: string;

  @Prop()
  password: string;

  @Prop()
  age: number;

  @Prop()
  gender: Gender;

  @Prop()
  mobile: string;
}

export const UserSchema = SchemaFactory.createForClass(User);