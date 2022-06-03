import { UserDocument, Users } from '@/models/users.models';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class UsersService {
  constructor(@InjectModel(Users.name) private User: Model<UserDocument>) {}

  async getUserProfile() {
    return await this.User.findOne();
  }
}
