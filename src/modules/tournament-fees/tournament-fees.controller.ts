import { Controller, Get, Query } from '@nestjs/common';
import { TournamentFeesService } from './tournament-fees.service';

@Controller('tournament-fees')
export class TournamentFeesController {
  constructor(private readonly tournamentFeesService: TournamentFeesService) {}

  @Get()
  async getFeesById(@Query('fee_id') feeId: number) {
    const fee = await this.tournamentFeesService.getFeesById(feeId);
    return { fee };
  }
}
