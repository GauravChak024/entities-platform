import { Table, Column, Model, DataType, Sequelize } from 'sequelize-typescript';

@Table({ tableName: 'tournaments' })
export class Tournament extends Model<Tournament> {
  @Column({ primaryKey: true, autoIncrement: true })
  tournament_id: number;

  @Column({
    type: DataType.BIGINT,
    allowNull: false,
  })
  parent_tournament_id: number;

  @Column({
    type: DataType.BIGINT,
    allowNull: false,
  })
  child_tournament_id: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  tournament_name: string;

  @Column(DataType.TEXT)
  description: string;

  @Column(DataType.TEXT)
  sub_description: string;

  @Column(DataType.STRING)
  demo_video_url: string;

  @Column(DataType.STRING)
  thumbnail_image_url: string;

  @Column(DataType.DATE)
  scheduled_start_date: Date;

  @Column(DataType.DATE)
  scheduled_end_date: Date;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  game_name: string;

  @Column(DataType.STRING)
  tournament_format: string;

  @Column(DataType.DECIMAL(10, 2))
  prize_pool: number;

  @Column({
    type: DataType.ENUM('Solo', 'Team'),
    defaultValue: 'Solo',
    allowNull: false
  })
  tournament_type: string;
}
