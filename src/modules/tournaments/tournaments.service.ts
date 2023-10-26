import { Injectable, NotFoundException  } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Tournament } from '../entities/tournaments.entity';

@Injectable()
export class TournamentsService {
  constructor(@InjectModel(Tournament) private readonly tournamentModel: typeof Tournament) {}

  async getTournamentById(tournamentId: number): Promise<Tournament | null> {
    return this.tournamentModel.findByPk(tournamentId);
  }
  
  async getAllTournaments(): Promise<Tournament[]> {
    return this.tournamentModel.findAll();
  }
  async createTournament(data: Partial<Tournament>): Promise<Tournament> {
    return this.tournamentModel.create(data);
  }
  
  async deleteTournamentById(tournamentId: number): Promise<void> {
    const tournament = await this.tournamentModel.findByPk(tournamentId);
    if (!tournament) {
      throw new NotFoundException(`Tournament with ID ${tournamentId} not found.`);
    }
    await tournament.destroy();
  }
}
