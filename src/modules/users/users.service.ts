import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from '../entities/users.entity';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User) private readonly userModel: typeof User) {}

  async getUserById(userId: number): Promise<User | null> {
    return this.userModel.findByPk(userId);
  }

  async deleteUserById(userId: number): Promise<void> {
    const user = await this.userModel.findByPk(userId);
    if (!user) {
      throw new NotFoundException(`User with ID ${userId} not found.`);
    }
    await user.destroy();
  }
}
