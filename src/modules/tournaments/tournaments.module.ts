import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { TournamentsController } from './tournaments.controller';
import { TournamentsService } from './tournaments.service';
import { Tournament } from '../entities/tournaments.entity';

@Module({
  imports: [SequelizeModule.forFeature([Tournament])],
  controllers: [TournamentsController],
  providers: [TournamentsService],
})
export class TournamentsModule {}