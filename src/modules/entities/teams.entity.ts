import { Table, Column, Model, DataType,Sequelize } from 'sequelize-typescript';

@Table({ tableName: 'teams' })
export class Team extends Model<Team> {
  @Column({ 
    type: DataType.BIGINT,
    primaryKey: true, autoIncrement: true })
  team_id: number;

  @Column({
    type:DataType.STRING,
    allowNull: false
  })
  team_name: string;

  @Column({
    type:DataType.BIGINT,
    allowNull: false
  })
  team_leader_id: number;

  @Column({
    type:DataType.INTEGER,
    allowNull: false
  })
  max_team_size: number;

  @Column({
    type:DataType.INTEGER,
    allowNull: false,
    defaultValue: 0,
  })
  current_team_size: number;
}
