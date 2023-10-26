import { Controller, Get, Query, Post, Body } from '@nestjs/common';
import { TeamMembersService } from './team-members.service';
import { TeamMember } from '../entities/team-members.entity'

@Controller('team-member')
export class TeamMembersController {
  constructor(private readonly teamMembersService: TeamMembersService) {}

  @Get('all')
  async getAllMembers() {
    const users = await this.teamMembersService.getAllTeamMembers();
    return { users };
  }

  @Get()
  async getTeamMemberById(@Query('team_id') teamId: number, @Query('user_id') userId: number) {
    const teamMember = await this.teamMembersService.getTeamMemberById(teamId, userId);
    return { teamMember };
  }

  @Post('add')
  async createMember(@Body() createTeamMemberDto: TeamMember) {
    const user = await this.teamMembersService.createTeamMember(createTeamMemberDto);
    return { user };
  }
}
