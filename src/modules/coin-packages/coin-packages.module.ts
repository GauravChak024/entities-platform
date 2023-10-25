import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
// import { CoinPackagesController } from './coin-packages.controller';
// import { CoinPackagesService } from './coin-packages.service';
import { CoinPackage } from '../entities/coin-packages.entity';

@Module({
  imports: [SequelizeModule.forFeature([CoinPackage])],
//   controllers: [CoinPackagesController],
//   providers: [CoinPackagesService],
})
export class CoinPackagesModule {}
