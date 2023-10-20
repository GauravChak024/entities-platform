import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { TournamentFeesController } from './tournament-fees.controller';
import { TournamentFeesService } from './tournament-fees.service';
import { TournamentFee } from '../entities/tournament-fees.entity';

@Module({
  imports: [SequelizeModule.forFeature([TournamentFee])],
  controllers: [TournamentFeesController],
  providers: [TournamentFeesService],
})
export class TournamentFeesModule {}
