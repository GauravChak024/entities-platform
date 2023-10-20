import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { TournamentFee } from '../entities/tournament-fees.entity';

@Injectable()
export class TournamentFeesService {
  constructor(@InjectModel(TournamentFee) private readonly tournamentFeeModel: typeof TournamentFee) {}

  async getFeesById(feeId: number): Promise<TournamentFee | null> {
    return this.tournamentFeeModel.findByPk(feeId);
  }
}
