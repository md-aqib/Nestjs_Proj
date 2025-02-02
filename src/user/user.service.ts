import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { User } from './schemas/user.schema';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name)
    private userModel: mongoose.Model<User>,
  ) {}

  async findOne(filter: Record<string, any>): Promise<User | null> {
    return this.userModel.findOne(filter).exec();
  }

  async create(user: User): Promise<User> {
    const res = await this.userModel.create(user);
    return res;
  }
}