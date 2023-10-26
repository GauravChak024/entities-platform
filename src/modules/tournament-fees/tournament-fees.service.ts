import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { TournamentFee } from '../entities/tournament-fees.entity';

@Injectable()
export class TournamentFeesService {
  constructor(@InjectModel(TournamentFee) private readonly tournamentFeeModel: typeof TournamentFee) {}

  async getFeesById(feeId: number): Promise<TournamentFee | null> {
    return this.tournamentFeeModel.findByPk(feeId);
  }
  async getAllTournamentFees(): Promise<TournamentFee[]> {
    return this.tournamentFeeModel.findAll();
  }
  async createTournamentFee(data: Partial<TournamentFee>): Promise<TournamentFee> {
    return this.tournamentFeeModel.create(data);
  }
  async deleteFeesById(feeId: number): Promise<void> {
    const fee = await this.tournamentFeeModel.findByPk(feeId);
    if (!fee) {
      throw new NotFoundException(`Tournament fee with ID ${feeId} not found.`);
    }
    await fee.destroy();
  }
}
