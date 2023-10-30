import { Column, Model, Table, DataType, PrimaryKey, ForeignKey, BelongsTo, Sequelize } from 'sequelize-typescript';
import { User } from './users.entity';

@Table({ tableName: 'coin_transactions' })
export class CoinTransaction extends Model<CoinTransaction> {
  @PrimaryKey
  @Column({ type: DataType.BIGINT, autoIncrement: true })
  transaction_id: number;

  @ForeignKey(() => User)
  @Column({ type: DataType.BIGINT, allowNull: false })
  user_id: number;

  @Column({ type: DataType.INTEGER, allowNull: false })
  coins_change: number;

  @Column({ type: DataType.ENUM('Purchase', 'Earned', 'Spent'), allowNull: false })
  transaction_type: string;

  @Column({ type: DataType.DATE, defaultValue: DataType.NOW })
  transaction_date: Date;

  @BelongsTo(() => User)
  user: User;
}
