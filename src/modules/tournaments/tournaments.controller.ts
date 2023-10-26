import { Controller, Get, Delete, Param, Body, Post } from '@nestjs/common';
import { TournamentsService } from './tournaments.service';
import { Tournament } from '../entities/tournaments.entity'

@Controller('tournament')
export class TournamentsController {
  constructor(private readonly tournamentsService: TournamentsService) {}

  @Get('all')
  async getAllUsers() {
    const users = await this.tournamentsService.getAllTournaments();
    return { users };
  }

  @Get(':tournament_id')
  async getTournamentById(@Param('tournament_id') tournamentId: number) {
    const tournament = await this.tournamentsService.getTournamentById(tournamentId);
    return { tournament };
  }

  @Post('add')
  async createTournament(@Body() createTournamentDto: Tournament) {
    console.log("entered create user");
    const user = await this.tournamentsService.createTournament(createTournamentDto);
    return { user };
  }

  @Delete(':id')
  async deleteTournamentById(@Param('id') tournamentId: number) {
    return this.tournamentsService.deleteTournamentById(tournamentId);
  }
}
