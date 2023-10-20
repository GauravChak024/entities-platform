import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { PrizesController } from './prizes.controller';
import { PrizesService } from './prizes.service';
import { Prize } from '../entities/prizes.entity';

@Module({
  imports: [SequelizeModule.forFeature([Prize])],
  controllers: [PrizesController],
  providers: [PrizesService],
})
export class PrizesModule {}
