import { Controller, Get, Query } from '@nestjs/common';
import { TournamentRegistrationsService } from './tournament-registrations.service';

@Controller('tournament-registration')
export class TournamentRegistrationsController {
  constructor(private readonly tournamentRegistrationsService: TournamentRegistrationsService) {}

  @Get()
  async getTournamentRegistrationById(@Query('registration_id') registrationId: number) {
    const registration = await this.tournamentRegistrationsService.getTournamentRegistrationById(registrationId);
    return { registration };
  }
}
