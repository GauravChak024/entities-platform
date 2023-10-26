import { Column, Model, Table, DataType, PrimaryKey, Sequelize } from 'sequelize-typescript';

@Table({ tableName: 'coin_packages' })
export class CoinPackage extends Model<CoinPackage> {
  @PrimaryKey
  @Column({ type: DataType.BIGINT, autoIncrement: true })
  package_id: number;

  @Column({ type: DataType.STRING, allowNull: false })
  currency: string;

  @Column({ type: DataType.DECIMAL(10, 2), allowNull: false })
  price: number;

  @Column({ type: DataType.INTEGER, allowNull: false })
  coins_in_package: number;

  @Column({ 
    type: DataType.DATE, 
    allowNull: false,
    defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')})
  created_at: Date;

  @Column({
    type: DataType.DATE,
    allowNull: false,
    defaultValue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'),
  })
  updated_at: Date;
}
