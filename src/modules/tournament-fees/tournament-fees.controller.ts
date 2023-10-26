import { Controller, Get, Body, Delete, Param, Post } from '@nestjs/common';
import { TournamentFeesService } from './tournament-fees.service';
import { TournamentFee } from '../entities/tournament-fees.entity'

@Controller('tournament-fees')
export class TournamentFeesController {
  constructor(private readonly tournamentFeesService: TournamentFeesService) {}

  @Get('all')
  async getAllTournamentFees() {
    const users = await this.tournamentFeesService.getAllTournamentFees();
    return { users };
  }
  @Get(':fee_id')
  async getTournamentFeesById(@Param('fee_id') feeId: number) {
    const fee = await this.tournamentFeesService.getFeesById(feeId);
    return { fee };
  }
  @Post('add')
  async createTournamentFee(@Body() createTournamentFeesDto: TournamentFee) {
    const user = await this.tournamentFeesService.createTournamentFee(createTournamentFeesDto);
    return { user };
  }
  @Delete(':id')
  async deleteTournamentFeesById(@Param('id') feeId: number) {
    return this.tournamentFeesService.deleteFeesById(feeId);
  }
}