import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export enum Gender {
  MALE = 'Male',
  FEMALE = 'Female',
  OTHER = 'other'
}

@Schema({
  timestamps: true,
})

export class User {
  @Prop()
  name: string;

  @Prop()
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