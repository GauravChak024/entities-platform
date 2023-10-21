import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Prize } from '../entities/prizes.entity';

@Injectable()
export class PrizesService {
  constructor(@InjectModel(Prize) private readonly prizeModel: typeof Prize) {}

  async getPrizeById(prizeId: number): Promise<Prize | null> {
    return this.prizeModel.findByPk(prizeId);
  }

  async deletePrizeById(prizeId: number): Promise<void> {
    const prize = await this.prizeModel.findByPk(prizeId);
    if (!prize) {
      throw new NotFoundException(`Prize with ID ${prizeId} not found.`);
    }
    await prize.destroy();
  }
}