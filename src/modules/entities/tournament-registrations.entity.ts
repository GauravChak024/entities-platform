import { Table, Column, Model, DataType, ForeignKey, Sequelize } from 'sequelize-typescript';
import { User } from './users.entity';
import { Tournament } from './tournaments.entity';
import { Team } from './teams.entity';

@Table({ tableName: 'tournament_registrations' })
export class TournamentRegistration extends Model<TournamentRegistration> {
  @Column({ primaryKey: true, autoIncrement: true })
  registration_id: number;

  @ForeignKey(() => User)
  @Column({ type: DataType.BIGINT, allowNull: false })
  user_id: number;

  @ForeignKey(() => Tournament)
  @Column({ type: DataType.BIGINT, allowNull: false })
  tournament_id: number;

  @ForeignKey(() => Team)
  @Column({ type: DataType.BIGINT })
  team_id: number;

  @Column({
    type: DataType.ENUM('Pending', 'Accepted', 'Rejected'),
    allowNull: false,
    defaultValue: 'Pending'
  })
  registration_status: string;

  @Column({ 
    type: DataType.DATE, 
    allowNull: false,
    defaultValue: Sequelize.literal('CURRENT_TIMESTAMP') })
  created_at: Date;

  @Column({
    type: DataType.DATE,
    allowNull: false,
    defaultValue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'),
  })
  updated_at: Date;
}
