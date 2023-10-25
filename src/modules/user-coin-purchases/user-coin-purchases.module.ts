import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
// import { UserCoinPurchasesController } from './user-coin-purchases.controller';
// import { UserCoinPurchasesService } from './user-coin-purchases.service';
import { UserCoinPurchase } from '../entities/user-coin-purchases.entity';

@Module({
  imports: [SequelizeModule.forFeature([UserCoinPurchase])],
//   controllers: [UserCoinPurchasesController],
//   providers: [UserCoinPurchasesService],
})
export class UserCoinPurchasesModule {}
