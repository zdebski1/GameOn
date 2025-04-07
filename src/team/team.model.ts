import ITeamModel from './team.interface';
import sequelizeDb from '../config/sequelizeDb';  
import { DataTypes, Model } from 'sequelize';

class Team extends Model<ITeamModel> implements ITeamModel {
  public teamId!: number;
  public teamName!: string;
  public isActive!: boolean;
  public createdDateTime!: Date;
  public createdBy!: string;
  public updatedDateTime!: Date;
  public updatedBy!: string
}

Team.init(
  {
    teamId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    teamName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    isActive: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    createdDateTime: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    createdBy: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    updatedDateTime: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    updatedBy: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    sequelize: sequelizeDb,
    tableName: 'team',
    timestamps: false,
  }
);

export default Team;