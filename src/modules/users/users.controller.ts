// users.controller.ts
import { Controller, Get, Query, Delete, Param  } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('user')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  async getUserById(@Query('user_id') userId: number) {
    const user = await this.usersService.getUserById(userId);
    return { user };
  }

  @Delete(':id')
  async deleteUserById(@Param('id') userId: number) {
    return this.usersService.deleteUserById(userId);
  }
}