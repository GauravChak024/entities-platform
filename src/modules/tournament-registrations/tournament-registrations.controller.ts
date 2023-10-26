import { Controller, Get, Param, Body, Post } from '@nestjs/common';
import { TournamentRegistrationsService } from './tournament-registrations.service';
import { TournamentRegistration } from '../entities/tournament-registrations.entity'

@Controller('tournament-registration')
export class TournamentRegistrationsController {
  constructor(private readonly tournamentRegistrationsService: TournamentRegistrationsService) {}

  @Get('all')
  async getAllUsers() {
    const users = await this.tournamentRegistrationsService.getAllTournamentRegistrations();
    return { users };
  }
  @Post('add')
  async createTournamentRegistration(@Body() createTournamentRegistrationDto: TournamentRegistration) {
    const user = await this.tournamentRegistrationsService.createTournamentRegistration(createTournamentRegistrationDto);
    return { user };
  }
  @Get(':registration_id')
  async getTournamentRegistrationById(@Param('registration_id') registrationId: number) {
    const registration = await this.tournamentRegistrationsService.getTournamentRegistrationById(registrationId);
    return { registration };
  }
}
