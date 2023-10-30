import { Table, Column, Model, DataType, ForeignKey, Sequelize } from 'sequelize-typescript';
import { Tournament } from './tournaments.entity';

@Table({ tableName: 'prizes' })
export class Prize extends Model<Prize> {
  @Column({ type: DataType.BIGINT,primaryKey: true, autoIncrement: true })
  prize_id: number;

  @ForeignKey(() => Tournament)
  @Column({ type: DataType.BIGINT, allowNull: false })
  tournament_id: number;

  @Column({
    type: DataType.ENUM('Cash', 'Gift Voucher', 'Coins', 'Combination', 'PRIZELESS'),
    allowNull: false})
  prize_type: string;

  @Column({
    type:DataType.INTEGER,
    allowNull: false,
    })
  start_rank: number;

  @Column({
    type:DataType.INTEGER,
    allowNull: false,
    })
    end_rank: number;

  @Column(DataType.DECIMAL(10, 2))
  cash_prize: number;

  @Column(DataType.TEXT)
  voucher_description: string;

  @Column(DataType.INTEGER)
  coins_prize: number;
}
