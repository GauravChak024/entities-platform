import { Controller, Get, Query, Delete, Param,NotFoundException,Body, Post  } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from '../entities/users.entity';


@Controller('user')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get('all')
  async getAllUsers() {
    const users = await this.usersService.getAllUsers();
    return { users };
  }

  @Get(':id')
  async getUserById(@Param('id')  userId: number) {
    const user = await this.usersService.getUserById(userId);
    return { user };
  }

  @Post('add')
  async createUser(@Body() createUserDto: User) {
    console.log("entered create user");
    const user = await this.usersService.createUser(createUserDto);
    return { user };
  }
  
  @Delete(':id')
  async deleteUserById(@Param('id') userId: number) {
    return this.usersService.deleteUserById(userId);
  }
}