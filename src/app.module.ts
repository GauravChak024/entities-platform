import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { PrizesModule } from './modules/prizes/prizes.module';
import { TeamMembersModule } from './modules/team-members/team-members.module';
import { TeamsModule } from './modules/teams/teams.module';
import { TournamentFeesModule } from './modules/tournament-fees/tournament-fees.module';
import { TournamentRegistrationsModule } from './modules/tournament-registrations/tournament-registrations.module';
import { TournamentsModule } from './modules/tournaments/tournaments.module';
import { UsersModule } from './modules/users/users.module';
import { CoinsModule } from './modules/coins/coins.module';
import { CoinTransactionsModule } from './modules/coin-transactions/coin-transactions.module'; 
import { CoinPackagesModule } from './modules/coin-packages/coin-packages.module'; 
import { UserCoinPurchasesModule } from './modules/user-coin-purchases/user-coin-purchases.module'; 



@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: 'localhost',
      port: 3306,
      username: '<username>',
      password: '<pw>',
      database: '<database_name>',
      autoLoadModels: true,
      synchronize: true, // to be set to false later
    }),
    PrizesModule,
    TeamMembersModule,
    TeamsModule,
    TournamentFeesModule,
    TournamentRegistrationsModule,
    TournamentsModule,
    UsersModule,
    CoinsModule,
    CoinTransactionsModule,
    CoinPackagesModule,
    UserCoinPurchasesModule,
  ],
})
export class AppModule {}
