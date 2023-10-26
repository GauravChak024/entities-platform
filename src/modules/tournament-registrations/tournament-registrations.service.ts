import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { TournamentRegistration } from '../entities/tournament-registrations.entity';

@Injectable()
export class TournamentRegistrationsService {
  constructor(
    @InjectModel(TournamentRegistration) private readonly tournamentRegistrationModel: typeof TournamentRegistration,
  ) {}

  async getAllTournamentRegistrations(): Promise<TournamentRegistration[]> {
    return this.tournamentRegistrationModel.findAll();
  }
  async createTournamentRegistration(data: Partial<TournamentRegistration>): Promise<TournamentRegistration> {
    return this.tournamentRegistrationModel.create(data);
  }
  async getTournamentRegistrationById(registrationId: number): Promise<TournamentRegistration | null> {
    return this.tournamentRegistrationModel.findByPk(registrationId);
  }
}
