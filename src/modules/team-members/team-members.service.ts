import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { TeamMember } from '../entities/team-members.entity';

@Injectable()
export class TeamMembersService {
  constructor(@InjectModel(TeamMember) private readonly teamMemberModel: typeof TeamMember) {}

  async getTeamMemberById(teamId: number, userId: number): Promise<TeamMember | null> {
    return this.teamMemberModel.findOne({ where: { team_id: teamId, user_id: userId } });
  }
  async getAllTeamMembers(): Promise<TeamMember[]> {
    return this.teamMemberModel.findAll();
  }
  async createTeamMember(data: Partial<TeamMember>): Promise<TeamMember> {
    return this.teamMemberModel.create(data);
  }
}
