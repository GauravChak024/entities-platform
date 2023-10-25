import { Column, Model, Table, DataType, PrimaryKey, ForeignKey, BelongsTo, Sequelize } from 'sequelize-typescript';
import { User } from './users.entity';
import { CoinPackage } from './coin-packages.entity';

@Table({ tableName: 'user_coin_purchases' })
export class UserCoinPurchase extends Model<UserCoinPurchase> {
  @PrimaryKey
  @Column({ type: DataType.BIGINT, autoIncrement: true })
  purchase_id: number;

  @ForeignKey(() => User)
  @Column({ type: DataType.BIGINT, allowNull: false })
  user_id: number;

  @ForeignKey(() => CoinPackage)
  @Column({ type: DataType.BIGINT, allowNull: false })
  package_id: number;

  @Column({ type: DataType.DATE, defaultValue: DataType.NOW })
  purchase_date: Date;

  @BelongsTo(() => User)
  user: User;

  @BelongsTo(() => CoinPackage)
  coinPackage: CoinPackage;

  @Column({ type: DataType.DATE, defaultValue: DataType.NOW })
  created_at: Date;

//   @Column({ type: DataType.DATE, defaultValue: DataType.NOW, onUpdate: DataType.NOW })
//   updated_at: Date;
  @Column({
    type: DataType.DATE,
    defaultValue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'),
  })
  updated_at: Date;
}
