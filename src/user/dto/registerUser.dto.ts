import { Gender } from '../schemas/user.schema';

export class CreateUserDto {
  readonly name: string;
  readonly email: string;
  readonly password: string;
  readonly age: number;
  readonly gender: Gender;
  readonly mobile: string;
}