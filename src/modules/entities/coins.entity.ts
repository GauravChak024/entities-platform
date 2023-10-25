import { Column, Model, Table, DataType, PrimaryKey, ForeignKey, BelongsTo, Sequelize } from 'sequelize-typescript';
import { User } from './users.entity';

@Table({ tableName: 'coins' })
export class Coin extends Model<Coin> {
  @PrimaryKey
  @ForeignKey(() => User)
  @Column({ type: DataType.BIGINT })
  user_id: number;

  @Column({ type: DataType.INTEGER, allowNull: false, defaultValue: 0 })
  coins_balance: number;

  @BelongsTo(() => User)
  user: User;

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
