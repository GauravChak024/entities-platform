import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Prize } from '../entities/prizes.entity';

@Injectable()
export class PrizesService {
  constructor(@InjectModel(Prize) private readonly prizeModel: typeof Prize) {}

  async getPrizeById(prizeId: number): Promise<Prize | null> {
    return this.prizeModel.findByPk(prizeId);
  }
}
