import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Tournament } from '../entities/tournaments.entity';

@Injectable()
export class TournamentsService {
  constructor(@InjectModel(Tournament) private readonly tournamentModel: typeof Tournament) {}

  async getTournamentById(tournamentId: number): Promise<Tournament | null> {
    return this.tournamentModel.findByPk(tournamentId);
  }
}
