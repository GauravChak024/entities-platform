import { Table, Column, Model, DataType,Sequelize } from 'sequelize-typescript';

@Table({ tableName: 'users' })
export class User extends Model<User> {
  @Column({ primaryKey: true, autoIncrement: true })
  user_id: number;

  @Column({
    type:DataType.STRING,
    allowNull: false
    })
  username: string;

  @Column({
    type:DataType.STRING,
    allowNull: false
    })
  password: string;

  @Column({
    type:DataType.STRING,
    allowNull: false
    })
  email: string;

  @Column(DataType.STRING)
  phone_number: string;

  @Column(DataType.STRING)
  full_name: string;

  @Column(DataType.DATEONLY)
  date_of_birth: Date;

  @Column(DataType.STRING)
  country: string;

  @Column(DataType.STRING)
  preferred_language: string;

  @Column({ type: DataType.DATE, defaultValue: DataType.NOW })
  created_at: Date;

  // @Column({ type: DataType.DATE, defaultValue: DataType.NOW })
  // updated_at: Date;
  @Column({
    type: DataType.DATE,
    defaultValue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'),
  })
  updated_at: Date;
}
