import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Coin } from '../entities/coins.entity';

@Injectable()
export class CoinsService {
  constructor(@InjectModel(Coin) private readonly coinModel: typeof Coin) {}

  async deleteCoinById(userId: number): Promise<void> {
    const coin = await this.coinModel.findByPk(userId);
    if (!coin) {
      throw new NotFoundException(`Coin entry with user ID ${userId} not found.`);
    }
    await coin.destroy();
  }
}
