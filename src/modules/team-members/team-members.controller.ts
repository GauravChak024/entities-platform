import { Controller, Get, Query } from '@nestjs/common';
import { TeamMembersService } from './team-members.service';

@Controller('team-member')
export class TeamMembersController {
  constructor(private readonly teamMembersService: TeamMembersService) {}

  @Get()
  async getTeamMemberById(@Query('team_id') teamId: number, @Query('user_id') userId: number) {
    const teamMember = await this.teamMembersService.getTeamMemberById(teamId, userId);
    return { teamMember };
  }
}
