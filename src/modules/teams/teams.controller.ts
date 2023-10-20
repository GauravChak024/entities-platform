import { Controller, Get, Query } from '@nestjs/common';
import { TeamsService } from './teams.service';

@Controller('team')
export class TeamsController {
  constructor(private readonly teamsService: TeamsService) {}

  @Get()
  async getTeamById(@Query('team_id') teamId: number) {
    const team = await this.teamsService.getTeamById(teamId);
    return { team };
  }
}
