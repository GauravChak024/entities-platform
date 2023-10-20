import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { TournamentRegistrationsController } from './tournament-registrations.controller';
import { TournamentRegistrationsService } from './tournament-registrations.service';
import { TournamentRegistration } from '../entities/tournament-registrations.entity';

@Module({
  imports: [SequelizeModule.forFeature([TournamentRegistration])],
  controllers: [TournamentRegistrationsController],
  providers: [TournamentRegistrationsService],
})
export class TournamentRegistrationsModule {}
