import { Table, Column, Model, DataType, ForeignKey, Sequelize } from 'sequelize-typescript';
import { Tournament } from './tournaments.entity';

@Table({ tableName: 'tournament_fees' })
export class TournamentFee extends Model<TournamentFee> {
  @Column({ 
    type: DataType.BIGINT,
    primaryKey: true, autoIncrement: true })
  fee_id: number;

  @ForeignKey(() => Tournament)
  @Column({ type: DataType.BIGINT, allowNull: false })
  tournament_id: number;

  @Column({
    type:DataType.ENUM('Coins', 'Cash'),
    allowNull: false})
  fee_type: string;

  @Column(DataType.INTEGER)
  coins_fee: number;

  @Column(DataType.DECIMAL(10, 2))
  cash_fee: number;
}
