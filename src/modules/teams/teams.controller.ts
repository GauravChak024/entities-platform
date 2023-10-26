import { Controller, Get, Param, Body, Post } from '@nestjs/common';
import { TeamsService } from './teams.service';
import { Team } from '../entities/teams.entity'

@Controller('team')
export class TeamsController {
  constructor(private readonly teamsService: TeamsService) {}
  
  @Get('all')
  async getAllTeams() {
    const users = await this.teamsService.getAllTeams();
    return { users };
  }

  @Get(':team_id')
  async getTeamById(@Param('team_id') teamId: number) {
    const team = await this.teamsService.getTeamById(teamId);
    return { team };
  }

  @Post('add')
  async createTeam(@Body() createTeamDto: Team) {
    const user = await this.teamsService.createTeam(createTeamDto);
    return { user };
  }
}
