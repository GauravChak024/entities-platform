import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
// import { CoinsController } from './coins.controller';
// import { CoinsService } from './coins.service';
import { Coin } from '../entities/coins.entity';

@Module({
  imports: [SequelizeModule.forFeature([Coin])],
//   controllers: [CoinsController],
//   providers: [CoinsService],
})
export class CoinsModule {}
