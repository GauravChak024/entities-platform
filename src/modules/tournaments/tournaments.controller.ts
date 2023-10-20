import { Controller, Get, Query } from '@nestjs/common';
import { TournamentsService } from './tournaments.service';

@Controller('tournament')
export class TournamentsController {
  constructor(private readonly tournamentsService: TournamentsService) {}

  @Get()
  async getTournamentById(@Query('tournament_id') tournamentId: number) {
    const tournament = await this.tournamentsService.getTournamentById(tournamentId);
    return { tournament };
  }
}
