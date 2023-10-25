import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
// import { CoinTransactionsController } from './coin-transactions.controller';
// import { CoinTransactionsService } from './coin-transactions.service';
import { CoinTransaction } from '../entities/coin-transactions.entity';

@Module({
  imports: [SequelizeModule.forFeature([CoinTransaction])],
//   controllers: [CoinTransactionsController],
//   providers: [CoinTransactionsService],
})
export class CoinTransactionsModule {}
