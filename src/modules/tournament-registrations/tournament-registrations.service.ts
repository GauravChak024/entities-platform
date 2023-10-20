import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { TournamentRegistration } from '../entities/tournament-registrations.entity';

@Injectable()
export class TournamentRegistrationsService {
  constructor(
    @InjectModel(TournamentRegistration) private readonly registrationModel: typeof TournamentRegistration,
  ) {}

  async getTournamentRegistrationById(registrationId: number): Promise<TournamentRegistration | null> {
    return this.registrationModel.findByPk(registrationId);
  }
}
