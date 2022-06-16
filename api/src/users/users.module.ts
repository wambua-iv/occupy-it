import { Users, UserSchema } from '@/models/users.models';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserController } from './users.controller';
import { UsersService } from './users.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: Users.name, schema: UserSchema }]), Users],
  controllers: [UserController],
  providers: [UsersService],
})
export class UserModule {}
