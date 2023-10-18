import { Table, Column, Model, DataType, ForeignKey, Sequelize } from 'sequelize-typescript';
import { Team } from './teams.entity';
import { User } from './users.entity';

@Table({ tableName: 'team_members', timestamps: false })
export class TeamMember extends Model<TeamMember> {
  @ForeignKey(() => Team)
  @Column({ type: DataType.BIGINT, allowNull: false, primaryKey: true })
  team_id: number;

  @ForeignKey(() => User)
  @Column({ type: DataType.BIGINT, allowNull: false, primaryKey: true })
  user_id: number;

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
