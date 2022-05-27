import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserDocument, Users } from 'src/models/users.models';
import { SignInAuthDto, SignUpAuthDto } from './dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(Users.name) private User: Model<UserDocument>,
    private jwt: JwtService,
    private configService: ConfigService,
  ) {}

  async signUp(dto: SignUpAuthDto) {
      const user = await this.User({

      })
  }

  async signIn(dto: SignInAuthDto) {}

  async signInWithGoogle() {}
}
