import { Controller, Get } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('user')
export class UserController {
  constructor(private usersService: UsersService) {}

  @Get('profile')
  getUserProfile() {
    return this.usersService.getUserProfile();
  }
}
