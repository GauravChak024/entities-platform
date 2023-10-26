import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Team } from '../entities/teams.entity';

@Injectable()
export class TeamsService {
  constructor(@InjectModel(Team) private readonly teamModel: typeof Team) {}
  
  async getAllTeams(): Promise<Team[]> {
    return this.teamModel.findAll();
  }
  async createTeam(data: Partial<Team>): Promise<Team> {
    return this.teamModel.create(data);
  }
  async getTeamById(teamId: number): Promise<Team | null> {
    return this.teamModel.findByPk(teamId);
  }
}
